import React from 'react';

export default function UserCard({ user }) {
  // Add a safety check
  if (!user) {
    return <div className="card"><div className="card-body">Loading user data...</div></div>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name || 'No Name'}</h5>
        <p>Username: {user.username || 'N/A'}</p>
        <p>Email: {user.email || 'N/A'}</p>
      </div>
    </div>
  );
}