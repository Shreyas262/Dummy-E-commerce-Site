export default function formatPaymentMethod(method) {
    const paymentMethods = {
        card: "Credit / Debit Card",
        upi: "UPI",
        cod: "Cash on Delivery",
    };

    return paymentMethods[method] ?? method;
}