import Link from "next/link";
import Image from "next/image";

import { BsFacebook, BsInstagram } from "react-icons/bs";
export default function LinkTree() {
  return (
    <div className="flex flex-col w-[100vw] text-white min-h-[100svh]">
      <div className="flex flex-col items-center justify-center text-black pt-16">
        <div
          className="relative
			w-[125px] h-[165px] 
			xs:w-[149px] xs:h-[198px] "
        >
          <Image src="/favicon_adj.png" alt="Logo" fill />
        </div>
        <div className="flex gap-4 mt-12">
          <a href="https://www.facebook.com/sgpathfinders/" target="_blank">
            <BsFacebook className="text-3xl" />
          </a>
          <a href="https://www.instagram.com/razvedchik.dnn" target="_blank">
            <BsInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
