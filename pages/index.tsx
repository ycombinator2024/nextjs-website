import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCalendarContext } from "@/context/CalendarContext";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import { convertDate } from "@/utils/mapping";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import JoinModal from "@/components/HomePage/JoinModal";

function HomePage() {
  const { events, isLoading } = useCalendarContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex flex-col w-[100vw] text-white">
      <div className="flex flex-col items-center justify-center bg-black pt-16">
        <Image src="/favicon_adj.png" width={304} height={398} alt="LA Lager" />
        <span className="mt-5">LOS ANGELES, CA</span>
        <span className="text-5xl sev:text-8xl mt-10">ST. GEORGE</span>{" "}
        <span className="text-5xl sev:text-8xl mt-5">PATHFINDERS</span>
        <div className="flex items-center justify-center mt-20 gap-10 text-xl">
          <motion.button
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 },
            }}
            onClick={() => {
              onOpen();
            }}
            className="text-xl bg-[#E84A37] hover:bg-[#D42C18] px-5 py-3 rounded-lg"
          >
            Join Us
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 },
            }}
            className="text-xl text-[#E84A37]  px-5 py-3 rounded-lg"
          >
            <Link href="/calendar">View Calendar</Link>
          </motion.button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-purple p-24"></div>
      <div className="flex bg-white py-24 mx-4 eight:mx-0">
        <div className="w-[0px] eight:w-[50%] tw:w-[500px]"></div>
        <div className="bg-light text-black w-[500px] mx-auto eight:mr-10 tw:mx-auto p-8 rounded-lg">
          <span className="text-3xl sev:text-4xl mx-auto">
            Ages 8 to 98 Волчата
          </span>
          <div className="flex flex-col mt-10 gap-5 text-xl ">
            <span>- Волчата и Белочки 8-11</span>
            <span>- Разведчики и Разведчици 12-17</span>
            <span>- Витязи и Дружчинницы 18 - 98</span>
            <motion.button
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              className="text-xl bg-[#E84A37] hover:bg-[#D42C18] px-5 py-3 rounded-lg mx-auto mt-5 mb-3"
            >
              <Link href="/camp">Apply</Link>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-light text-black py-24">
        <div className="mx-auto ">
          <span className="text-4xl mx-10">Events</span>
          <div className="bg-orange rounded-lg p-5 mt-5 flex flex-col gap-5 mx-10">
            {events && events.length > 0 ? (
              <>
                {events.map((event: any, index: number) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-col">
                        <span className="text-xl xs:text-2xl">
                          {event.event_name}
                        </span>
                        <span className="text-md xs:text-lg mt-2">
                          {convertDate(event.from, event.to)}
                        </span>
                        <span className="text-md xs:text-lg">
                          {event.location}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
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
            )}
          </div>
        </div>
        <div className="w-[0px] eight:w-[40%] tw:w-[500px]"></div>
      </div>
      <div className="bg-black py-16 footerSM:py-24 flex ">
        <div className="flex flex-col five:flex-row text-md sm:text-xl mx-auto border border-white border-1 ">
          <div className="flex flex-col items-center five:border-r p-5 gap-2">
            <span>Email</span>
            <span>razvedchik.dnn@gmail.com</span>
          </div>
          <div className="flex flex-col items-center five:border-r p-5 gap-2">
            <span>Call</span>
            <span>255 352-6258</span>
          </div>
          <div className="flex flex-col items-center p-5 gap-2">
            <span>Follow Us</span>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/sgpathfinders/" target="_blank">
                <BsFacebook className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/razvedchik.dnn"
                target="_blank"
              >
                <BsInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <JoinModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default HomePage;
