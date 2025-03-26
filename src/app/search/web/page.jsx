import React from "react";
import Link from "next/link";
import WebSearchResults from "@/app/components/WebSearchResults";
export default async function WebSearchPage({ searchParams }) {
  const awtSearchParams = await searchParams;
  const searchTerm = awtSearchParams.searchTerm;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CX_KEY}&q=${searchTerm}`
  );
  if (!response.ok) throw new Error("something went wrong");

  const data = await response.json();
  const results = await data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center align-cneter pt-10">
        <h1 className="text-3xl mb-4">
          No results found for <p className="text-red-400">${searchTerm}</p>
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <WebSearchResults results={data} />}</div>;
}
