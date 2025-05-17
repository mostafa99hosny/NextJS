import Link from 'next/link';

export default function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">User Management Application</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Manage Users</h2>
              <p className="card-text">View, add, and manage users in the system.</p>
              <Link href="/users" className="btn btn-primary">
                Go to Users
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <p className="card-text">Login to access the admin dashboard.</p>
              <Link href="/login" className="btn btn-secondary">
                Go to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
