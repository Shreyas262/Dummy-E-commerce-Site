import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../app-store/slice/authSlice";

const createEmptyAddress = () => ({
    id: crypto.randomUUID(),
    flatHouse: "",
    buildingStreet: "",
    city: "",
    zipcode: "",
});

function AddressModal({
    isOpen,
    onClose,
    mode,
    address,
}) {

    const dispatch = useDispatch();
    const currentUser = useSelector(
        state => state.auth.user
    );

    if (!currentUser) return null;

    const [addressState, setAddressState] = useState(createEmptyAddress());
    const addresses = currentUser.addresses;
    const [error, setError] = useState("");

    useEffect(() => {

        if (isOpen) {
            if (mode === "edit" && address) {
                setAddressState(address);
            }
            else {
                setAddressState(createEmptyAddress());
            }
            setError("");
        }

    }, [isOpen, mode, address]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (error) setError("");

        setAddressState(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    

    const handleSubmit = (e) => {

        e.preventDefault();

        const formattedAddress = {
            ...addressState,
            flatHouse: addressState.flatHouse.trim(),
            buildingStreet: addressState.buildingStreet.trim(),
            city: addressState.city.trim(),
            zipcode: addressState.zipcode.trim(),
        };
        
        if (
            !formattedAddress.flatHouse ||
            !formattedAddress.buildingStreet ||
            !formattedAddress.city ||
            !formattedAddress.zipcode
        ) {
            setError("Please fill in all address fields.");
            return;
        }

        const addressExists = addresses.some(add =>
            add.id !== formattedAddress.id &&
            add.flatHouse === formattedAddress.flatHouse &&
            add.buildingStreet === formattedAddress.buildingStreet &&
            add.city === formattedAddress.city &&
            add.zipcode === formattedAddress.zipcode
        );
        
        if (mode === "add" && addressExists) {
            setError("Address already exists.");
            return;
        }

        if (mode === "edit" && addressExists) {
            setError("Address already exists.");
            return;
        }

        if (
            !window.confirm(
                `Are you sure you want to ${mode} this address?`
            )
        ) {
            return;
        }

        let updatedAddresses;

        if (mode === "add") {

            updatedAddresses = [
                ...addresses,
                formattedAddress,
            ];

        } else {

            updatedAddresses = addresses.map(add =>
                add.id === formattedAddress.id
                    ? formattedAddress
                    : add
            );
            
        }

        dispatch(updateUser({
            addresses: updatedAddresses,
        }));

        onClose();
    };

    return (
        <div className="address-modal-overlay">

            <div className="address-modal">

                <div className="modal-header">

                    <h2>
                        {mode === "add"
                            ? "Add Address"
                            : "Edit Address"}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="modal-close-btn"
                    >
                        &times;
                    </button>

                </div>

                <form
                    className="address-form"
                    onSubmit={handleSubmit}
                >

                    <div className="modal-body">

                        {error && (
                            <p className="form-error">
                                {error}
                            </p>
                        )}

                        <label htmlFor="address-flat-house">Flat/House No.: </label>
                        <input
                        type="text"
                        name="flatHouse"
                        id="address-flat-house"
                        placeholder="e.g. A-101"
                        value={addressState.flatHouse}
                        onChange={handleChange}
                        required
                        />

                        <label htmlFor="address-building-street">Building/Street Name: </label>
                        <input
                        type="text"
                        name="buildingStreet"
                        id="address-building-street"
                        placeholder="e.g. ABC building/street"
                        value={addressState.buildingStreet}
                        onChange={handleChange}
                        required
                        />

                        <label htmlFor="address-city">City: </label>
                        <input
                        type="text"
                        name="city"
                        id="address-city"
                        placeholder="e.g. Delhi"
                        value={addressState.city}
                        onChange={handleChange}
                        required
                        />

                        <label htmlFor="userZipcode">Zip-code: </label>
                        <input
                        type="text"
                        name="zipcode"
                        id="address-zipcode"
                        placeholder="e.g. 425201"
                        maxLength="6"
                        value={addressState.zipcode}
                        onChange={handleChange}
                        required
                        />
                        

                    </div>

                    <div className="modal-footer">

                        <button
                            type="submit"
                            className="button"
                        >
                            {mode === "add"
                                ? "Add"
                                : "Save"}
                        </button>

                        <button
                            type="button"
                            className="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AddressModal;