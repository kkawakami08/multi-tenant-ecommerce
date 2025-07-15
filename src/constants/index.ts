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
  subcategory: (category: string, subcategory: string) =>
    `/${category}/${subcategory}`,
};

export const DEFAULT_LIMIT = 8;
