import DashboardCard from "@/components/admin/dashboard-card";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const totalStudents = await prisma.user.count({
    where: {
      role: "STUDENT",
    },
  });

  const totalAdmins = await prisma.user.count({
    where: {
      role: "ADMIN",
    },
  });

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Students"
          value={totalStudents}
        />

        <DashboardCard
          title="Admins"
          value={totalAdmins}
        />

        <DashboardCard
          title="Courses"
          value={0}
        />

        <DashboardCard
          title="Active Students"
          value={0}
        />
      </div>
    </div>
  );
}