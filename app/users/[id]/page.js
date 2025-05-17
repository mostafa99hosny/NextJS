import React from "react";
import UserCard from "../../components/UserCard";
import Link from "next/link";

export const revalidate = 10;

async function getUser(id) {
  try {
    let baseUrl;
    if (process.env.NODE_ENV === 'development') {
      baseUrl = 'http://localhost:3000';
    } else {
      baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';
    }

    console.log(`Fetching user from: ${baseUrl}/api/users/${id}`);

    const res = await fetch(`${baseUrl}/api/users/${id}`, {
      next: { revalidate: 10 }
    });

    if (!res.ok) {
      console.error(`Error fetching user: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export default async function UserDetails({ params }) {
  const { id } = params;
  const user = await getUser(id);

  if (!user) {
    return (
      <div className="container">
        <Link href="/users" className="btn btn-secondary mb-4">
          Back to Users
        </Link>
        <div className="alert alert-danger">
          User not found or error loading user data
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link href="/users" className="btn btn-secondary mb-4">
        Back to Users
      </Link>

      <UserCard user={user} />
    </div>
  );
}