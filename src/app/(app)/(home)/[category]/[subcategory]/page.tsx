import React from "react";

interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

const SubcategoryPage = async ({ params }: Props) => {
  const { category, subcategory } = await params;
  return (
    <div>
      {category} : {subcategory}{" "}
    </div>
  );
};

export default SubcategoryPage;
