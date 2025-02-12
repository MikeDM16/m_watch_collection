"use server";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ brand: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const brand = (await params).brand;

  return (
    <h1>
      My Page: {brand} {JSON.stringify(await searchParams)}{" "}
    </h1>
  );
}
