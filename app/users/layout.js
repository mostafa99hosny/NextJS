import React from 'react';

export const metadata = {
  title: 'Users - User Management App',
  description: 'Manage users in the application',
};

export default function UsersLayout({ children }) {
  return (
    <div className="users-layout">
      {children}
    </div>
  );
}
