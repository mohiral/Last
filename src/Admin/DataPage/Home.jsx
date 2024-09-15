import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
    const [offers, setOffers] = useState([]);
    const [newOffer, setNewOffer] = useState({
        img: "",
        title: "",
        code: "",
        description: "",
    });
    const [isEditing, setIsEditing] = useState(false); // Track if editing
    const [currentOfferId, setCurrentOfferId] = useState(null); // Track current offer being edited
    const [loading, setLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track errors
    const [success, setSuccess] = useState(null); // Track success messages

    const navigate = useNavigate();

    // Fetch offers from the backend
    useEffect(() => {
        const fetchOffers = async () => {
            try {
                setLoading(true);
                const response = await axios.get("https://last-wruj.onrender.com/offers");
                setOffers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching offers", error);
                setLoading(false);
                setError("Failed to fetch offers");
            }
        };

        fetchOffers();
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
    };

    // Add or Update offer
    const handleSubmit = async () => {
        if (!newOffer.title || !newOffer.code) {
            setError("Please fill all required fields");
            return;
        }
        setLoading(true);

        try {
            if (isEditing) {
                // If editing, update the existing offer
                const response = await axios.put(`https://last-wruj.onrender.com/offers/${currentOfferId}`, newOffer);
                setOffers(offers.map((offer) => (offer._id === currentOfferId ? response.data : offer))); // Update offers array
                setIsEditing(false); // Reset edit mode
                setSuccess("Offer updated successfully");
            } else {
                // If not editing, add a new offer
                const response = await axios.post("https://last-wruj.onrender.com/offers", newOffer);
                setOffers([...offers, response.data]); // Update state with the new offer
                setSuccess("Offer added successfully");
            }

            // Reset form and state
            setNewOffer({ img: "", title: "", code: "", description: "" });
            setCurrentOfferId(null);
        } catch (error) {
            setError(error.response?.data?.message || "Failed to add/update offer");
        } finally {
            setLoading(false);
        }
    };

    // Delete an offer
    const deleteOffer = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`https://last-wruj.onrender.com/offers/${id}`);
            setOffers(offers.filter((offer) => offer._id !== id)); // Update state to remove deleted offer
            setSuccess("Offer deleted successfully");
        } catch (error) {
            setError("Failed to delete offer");
        } finally {
            setLoading(false);
        }
    };

    // Edit an offer
    const editOffer = (offer) => {
        setNewOffer({
            img: offer.img,
            title: offer.title,
            code: offer.code,
            description: offer.description,
        });
        setIsEditing(true);
        setCurrentOfferId(offer._id); // Set current offer ID for editing
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold mb-4">Admin Panel - Manage Offers</h2>

                {/* Error & Success Messages */}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">{success}</p>}

                {/* Add/Edit Form */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{isEditing ? "Edit Offer" : "Add New Offer"}</h3>
                    {["img", "title", "code", "description"].map((field, index) => (
                        <input
                            key={index}
                            type="text"
                            name={field}
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            value={newOffer[field]}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-lg w-full mb-2"
                        />
                    ))}
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : isEditing ? "Update Offer" : "Add Offer"}
                    </button>
                </div>

                {/* List of Current Offers */}
                {loading ? (
                    <p>Loading offers...</p>
                ) : (
                    <>
                        <h3 className="text-lg font-semibold mb-2">Current Offers</h3>
                        <ul className="space-y-4">
                            {offers.map((offer) => (
                                <li key={offer._id} className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 flex items-start space-x-4">
                                    <img src={offer.img} alt="Offer" className="h-16 w-16 object-cover rounded-lg border border-gray-200" />
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold mb-1">Title: {offer.title}</h4>
                                        <p className="text-sm text-gray-600 mb-2">
                                            <span className="font-bold text-gray-900">Use Code:</span> <span className="font-bold">{offer.code}</span>
                                        </p>
                                        <p className="text-sm"><span className="font-semibold">Description: </span>{offer.description}</p>
                                    </div>
                                    <div className="flex flex-col justify-between space-y-2">
                                        <button
                                            onClick={() => editOffer(offer)}
                                            className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteOffer(offer._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            <button
                onClick={() => navigate("/")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
                Back to Home
            </button>
        </div>
    );
};

export default AdminPanel;
