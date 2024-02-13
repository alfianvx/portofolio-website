"use client";

import Link from "next/link";
import { NavLink } from "@/static";
import { useWindowYAxis } from "@/hooks/use-win-y-axis";
import ThemeToggle from "@/components/theme-toggle";

const Header = () => {
  const y = useWindowYAxis();

  return (
    <header
      className={`w-full fixed top-0 px-4 md:px-0 bg-[#fff] dark:bg-[#09090B] ${
        y > 20 && "border-b"
      }`}
    >
      <div className="max-w-2xl flex items-center justify-between mx-auto py-4">
        <nav className="flex space-x-3">
          {NavLink.map(({ label, link }) => (
            <Link key={label} href={link} className="font-medium">
              {label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
