import { Spinner } from "@chakra-ui/react";
import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[calc(100svh-85px)] bg-light">
      <div className="relative flex items-center">
        <Spinner
          thickness="4px"
          speed=".8s"
          emptyColor="gray.200"
          color="#336042"
          width={{ base: "250px", xs: "300px" }}
          height={{ base: "250px", xs: "300px" }}
        />
        <div
          className="absolute
			w-[125px] h-[165px] ml-[63px]
			xs:w-[149px] xs:h-[198px] xs:ml-[76px]"
        >
          <Image src="/favicon_adj.png" alt="Logo" fill />
        </div>
      </div>
    </div>
  );
}
