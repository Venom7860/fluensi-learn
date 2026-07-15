"use client";
export default function LoginForm() {
  return (
    <form className="w-full max-w-md space-y-5 rounded-xl border p-8 shadow">
      <div>
        <label className="mb-2 block font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        className="w-full rounded-lg bg-purple-700 p-3 text-white"
      >
        Login
      </button>
    </form>
  );
}