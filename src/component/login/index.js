import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-700">
      <div className="flex w-full max-w-4xl rounded-xl bg-white shadow-xl overflow-hidden">
        
        {/* Left Illustration */}
        <div className="hidden w-1/2 bg-gray-50 p-10 md:flex items-center justify-center">
          <img src="/illustration.svg" alt="Illustration" className="max-w-sm" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Login to <span className="text-indigo-600">EKKALAVYA</span>
          </h2>

          <form className="space-y-6">
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                10-digit Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                Forgot?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          {/* Signup link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            New to platform?{" "}
            <Link href="/sign-up" className="font-medium text-indigo-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
