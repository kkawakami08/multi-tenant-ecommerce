import Footer from "@/modules/tenants/ui/components/footer";
import Navbar, { NavbarSkeleton } from "@/modules/tenants/ui/components/navbar";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const TenantLayout = async ({ children, params }: Props) => {
  const { slug } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.tenants.getOne.queryOptions({
      slug,
    })
  );

  return (
    <div className="min-h-screen bg-[#f4f4f0] flex flex-col ">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar slug={slug} />
        </Suspense>
      </HydrationBoundary>
      <main className="flex-1">
        <div className="max-w-(--breakpoint-xl) mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default TenantLayout;
