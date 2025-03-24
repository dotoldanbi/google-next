import React from "react";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
          alt="google logo"
        />
        <HomeSearch />
      </div>
    </>
  );
}
