"use client";

import { useState } from "react";
import { authClient } from "@/auth-client";

export default function FounderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log(data);
    alert("Founder account created successfully!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-xl border bg-white p-8 shadow-lg"
    >
      <h1 className="mb-6 text-center text-3xl font-bold">
        Fluensia Learn
      </h1>

      <p className="mb-8 text-center text-gray-500">
        Founder Setup
      </p>

      <div className="space-y-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Founder Name"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-lg border p-3"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-purple-700 p-3 text-white"
        >
          Create Founder
        </button>
      </div>
    </form>
  );
}