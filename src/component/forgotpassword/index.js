import { useState } from "react";

export default function ForgotPassword() {
  const [mobile, setMobile] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-700">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered mobile number and we’ll send you reset instructions.
        </p>

        <form className="space-y-5">
          {/* Mobile number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              placeholder="+91"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remembered your password?{" "}
          <a href="/login" className="font-medium text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
