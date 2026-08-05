import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../app-store/slice/authSlice";
import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";

function AddressSection() {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.auth.user);

    if (!currentUser) return null;

    const addresses = currentUser.addresses;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState("add");
    const [selectedAddress, setSelectedAddress] = useState({});

    const handleOpenAddModal = () => {
        setMode("add");
        setSelectedAddress(null);
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (address, index) => {
        setMode("edit");
        setSelectedAddress(address);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDeleteAddress = (address) => {
        if (!window.confirm("Are you sure you want to delete this address?")) {
            return;
        }

        const filteredAddresses = addresses.filter(
            add => add.id !== address.id
        );

        dispatch(updateUser({
            addresses: filteredAddresses
        }));
    };

    return (
        <section className="address-section">

            <h3>Saved Addresses</h3>

            {addresses.length === 0 ? (
                <p>No address added yet.</p>
                ) : (
                addresses.map((address, index) => (
                    <AddressCard
                        key={address.id}
                        address={address}
                        index={index}
                        onEdit={handleOpenEditModal}
                        onDelete={handleDeleteAddress}
                    />
                ))
            )}

            <button
                className="button"
                onClick={handleOpenAddModal}
            >
                Add Address
            </button>

            <AddressModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                mode={mode}
                address={selectedAddress}
            />

        </section>
    );
}

export default AddressSection;