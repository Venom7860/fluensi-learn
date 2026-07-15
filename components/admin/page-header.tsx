import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function PageHeader({
  title,
  description,
  buttonText,
  buttonHref,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>

        {description && (
          <p className="mt-2 text-gray-500">
            {description}
          </p>
        )}
      </div>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="rounded-lg bg-purple-700 px-4 py-2 text-white hover:bg-purple-800"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}