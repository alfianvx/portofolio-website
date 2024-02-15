import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen py-32 px-4 md:px-0">
      <section className="flex flex-col sm:flex-row space-x-0 space-y-5 sm:space-x-5 sm:space-y-0 mb-6">
        <Image
          alt="gus jabung al fiansyah - photo"
          src="/alfian-about.jpg"
          width={200}
          height={200}
          className="rounded-md h-max"
        />
        <div>
          <h1 className="text-2xl text-pretty font-medium mb-4">
            hello! i&apos;m alfian
          </h1>
          <article>
            <p className="text-sm sm:text-md mb-3 tracking-wide">
              I&apos;m a Software Engineer Frontend specializing in web
              development technologies, using popular tools like{" "}
              <span className="font-bold">TypeScript</span> for programming,{" "}
              <span className="font-bold">NextJS</span> for the framework, and{" "}
              <span className="font-bold">TailwindCSS</span> for styling.
            </p>
            <p className="text-sm sm:text-md tracking-wide">
              I possess a fervent enthusiasm for designing User Interfaces
              across Web, Desktop, and Mobile platforms, with a particular
              proficiency in utilizing tools such as{" "}
              <span className="font-bold">Figma</span>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
