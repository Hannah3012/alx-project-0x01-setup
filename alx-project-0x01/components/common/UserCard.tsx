import React from 'react';
import { UserProps } from './interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>

      <div className="text-gray-600 space-y-2">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">Address</h3>
        <p className="text-gray-600">
          {user.address.suite}, {user.address.street},<br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-800">Company</h3>
        <p className="text-gray-600">
          <strong>{user.company.name}</strong><br />
          <em>{user.company.catchPhrase}</em><br />
          {user.company.bs}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
