type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-lg border bg-white p-12 text-center">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {description}
      </p>
    </div>
  );
}