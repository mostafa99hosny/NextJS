import React from 'react';
import UserForm from '../../components/UserForm';
import Link from 'next/link';

export default function AddUser() {
  return (
    <div className="container">
      <div className="my-4">
        <Link href="/users" className="btn btn-secondary mb-4">
          ← Back to Users
        </Link>
        
        <UserForm />
      </div>
    </div>
  );
}
