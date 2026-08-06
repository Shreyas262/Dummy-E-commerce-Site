export default function calculateOrderTotals(items) {

    const totalItems = items.reduce((total, item) => total + item.quantity, 0)

    const subtotal = items.reduce((total, item) => total + (item.quantity * item.price), 0)

    const shipping = subtotal >= 200 ? 0 : 5

    const tax = subtotal * 0.18

    const total = subtotal + shipping + tax

    return {
        totalItems,
        subtotal,
        shipping,
        tax,
        total,
    };
}