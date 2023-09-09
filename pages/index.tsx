import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

function HomePage() {
  return (
    <iframe
      src="https://razvedchik.org/"
      className="w-[100vw] h-[calc(100svh-87px)]"
    ></iframe>
  );
}

export default HomePage;
