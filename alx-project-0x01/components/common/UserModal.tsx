import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 1,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="bg-gray-900 bg-opacity-50 flex justify-center ">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userId" className="block ">User ID</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            className="w-full p"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title" className="block ">Title</label>
                        <input
                            type="text"
                            id="id"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full p"
                            placeholder="Enter User Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block ">Body</label>
                        <textarea
                            id="id"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full p"
                            placeholder="Enter User Email"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className=""
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className=""
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;