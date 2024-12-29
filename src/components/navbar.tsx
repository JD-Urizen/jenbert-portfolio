import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="py-4 max-w-7xl mx-auto ">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#e4f4e4]">JDuazo</span>
            </div>
          </div>
          <div className="flex items-center">
              <Link
                className={cn(
                  "text-[#cae8cb] hover:text-white",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-[#cae8cb]" 
                )}
                href="/"
              >
                Home
              </Link>
              <Link
                className={cn(
                  "text-[#cae8cb] hover:text-white",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-[#cae8cb]" 
                )}
                href="#About"
              >
                About Me
              </Link>
              <Link
                className={cn(
                  "text-[#cae8cb] hover:text-white",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-[#cae8cb]" 
                )}
                href="#Hobbies"
              >
                Hobbies
              </Link>
              <Link
                className={cn(
                  "text-[#cae8cb] hover:text-white",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-[#cae8cb]" 
                )}
                href="#Projects"
              >
                Projects
              </Link>
              <Link
                className={cn(
                  "text-[#cae8cb] hover:text-white",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-[#cae8cb]" 
                )}
                href="#Skills"
              >
                Skills
              </Link>
              <Link
                className={cn(
                  "text-[#cae8cb] hover:text-white",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "link",
                  }),
                  "text-[#cae8cb]" 
                )}
                href="#Contact"
              >
                Contact
              </Link>
            </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#e4f4e4]">JDuazo</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#cae8cb]">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">JDuazo</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <a href="#" className="font-semibold">
                    Home
                  </a>
                  <a href="#About" className="font-semibold">
                    About Me
                  </a>
                  <a href="#Hobbies" className="font-semibold">
                    Hobbies
                  </a>
                  <a href="#Projects" className="font-semibold">
                    Projects
                  </a>
                  <a href="#Skills" className="font-semibold">
                    Skills
                  </a>
                  <a href="#Contact" className="font-semibold">
                    Contact
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
