import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen pt-32 px-4 md:px-0">
      <section className="flex flex-col sm:flex-row space-x-0 space-y-5 sm:space-x-5 sm:space-y-0 mb-6">
        <div>
          <Image
            alt="gus jabung al fiansyah - photo"
            src="/alfian-profile.jpg"
            width={100}
            height={100}
            className="rounded-full mb-4 shadow shadow-xl"
          />
          <h1 className="text-xl text-wrap md:text-2xl md:text-balance font-medium mb-6">
            hello there! I&apos;m Gus Jabung Al Fiansyah, software engineer
            frontend & web designer.
          </h1>
          <p className="text-sm mb-4">
            Currently —{" "}
            <Link href={""} className="font-medium hover:underline">
              @ Ladeva Software House
            </Link>
            .
          </p>
          <Link href="/contact">
            <Button className="rounded-full px-8">let&apos;s connect!</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
