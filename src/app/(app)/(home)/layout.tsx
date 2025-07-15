import Navbar from "@/modules/home/ui/components/navbar";

import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import Footer from "@/modules/home/ui/components/footer";
import SearchFilters, {
  SearchFiltersLoading,
} from "@/modules/home/ui/components/search-filters";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersLoading />}>
          <SearchFilters />
        </Suspense>
      </HydrationBoundary>
      <main className="flex-1 bg-[#f4f4f0] ">{children}</main>
      <Footer />
    </div>
  );
}
