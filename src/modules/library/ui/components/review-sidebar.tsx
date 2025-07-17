import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import ReviewForm from "./review-form";

type Props = {
  productId: string;
};

const ReviewSidebar = ({ productId }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.reviews.getOne.queryOptions({
      productId,
    })
  );

  return (
    <div>
      <ReviewForm productId={productId} initialData={data} />
    </div>
  );
};

export default ReviewSidebar;
