import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgb(var(--border))] bg-[rgba(var(--card)_/_0.65)] px-3 py-1 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}
