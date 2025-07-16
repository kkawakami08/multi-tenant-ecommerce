import { generateTenantURL } from "@/lib/utils";

export const paths = {
  home: () => "/",
  about: () => "/about",
  features: () => "/features",
  pricing: () => "/pricing",
  contact: () => "/contact",
  signIn: () => "/sign-in",
  signUp: () => "/sign-up",
  admin: () => "/admin",
  library: () => "/library",
  category: (category: string) => `/${category}`,
  tenants: (slug: string) => generateTenantURL(slug),
  checkout: (slug: string) => `${generateTenantURL(slug)}/checkout`,
  product: (tenantSlug: string, productId: string) =>
    `${generateTenantURL(tenantSlug)}/products/${productId}`,
  subcategory: (category: string, subcategory: string) =>
    `/${category}/${subcategory}`,
};

export const DEFAULT_LIMIT = 8;
