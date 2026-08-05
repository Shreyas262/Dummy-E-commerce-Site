function AddressCard({
    address,
    index,
    onEdit,
    onDelete,
}) {
    return (
        <div className="address-card card">
            <div className="address-details">
                <p className="address-line">{address.flatHouse}</p>
                <p className="address-line">{address.buildingStreet}</p>
                <p className="address-line">{address.city} - {address.zipcode}</p>
            </div>

            <div className="address-actions">

                <button
                    type="button"
                    className="edit-btn button"
                    onClick={() => onEdit(address, index)}
                >
                    Edit
                </button>

                <button
                    type="button"
                    className="delete-btn button"
                    onClick={() => onDelete(address)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default AddressCard;