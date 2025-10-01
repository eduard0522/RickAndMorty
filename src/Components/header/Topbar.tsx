"use client";

import { NextPage } from "next";
import List from "./nav/List";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Topbar: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
    
          <div className="flex-1 flex items-center gap-12">
            <Link
              className="block text-teal-600 dark:text-teal-300"
              href="/"
            >
              <span className="sr-only">Home</span>
              <Image
                src="/Title2.png"
                alt="logo de rick and morty"
                width={200}
                height={100}
              />
            </Link>
          </div>
        
          <div className="hidden md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <List />
            </nav>
          </div>

     
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

  
    <div
        className={`md:hidden px-4 py-6 transform transition-all duration-400 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-5 max-h-0 overflow-hidden"
        }`}
      >
        <nav aria-label="Mobile Global">
          <List />
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
