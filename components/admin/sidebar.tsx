"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/auth/logout-button";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Categories",
    href: "/admin/categories",
  },
  {
    name: "Courses",
    href: "/admin/courses",
  },
  {
    name: "Students",
    href: "/admin/students",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          Fluensia
        </h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-lg px-4 py-3 transition ${
                  pathname === item.href
                    ? "bg-purple-700 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t p-4">
        <LogoutButton />
      </div>
    </aside>
  );
}