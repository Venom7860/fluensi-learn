"use client";

export default function FounderForm() {
  return (
    <form className="w-full max-w-md rounded-xl border bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Fluensia Learn
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Initial Founder Setup
      </p>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Name
          </label>

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Founder name"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            className="w-full rounded-lg border p-3"
            placeholder="Founder email"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <input
            type="password"
            className="w-full rounded-lg border p-3"
            placeholder="Password"
          />
        </div>

        <button
          type="button"
          className="w-full rounded-lg bg-purple-700 p-3 font-semibold text-white hover:bg-purple-800"
        >
          Create Founder
        </button>
      </div>
    </form>
  );
}