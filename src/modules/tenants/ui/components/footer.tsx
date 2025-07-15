import { paths } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex gap-2 items-center py-6 h-full px-4 lg:px-12 ">
        <p>Powered by</p>
        <Link href={paths.home()}>
          <span className={cn("text-2xl font-semibold")}>gummi</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
