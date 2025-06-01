import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newUsers, setNewUsers] = useState<UserProps[]>([]);

    const handleAddUser = (newUser: UserData) => {
        const addedUser: UserProps = {
            id: posts.length + newUsers.length + 1,
            ...newUser
        };
        setNewUsers([...newUsers, addedUser]);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">User Directory</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-green-600 px-4 py-2 rounded-full text-white"
                    >
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {posts.map((user) => (
                        <UserCard key={user.id} {...user} />
                    ))}
                    {newUsers.map((user) => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </div>
            </main>
            {isModalOpen && (
                <UserModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();
    return { props: { posts } };
}

export default Users;
