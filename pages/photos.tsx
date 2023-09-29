import React from "react";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async () => {
  const divArray = Array.from({ length: 33 }, (_, index) => index + 1);

  return {
    props: {
      divArray,
    },
  };
};

export default function Photos({ divArray }: { divArray: number[] }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="min-h-[calc(100svh-85px)] py-8 px-4 ml:pr-8 bg-light">
      <div className="columns-3">
        {divArray.map((index: number) => {
          return (
            <div
              className="transition-all duration-350 ease-in-out mb-5"
              key={index}
              onClick={() => {
                // setSlideNumber(index);
                // setOpenModal(true);
              }}
            >
              <img
                src={`/photos/${index}.jpg`}
                alt={`LA Lager ${index}`}
                style={{ width: "100%" }}
                loading="lazy"
              />
            </div>
          );
        })}
        {/*openModal && (
          <div className="fixed top-0 right-0 left-0 bottom-0 z-[1000] bg-transparent flex flex-col items-center justify-center w-[100vw] h-[100svh]">
            <div>Exit</div>
            <div className="flex items-center justify-center w-[100vw]">
              <span>Previous Slide</span>{" "}
              <img
                src={`/photos/${slideNumber}.jpg`}
                alt={`LA Lager ${slideNumber}`}
                style={{ width: "calc(80%)" }}
              />{" "}
              <span onClick={() => setSlideNumber(slideNumber + 1)}>
                NextSlide
              </span>
            </div>
          </div>
        )*/}
        {/*    <Box overflow="hidden" bg="purple.100" minH="100svh" py="6">
        <Wrap px="1rem" spacing={4} justify="center">
          {divArray.map((index: number) => {
            return (
              <WrapItem
                key={index}
                boxShadow="base"
                rounded="20px"
                overflow="hidden"
                bg="transparent"
                lineHeight="0"
                alignItems={"center"}
                _hover={{ boxShadow: "dark-lg" }}
              >
                <Image
                  key={index}
                  src={`/photos/${index}.jpg`}
                  width={500}
                  height={500}
                  alt={`LA Lager ${index}`}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>*/}
      </div>
    </div>
  );
}
