export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-brand-primary">Terms & Conditions</h1>
      <div className="prose max-w-3xl text-gray-700 space-y-4">
        <p>Welcome to YellowSense. By using our services, you agree to the following terms.</p>
        <h3 className="text-xl font-bold text-gray-900">Service Usage</h3>
        <p>You agree to use our platform for lawful purposes only and to treat our service professionals with respect.</p>
        <h3 className="text-xl font-bold text-gray-900">Liability</h3>
        <p>YellowSense acts as a platform to connect you with service providers. While we verify professionals, we are not liable for personal disputes beyond the scope of the service agreement.</p>
      </div>
    </div>
  );
}

