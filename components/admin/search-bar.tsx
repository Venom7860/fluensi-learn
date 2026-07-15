type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="mb-6 w-full rounded-lg border px-4 py-3"
    />
  );
}