import { Button } from "@/components/ui/button";
import { paths } from "@/constants";
import Link from "next/link";
import React from "react";

interface Props {
  slug: string;
}

const Navbar = ({ slug }: Props) => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12 ">
        <p className="text-xl">Checkout</p>
        <Button asChild variant={"elevated"}>
          <Link href={paths.tenants(slug)}>Continue Shopping</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
