import Link from "next/link";
import { NavLink } from "@/static";
import ThemeToggle from "@/components/theme-toggle";

const Header = () => {
  return (
    <header className="w-full fixed top-0 px-4 sm:px-0">
      <div className="max-w-2xl flex items-center justify-between mx-auto py-4">
        <nav className="flex space-x-3">
          {NavLink.map(({ label, link }) => (
            <Link key={label} href={link}>
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
