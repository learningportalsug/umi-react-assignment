import React from 'react';

const UserCard = ({ user, onUserClick }) => {
  return (
    <div className="user-card" onClick={() => onUserClick(user)}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;