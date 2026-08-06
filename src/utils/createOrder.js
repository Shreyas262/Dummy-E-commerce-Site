import calculateOrderTotals from "./calculateOrderTotals";

export default function createOrder({
    user,
    cartItems,
    address,
    paymentMethod,
}) {

    const {
        totalItems,
        subtotal,
        shipping,
        tax,
        total,
    } = calculateOrderTotals(cartItems);

    return {
        id: crypto.randomUUID(),

        userId: user.id,

        items: cartItems,

        address,

        paymentMethod,

        totalItems,

        subtotal,

        shipping,

        tax,

        total,

        status: "Placed",

        orderedAt: new Date().toISOString(),
    };
}