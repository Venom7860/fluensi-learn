import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-600 ${className}`}
      {...props}
    />
  );
}