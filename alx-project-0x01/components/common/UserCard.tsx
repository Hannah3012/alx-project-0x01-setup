import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website }) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">Username: {username}</p>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Phone: {phone}</p>
            <p className="text-gray-600">Website: {website}</p>
            <div className="mt-4 text-sm text-gray-500">User ID: {id}</div>
        </div>
    );
};

export default UserCard;