import { Button } from "@/components/ui/button";
import { paths } from "@/constants";
import { cn } from "@/lib/utils";
import { useCart } from "@/modules/checkout/hooks/use-cart";
import Link from "next/link";
import React from "react";

type Props = {
  tenantSlug: string;
  productId: string;
  isPurchased?: boolean;
};

export const CartButton = ({ tenantSlug, productId, isPurchased }: Props) => {
  const cart = useCart(tenantSlug);

  if (isPurchased) {
    return (
      <Button
        variant={"elevated"}
        asChild
        className="flex-1 font-medium bg-white"
      >
        <Link prefetch href={paths.productLibrary(productId)}>
          View in Library
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant={"elevated"}
      className={cn(
        "flex-1 bg-kk-lime",
        cart.isProductInCart(productId) && "bg-white"
      )}
      onClick={() => cart.toggleProduct(productId)}
    >
      {cart.isProductInCart(productId) ? "Remove from cart" : "Add to cart"}
    </Button>
  );
};
