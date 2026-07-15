export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <div className="text-sm text-gray-500">
        Welcome 👋
      </div>
    </header>
  );
}