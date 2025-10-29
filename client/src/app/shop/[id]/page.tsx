import React from "react";
import { useParams } from "next/navigation";

export default function SingleProduct() {
  const params = useParams();
  const id = params.id as string;

  return <div>SingleProduct {id}</div>;
}
