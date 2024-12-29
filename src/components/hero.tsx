import { FolderCog, Lightbulb,  } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="container flex flex-col items-center">
        <div className="w-full overflow-clip rounded-lg">
          <div className="grid items-center lg:grid-cols-2">
          <img
              src="/hero.png"
              alt="hero image"
              className="h-[80%] w-full object-cover hidden lg:block rounded-full border-[#4a9d4f] border-4"
            />
          <div className="container flex flex-col items-center px-[4rem] text-center lg:mx-auto lg:items-start lg:px-[4rem] lg:text-left">
              <p>Hi, my name is</p>
              <h1 className="my-2 text-pretty text-4xl font-bold lg:text-6xl text-[#4a9d4f]">
                Jenbert Duazo
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg ">
              BSIT Student | Aspiring Software Developer | Always learning and improving.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Link href="#About">
                  <Button className="w-full sm:w-auto bg-[#4a9d4f]">
                    <Lightbulb className=" size-4" />
                    About Me
                  </Button>
                </Link>
                <Link href="#Projects">
                  <Button variant="outline" className="w-full sm:w-auto">
                  <FolderCog className="size-4" />
                    My Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
