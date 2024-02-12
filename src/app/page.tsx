import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen mt-24 px-4 sm:px-0">
      <section className="flex flex-col sm:flex-row sm:items-end space-x-0 space-y-4 sm:space-x-5 sm:space-y-0 mb-3 sm:mb-7">
        <Image alt="gus jabung al fiansyah - photo" src='/alfian-profile.jpg' width={200} height={450} className="rounded-md"/>
        <div>
        <h1 className="text-white text-2xl sm:text-4xl font-bold mb-1">Gus Jabung Al Fiansyah</h1>
        <h3 className="text-white text-xs sm:text-md tracking-normal mb-2"><span className="font-semibold">Software Engineer Frontend</span></h3>
        </div>
      </section>
      <article>
      <p className="text-white text-sm sm:text-md mb-3 sm:mb-5 tracking-wide">
      I&apos;m a Software Engineer Frontend specializing in web development technologies, using popular tools like <span className="font-bold">TypeScript</span> for programming, <span className="font-bold">NextJS</span> for the framework, and <span className="font-bold">TailwindCSS</span> for styling.
      </p>
      <p className="text-white text-sm sm:text-md mb-3 sm:mb-5 tracking-wide">
       I possess a fervent enthusiasm for designing User Interfaces across Web, Desktop, and Mobile platforms, with a particular proficiency in utilizing tools such as <span className="font-bold">Figma</span>.
      </p>
      </article>
    </main>
  )
}
