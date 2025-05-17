import React from "react";
import UserCard from "../components/UserCard";
import Link from "next/link";
export const revalidate = 10;

async function getData() {
  try {
    let baseUrl;
    if (process.env.NODE_ENV === 'development') {
      baseUrl = 'http://localhost:3000';
    } else {
      baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';
    }

    console.log(`Fetching users from: ${baseUrl}/api/users`);

    const res = await fetch(`${baseUrl}/api/users`, {
      next: { revalidate: 10 }
    });

    if (!res.ok) {
      console.error(`Error fetching users: ${res.status}`);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export default async function Users() {
  const users = await getData();

  return (
    <div className="container">
      <h1>Users</h1>
      <Link href="/users/add" className="btn btn-primary mb-4">
        Add New User
      </Link>

      {users.length === 0 ? (
        <div className="alert alert-info">
          No users found. Please add a new user.
        </div>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div key={user._id} className="col-md-4 mb-4">
              <Link href={`/users/${user._id}`}>
                <UserCard user={user} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
