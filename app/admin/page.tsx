import LogoutButton from "@/components/auth/logout-button";

export default function AdminPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Welcome to Fluensia Admin
      </h1>

      <p>You are successfully logged in.</p>

      <LogoutButton />
    </main>
  );
}