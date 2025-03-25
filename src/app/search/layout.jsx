import React from "react";
import SearchHeader from "../components/SearchHeader";
import "./../globals.css";
import SearchHeaderOptions from "../components/SearchHeaderOptions";

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />

      {children}
    </div>
  );
}
