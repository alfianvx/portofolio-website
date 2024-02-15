import { MyProjects } from "@/static";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <main className="max-w-2xl mx-auto min-h-screen py-32 px-4 md:px-0">
      <h1 className="text-2xl font-medium">Work</h1>
      <p className="mb-5">Other multidisciplinary previous projects</p>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
        {MyProjects.map(({ title, link, tech, image, description }) => (
          <div key={link} className="border rounded-lg overflow-hidden">
            <Image
              alt={title}
              src={image}
              width={1000}
              height={700}
              className="w-full"
            />
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold mb-2">{title}</h1>
                <Link target="_blank" href={link}>
                  <ExternalLinkIcon className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-sm tracking-normal">{description}</p>
            </div>
            <div className="flex flex-wrap gap-1 p-2">
              {tech.map((t, i) => (
                <span className="text-xs" key={i}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Work;
