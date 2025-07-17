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
  productLibrary: (id: string) => `/library/${id}`,
  category: (category: string) => `/${category}`,
  tenants: (slug: string) => generateTenantURL(slug),
  checkout: (slug: string) => `${generateTenantURL(slug)}/checkout`,
  successCheckout: (slug: string) =>
    `${process.env.NEXT_PUBLIC_APP_URL}${generateTenantURL(slug)}/checkout?success=true`,
  cancelCheckout: (slug: string) =>
    `${process.env.NEXT_PUBLIC_APP_URL}${generateTenantURL(slug)}/checkout?cancel=true`,
  product: (tenantSlug: string, productId: string) =>
    `${generateTenantURL(tenantSlug)}/products/${productId}`,
  subcategory: (category: string, subcategory: string) =>
    `/${category}/${subcategory}`,
};

export const DEFAULT_LIMIT = 8;
