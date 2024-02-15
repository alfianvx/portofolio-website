import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen py-32 px-4 md:px-0">
      <section className="flex flex-col md:flex-row space-x-0 space-y-3 sm:space-x-5 sm:space-y-0 mb-6">
        <Image
          alt="gus jabung al fiansyah - photo"
          src="/alfian-about.jpg"
          width={200}
          height={200}
          className="rounded-md h-max shadow shadow-xl basis-2/6"
        />
        <div className="basis-4/6">
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
      <section className="flex flex-col md:flex-row space-x-0 space-y-3 sm:space-x-5 sm:space-y-0 mb-6">
        <div className="basis-2/6">
          <h1 className="text-md font-semibold">EDUCATION</h1>
        </div>
        <article className="basis-4/6 flex-col space-y-3">
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">
                Universitas Sains Al Qur&apos;an -{" "}
                <span className="font-normal">Wonosobo</span>
              </h2>
            </div>
            <p className="text-sm">Informatics Engineering</p>
            <p className="text-sm">2021 - present</p>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">
                SMAN 2 WONOSOBO - <span className="font-normal">Wonosobo</span>
              </h2>
            </div>
            <p className="text-sm">Social Science</p>
            <p className="text-sm">2017 - 2020</p>
          </div>
        </article>
      </section>
      <section className="flex flex-col md:flex-row space-x-0 space-y-3 sm:space-x-5 sm:space-y-0 mb-6">
        <div className="basis-2/6">
          <h1 className="text-md font-semibold">EXPERIENCE</h1>
        </div>
        <article className="basis-4/6 flex-col space-y-3">
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">
                Frontend Web @ Ladeva Software House -{" "}
                <span className="font-normal">Wonosobo</span>
              </h2>
            </div>
            <p className="text-sm">Jan 2024 - present</p>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">
                Fullstack Developer Mentee @ skilvul -{" "}
                <span className="font-normal">Remote</span>
              </h2>
            </div>
            <p className="text-sm">Aug 2023 - Dec 2023</p>
          </div>
        </article>
      </section>
      <section className="flex flex-col md:flex-row space-x-0 space-y-3 sm:space-x-5 sm:space-y-0 mb-6">
        <div className="basis-2/6">
          <h1 className="text-md font-semibold">SKILLS</h1>
        </div>
        <article className="basis-4/6 flex-col space-y-3">
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">Programming Language</h2>
            </div>
            <span className="text-sm">
              HTML, CSS, JavaScript, TypeScript, PHP, C++.
            </span>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">Library</h2>
            </div>
            <span className="text-sm">
              React, Prisma, Alpine.JS, TailwindCSS, AuthJS, React Query, Zod.
            </span>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">Framwork</h2>
            </div>
            <span className="text-sm">NextJS, ExpressJS, Laravel.</span>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">DMBS</h2>
            </div>
            <span className="text-sm">MySQL, MongoDB.</span>
          </div>
        </article>
      </section>
      <section className="flex flex-col md:flex-row space-x-0 space-y-3 sm:space-x-5 sm:space-y-0 mb-6">
        <div className="basis-2/6">
          <h1 className="text-md font-semibold">TOOLKIT</h1>
        </div>
        <article className="basis-4/6 flex-col space-y-3">
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">Text Editor</h2>
            </div>
            <span className="text-sm">VS Code, NVim.</span>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">Design</h2>
            </div>
            <span className="text-sm">Figma, Adobe Illustrator.</span>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="text-sm font-medium">
                Communication & Collaborate
              </h2>
            </div>
            <span className="text-sm">Discord, Notion.</span>
          </div>
        </article>
      </section>
    </main>
  );
}
