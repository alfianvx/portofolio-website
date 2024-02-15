import { Socials } from "@/static";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="max-w-2xl mx-auto min-h-screen py-32 px-4 md:px-0">
      <h1 className="text-2xl font-medium">Contact</h1>
      <p className="mb-5">
        No need to shy, get in touch with me with link bellow:
      </p>
      <ul className="space-y-2 list-disc pl-4">
        {Socials.map(({ label, link }) => (
          <li key={label}>
            <Link target="_blank" href={link} className="hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contact;
