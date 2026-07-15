import Sidebar from "./sidebar";
import Header from "./header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}