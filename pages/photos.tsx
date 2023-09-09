import React from "react";
import Image from "next/image";

import {
  Box,
  Container,
  Text,
  Wrap,
  WrapItem,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  useToast,
  Flex,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Photos() {
  const divArray = Array.from({ length: 7 }, (_, index) => index);
  return (
    <div className="py-6 pr-4 bg-gray">
      <div className="columns-3">
        {divArray.map((index: number) => {
          return (
            <div
              className="cursor-pointer transition-all duration-350 ease-in-out mb-5"
              key={index}
            >
              <img
                src={`/photos/${index}.jpg`}
                alt={`LA Lager ${index}`}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}

        {/*    <Box overflow="hidden" bg="purple.100" minH="100vh" py="6">
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
