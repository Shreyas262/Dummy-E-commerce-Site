import NavLinks from "./NavLinks";

function MobileMenu({
    isOpen,
    onClose,
    cartItems,
    wishlistItems,
    isAuthenticated,
}) {

    if (!isOpen) return null;

    return (
        <>
            <div
                className="mobile-overlay"
                onClick={onClose}
            />

            <aside className="mobile-menu">

                <button
                    className="mobile-close-btn"
                    onClick={onClose}
                    type="button"
                >
                    ✕
                </button>

                <NavLinks
                    cartItems={cartItems}
                    wishlistItems={wishlistItems}
                    isAuthenticated={isAuthenticated}
                    onNavigate={onClose}
                />

            </aside>
        </>
    );
}

export default MobileMenu;