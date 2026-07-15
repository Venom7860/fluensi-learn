import * as React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  className = "",
  ...props
}: LabelProps) {
  return (
    <label
      className={`mb-2 block text-sm font-medium ${className}`}
      {...props}
    />
  );
}