import React from "react";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";
export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52f">
      <p className="text-gray-600 test-sm mb-5 mt-3">
        {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-500">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}

      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
