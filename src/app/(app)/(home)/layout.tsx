import configPromise from "@payload-config";
import { getPayload } from "payload";
import Footer from "./footer";
import Navbar from "./navbar";
import SearchFilters from "./search-filters";
import { Category } from "@/payload-types";
import { CustomCategory } from "./types";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, //populate subcategories
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name",
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <main className="flex-1 bg-[#f4f4f0] ">{children}</main>
      <Footer />
    </div>
  );
}
