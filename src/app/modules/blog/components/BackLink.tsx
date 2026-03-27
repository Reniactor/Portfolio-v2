import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mb-8 flex w-fit items-center gap-2 text-sm text-[#999] transition-colors hover:text-color10"
    >
      <HiArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
