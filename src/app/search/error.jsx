"use client";
import React from "react";
import { useEffect } from "react";

// reset : 오류 발생 시 재시도
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Somethong went wrong!</h1>

      <button className="text-blue-500">Try again</button>
    </div>
  );
}
