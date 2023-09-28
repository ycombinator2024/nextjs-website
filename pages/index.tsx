import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCalendarContext } from "@/context/CalendarContext";

import { convertDate } from "@/utils/mapping";

function HomePage() {
  const { events, isLoading } = useCalendarContext();
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
            className="text-xl bg-[#E84A37] hover:bg-[#D42C18] px-5 py-3 rounded-lg"
          >
            <Link href="/camp">Join Us</Link>
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
      <div className="flex bg-white py-24">
        <div className="w-[500px]"></div>
        <div className="bg-light text-black w-[500px] mx-auto p-8 rounded-lg">
          <span className="text-3xl sev:text-4xl mx-auto">
            Ages 8 to 98 Волчата
          </span>
          <div className="flex flex-col mt-10 gap-5 text-xl">
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
        <div className="">
          <span className="text-4xl">Events</span>
          <div className="bg-orange rounded-lg p-5 mt-5">
            {events && events.length > 0 && (
              <div className="">
                {events.map((event: any, index: number) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-col ">
                        <span className="text-2xl">{event.event_name}</span>
                        <span className="text-lg mt-2">
                          {convertDate(event.from, event.to)}
                        </span>
                        <span className="text-lg">{event.location}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="w-[500px]"></div>
      </div>
      <div className="bg-black py-24">
        <div className="w-[400px] text-3xl bg-black mx-auto p-5 rounded-lg flex gap-5">
          <span>Email</span>
          <span>Call</span>
          <span>Follow Us</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
