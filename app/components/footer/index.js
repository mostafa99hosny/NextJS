
"use client"
import Link from "next/link";
import React from "react";
import './footer.css'

export default function Footer() {
  return (
    <>
        <footer className="footer">
          <div className="container text-center">
            <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/users">Users</Link>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Open Zocksh. All rights reserved.
            </p>
          </div>
        </footer>
    </>
  );
}
