"use client";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: paths.home(),
    children: "Home",
  },
  {
    href: paths.about(),
    children: "About",
  },
  {
    href: paths.features(),
    children: "Features",
  },
  {
    href: paths.pricing(),
    children: "Pricing",
  },
  {
    href: paths.contact(),
    children: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={paths.home()} className="pl-6 flex items-center">
        <span className={cn("text-5xl font-extrabold")}>gummi</span>
      </Link>
      <NavbarSidebar
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={navbarItems}
      />
      <div className="items-center  gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          variant={"secondary"}
          className="border-l border-t-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-kk-lime transition-colors text-lg"
          asChild
        >
          <Link href={paths.signIn()}>Login</Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          className="border-l-0 border-t-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-kk-lime hover:text-black transition-colors text-lg"
        >
          <Link href={paths.signUp()}>Start Selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center mr-3">
        <Button
          variant={"ghost"}
          onClick={() => setIsSidebarOpen(true)}
          className="size-12 border-transparent bg-white"
        >
          <MenuIcon className="size-8" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
