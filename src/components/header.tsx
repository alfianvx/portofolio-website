import Link from "next/link";
import { NavLink } from "@/static";

const Header = () => {
  return (
    <header className="w-full fixed top-0 bg-zinc-950 px-4 sm:px-0">
      <div className="max-w-2xl flex item-center justify-between text-white mx-auto py-4">
        <nav className="flex space-x-3">
          {NavLink.map(({ label, link }) => (
            <Link key={label} href={link}>
              {label}
            </Link>
          ))}
        </nav>
        <span>🌌</span>
      </div>
    </header>
  );
};

export default Header;
