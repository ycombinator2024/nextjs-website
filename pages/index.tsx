import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="">
        <iframe
          src="https://razvedchik.org/"
          className="w-[100vw] h-[calc(100svh-87px)]"
        ></iframe>
      </div>
    </div>
  );
}

export default HomePage;
