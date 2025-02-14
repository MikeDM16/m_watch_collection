"use client";

import PageTitleDivisionComponent from "@/app/components/common/pageTitleDivisionComponent";
import HeaderNavBar from "@/app/components/header/header";
import { useParams } from "next/navigation";

export default function Page() {
  const { brand } = useParams();

  return (
    <div>
      {HeaderNavBar()}
      <div>{PageTitleDivisionComponent({ title: `${brand}` })}</div>
    </div>
  );
}
