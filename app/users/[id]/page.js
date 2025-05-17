"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import UserCard from "../../components/UserCard";

export default function Details() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <UserCard user={user} />
      </div>
    </div>
  );
}