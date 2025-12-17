"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type BookingFormProps = {
  serviceType: "Maid" | "Nanny" | "Cook";
  children?: React.ReactNode; // For extra fields like children count
};

type FormData = {
  startDate: string;
  startTime: string;
  locationType: "Society" | "Area";
  locationName: string;
  plan: "One Time" | "Monthly";
  preferences: string;
  language: string;
  message: string;
  // Dynamic fields handled loosely or via extended types if strict
  [key: string]: any; 
};

export default function BookingForm({ serviceType, children }: BookingFormProps) {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      locationType: "Society",
      plan: "Monthly"
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Booking Data:", { ...data, serviceType });
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push("/checkout");
  };

  const locationType = watch("locationType");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-brand-primary mb-2">Book a {serviceType}</h2>
        <p className="text-gray-500">Tell us your requirements and we'll find the best match.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Date & Time Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-primary" /> Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              {...register("startDate", { required: "Start date is required" })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-primary" /> Start Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              {...register("startTime", { required: "Start time is required" })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
            />
            {errors.startTime && <p className="text-red-500 text-xs">{errors.startTime.message as string}</p>}
          </div>
        </div>

        {/* Location & Plan Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
             <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-primary" /> Location Type
            </label>
            <div className="flex gap-4 p-1 bg-gray-100 rounded-xl">
              {["Society", "Area"].map((type) => (
                <label
                  key={type}
                  className={cn(
                    "flex-1 text-center py-2 rounded-lg cursor-pointer text-sm font-medium transition-all",
                    locationType === type
                      ? "bg-white text-brand-primary shadow-sm"
                      : "text-gray-500 hover:bg-gray-200"
                  )}
                >
                  <input
                    type="radio"
                    value={type}
                    {...register("locationType")}
                    className="hidden"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Plan Type</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  value="Monthly"
                  {...register("plan")}
                  className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-gray-700 group-hover:text-brand-primary transition-colors">Monthly</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  value="One Time"
                  {...register("plan")}
                  className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-gray-700 group-hover:text-brand-primary transition-colors">One Time</span>
              </label>
            </div>
          </div>
        </div>

        {/* Location Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            {locationType === "Society" ? "Society Name" : "Area Name"}
          </label>
          <input
            type="text"
            placeholder={`Enter your ${locationType.toLowerCase()}`}
            {...register("locationName", { required: "Location is required" })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
          />
          {errors.locationName && <p className="text-red-500 text-xs">{errors.locationName.message as string}</p>}
        </div>

        {/* Extra Children Fields (passed from parent page) */}
        {children}

        {/* Preferences */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Any Specific Preferences?</label>
          <textarea
            {...register("message")}
            rows={3}
            placeholder="E.g. Pet friendly, specific language, cooking style..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>Proceed to Checkout <CheckCircle2 className="w-5 h-5" /></>
          )}
        </button>
      </form>
    </motion.div>
  );
}

