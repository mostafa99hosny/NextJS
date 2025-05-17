import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserCard({ user }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" style={{ width: '18rem', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className="card-body">
        <h5 className="card-title">{user.name || 'Unknown User'}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Username:</strong> {user.username }</li>
          <li className="list-group-item"><strong>Email:</strong> {user.email }</li>
          <li className="list-group-item"><strong>Phone:</strong> {user.phone }</li>
          <li className="list-group-item"><strong>Website:</strong> {user.website }</li>
          {user.address && user.address.city && (
            <li className="list-group-item"><strong>City:</strong> {user.address.city}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,    
    website: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string
    })
  })
};

UserCard.defaultProps = {
  user: null
};      