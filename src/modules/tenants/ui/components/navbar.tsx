"use client";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ShoppingCartIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CheckoutButton = dynamic(
  //doesnt work with default export in components
  () =>
    import("@/modules/checkout/ui/components/checkout-button").then(
      (mod) => mod.CheckoutButton
    ),
  {
    ssr: false,
    loading: () => (
      <Button className="bg-white" disabled>
        {/* when loading icons this way, need to specify color for it to show up */}
        <ShoppingCartIcon className="text-black" />
      </Button>
    ),
  }
);

interface Props {
  slug: string;
}

const Navbar = ({ slug }: Props) => {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.tenants.getOne.queryOptions({
      slug,
    })
  );

  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12 ">
        <Link href={paths.tenants(slug)} className="flex items-center gap-2">
          {data?.image?.url && (
            <Image
              src={data.image.url}
              width={32}
              height={32}
              className="rounded-full border shrink-0 size-[32px] "
              alt={slug}
            />
          )}{" "}
          <p className="text-xl">{data.name}</p>
        </Link>
        <CheckoutButton hideIfEmpty tenantSlug={slug} />
      </div>
    </nav>
  );
};

export const NavbarSkeleton = () => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12 ">
        <div />
        <Button className="bg-white" disabled>
          {/* when loading icons this way, need to specify color for it to show up */}
          <ShoppingCartIcon className="text-black" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
