"use client"; // if using Next.js 13+ App Router

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center max-w-sm">
  {/* Stock Market Logo */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2331/2331946.png" 
              alt="Stock Market Logo"
              className="mx-auto mb-6 w-16 h-16"
            />

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Pravin</h1>
            <p className="text-gray-700 mb-8">
              Click below to login and continue.
            </p>
            <button
              onClick={() => router.push("/login")}
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300"
            >
              Login
            </button>
          </div>

    </div>
  );
}
