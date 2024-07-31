import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} onUserClick={onUserClick} />
      ))}
    </div>
  );
};

export default UserList;