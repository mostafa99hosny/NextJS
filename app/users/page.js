import React from "react";
import UserCard from "../components/UserCard";
import Link from "next/link";

async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default async function Users() {
  let data = await getData();

  return (
    <>
      <h1>Users</h1>
      {data.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <p>No users found. Please try again later.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {data.map((user) => (
            <div key={user.id}>
              <Link href={`/users/${user.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                <UserCard user={user} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
