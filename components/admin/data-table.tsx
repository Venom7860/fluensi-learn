export default function DataTable({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full">
        {children}
      </table>
    </div>
  );
}