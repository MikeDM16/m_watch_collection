"use client";

import HeaderNavBar from "@/app/components/header/header";
import { useParams } from "next/navigation";

export default function Page() {
  const { brand } = useParams();
  return (
    <div>
      {HeaderNavBar()}
      <h1>My Page: {brand} </h1>
    </div>
  );
}
