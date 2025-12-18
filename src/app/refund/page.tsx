export default function RefundPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-brand-primary">Refund Policy</h1>
      <div className="prose max-w-3xl text-gray-700 space-y-4">
        <p>At Yellowsense Technologies, we strive to ensure your satisfaction with our services.</p>
        <h3 className="text-xl font-bold text-gray-900">Cancellation</h3>
        <p>You can cancel your booking up to 24 hours before the scheduled service time for a full refund.</p>
        <h3 className="text-xl font-bold text-gray-900">Refunds</h3>
        <p>Refunds are processed within 5-7 business days to the original payment method.</p>
        <p>If you are unsatisfied with the service provided, please contact our support team within 24 hours of the service completion.</p>
      </div>
    </div>
  );
}

