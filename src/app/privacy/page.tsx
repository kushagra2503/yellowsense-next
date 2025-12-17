export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-brand-primary">Privacy Policy</h1>
      <div className="prose max-w-3xl text-gray-700 space-y-4">
        <p>Your privacy is important to us. This policy explains how we handle your data.</p>
        <h3 className="text-xl font-bold text-gray-900">Data Collection</h3>
        <p>We collect basic information like name, phone number, and address solely for the purpose of fulfilling your service requests.</p>
        <h3 className="text-xl font-bold text-gray-900">Data Sharing</h3>
        <p>We do not sell your data. Your contact details are shared only with the assigned service professional.</p>
      </div>
    </div>
  );
}

