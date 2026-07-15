type DashboardCardProps = {
  title: string;
  value: number | string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="text-sm text-gray-500">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}