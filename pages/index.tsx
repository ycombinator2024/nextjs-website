import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

function HomePage() {
  return (
    <div>
      <div className="">
        <iframe
          src="https://razvedchik.org/"
          className="w-screen h-screen"
        ></iframe>
      </div>
    </div>
  );
}

export default HomePage;
