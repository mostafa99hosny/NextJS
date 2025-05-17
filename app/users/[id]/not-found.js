import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <h2>User Not Found</h2>
      <p>The user you are looking for does not exist or has been removed.</p>
      <Link href="/users" className="btn btn-primary mt-3">
        Back to Users
      </Link>
    </div>
  );
}
