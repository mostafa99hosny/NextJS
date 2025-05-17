import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Login - User Management App",
  description: "Login to the User Management Application",
};

export default function LoginLayout({ children }) {
  return (
    <div className={`${geistSans.variable} login-layout`}>
      <main className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
        {children}
      </main>
    </div>
  );
}
