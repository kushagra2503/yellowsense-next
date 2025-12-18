"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  if (!hex || typeof hex !== "string") return null;
  
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function genRandomNumbers(min: number, max: number, count: number): number[] {
  const arr: number[] = [];
  while (arr.length < count && arr.length < max - min) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  
  const defaultProps = useMemo(() => ({
    pointSize: globeConfig.pointSize ?? 1,
    atmosphereColor: globeConfig.atmosphereColor ?? "#ffffff",
    showAtmosphere: globeConfig.showAtmosphere ?? true,
    atmosphereAltitude: globeConfig.atmosphereAltitude ?? 0.1,
    polygonColor: globeConfig.polygonColor ?? "rgba(255,255,255,0.7)",
    globeColor: globeConfig.globeColor ?? "#1d072e",
    emissive: globeConfig.emissive ?? "#000000",
    emissiveIntensity: globeConfig.emissiveIntensity ?? 0.1,
    shininess: globeConfig.shininess ?? 0.9,
    arcTime: globeConfig.arcTime ?? 2000,
    arcLength: globeConfig.arcLength ?? 0.9,
    rings: globeConfig.rings ?? 1,
    maxRings: globeConfig.maxRings ?? 3,
  }), [globeConfig]);

  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  // Build point data from arcs
  useEffect(() => {
    if (!data || data.length === 0) return;
    
    const points: {
      size: number;
      order: number;
      color: string;
      lat: number;
      lng: number;
    }[] = [];

    for (const arc of data) {
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // Remove duplicates
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );

    setGlobeData(filteredPoints);
  }, [data, defaultProps.pointSize]);

  // Setup globe material
  useEffect(() => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
    globeMaterial.shininess = defaultProps.shininess;
  }, [defaultProps]);

  // Setup polygons and atmosphere
  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);
  }, [globeData, defaultProps]);

  // Setup arcs
  useEffect(() => {
    if (!globeRef.current || !globeData || data.length === 0) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as Position).startLat)
      .arcStartLng((d) => (d as Position).startLng)
      .arcEndLat((d) => (d as Position).endLat)
      .arcEndLng((d) => (d as Position).endLng)
      .arcColor((d: unknown) => (d as Position).color)
      .arcAltitude((d) => (d as Position).arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((d) => (d as Position).order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);
  }, [data, globeData, defaultProps]);

  // Setup points
  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .pointsData(globeData)
      .pointColor((d) => (d as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);
  }, [globeData]);

  // Setup rings animation
  useEffect(() => {
    if (!globeRef.current || !globeData || globeData.length === 0) return;

    // Initialize rings
    globeRef.current
      .ringsData([])
      .ringColor(() => (t: number) => `rgba(255,153,24,${1 - t})`)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      
      const randomIndices = genRandomNumbers(
        0,
        globeData.length,
        Math.floor((globeData.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((_, i) => randomIndices.includes(i))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [globeData, defaultProps]);

  return <threeGlobe ref={globeRef} />;
}

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World({ globeConfig, data }: WorldProps) {
  const scene = useMemo(() => {
    const s = new Scene();
    s.fog = new Fog(0xffffff, 400, 2000);
    return s;
  }, []);

  const camera = useMemo(
    () => new PerspectiveCamera(50, aspect, 180, 1800),
    []
  );

  return (
    <Canvas scene={scene} camera={camera}>
      <WebGLRendererConfig />
      <ambientLight 
        color={globeConfig.ambientLight ?? "#ffffff"} 
        intensity={0.6} 
      />
      <directionalLight
        color={globeConfig.directionalLeftLight ?? "#ffffff"}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight ?? "#ffffff"}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight ?? "#ffffff"}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 1}
        autoRotate={globeConfig.autoRotate ?? false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export default World;
