import { Button } from "@/components/ui/button";
import { useCart } from "../../hooks/use-cart";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { paths } from "@/constants";
import { ShoppingCartIcon } from "lucide-react";

type Props = {
  className?: string;
  hideIfEmpty?: boolean;
  tenantSlug: string;
};

export const CheckoutButton = ({
  className,
  hideIfEmpty,
  tenantSlug,
}: Props) => {
  const { totalItems } = useCart(tenantSlug);

  if (hideIfEmpty && totalItems === 0) return null;

  return (
    <Button variant={"elevated"} asChild className={cn("bg-white", className)}>
      <Link href={paths.checkout(tenantSlug)}>
        <ShoppingCartIcon /> {totalItems > 0 ? totalItems : ""}
      </Link>
    </Button>
  );
};
