import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCalendarContext } from "@/context/CalendarContext";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import { convertDate } from "@/utils/mapping";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import JoinModal from "@/components/HomePage/JoinModal";
import YouTube from "react-youtube";
import TicketModal from "@/components/HomePage/TicketModal";
// https://www.youtube.com/watch?v=4N55fVuxxOg

import EventModal from "@/components/Modal/EventModal";

function HomePage() {
  const { events, isLoading } = useCalendarContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isTicketOpen,
    onOpen: onTicketOpen,
    onClose: onTicketClose,
  } = useDisclosure();
  const [squareSiteLink, setSquareSiteLink] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [title, setTitle] = useState("");

  const {
    isOpen: isImageOpen,
    onOpen: onImageOpen,
    onClose: onImageClose,
  } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [muteVideo, setMuteVideo] = useState(1);
  const opts = {
    height: "300",
    width: "534",
    playerVars: {
      autoplay: 1,
      disablekb: 1,
    },
  };

  const opts2 = {
    height: "250",
    width: "445",
    playerVars: {
      autoplay: 1,
      disablekb: 1,
    },
  };

  const opts3 = {
    height: "214",
    width: "381",
    playerVars: {
      autoplay: 1,
      disablekb: 1,
    },
  };

  const opts4 = {
    height: "177",
    width: "315",
    playerVars: {
      autoplay: 1,
      disablekb: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.mute();
  };

  return (
    <div className="flex flex-col w-[100vw] text-black">
      <div className="flex flex-col tw:flex-row items-center justify-center bg-transparent pt-12 pb-16 tw:gap-32 h-[calc(100svh-94px)] ">
        <div className="flex flex-col items-center justify-center bg-light z-[50] p-5 tw:absolute tw:left-[10%] tw:top-[300px] rounded-lg">
          <span className="text-5xl five:text-6xl tw:text-7xl font-semibold ">
            ST. GEORGE
          </span>{" "}
          <span className="text-5xl five:text-6xl tw:text-7xl mt-5 font-semibold">
            PATHFINDERS
          </span>
          <span className="mt-5">LOS ANGELES, CA</span>
          <div className="flex items-center justify-center mt-12 gap-10 text-xl">
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
              className="text-lg five:text-xl bg-blue hover:bg-blueHover px-5 py-3 rounded-lg font-semibold"
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
              className="text-lg five:text-xl bg-purple text-white hover:bg-purpleHover px-5 py-3 rounded-lg"
            >
              <Link href="/calendar">View Calendar</Link>
            </motion.button>
          </div>
          <button
            className="text-white z-[52]"
            onClick={(e) => {
              setMuteVideo(0);
              console.log("HERE");
            }}
          >
            MUTE/UNMUTE
          </button>
        </div>

        <div className="absolute top-[92px] left-0 z-[2] hidden tw:block bg-blue bg-opacity-10 w-[100vw] h-[calc(100svh-93px)]"></div>
        <div className="absolute top-[92px] left-0 z-[1] hidden tw:block ">
          <iframe
            src={`https://www.youtube.com/embed/kgOjo6mY0ZY?autoplay=1&mute=${muteVideo}&loop=1`}
            className="w-[100vw] h-[calc(100svh-93px)]"
          ></iframe>
        </div>
        <div className="mt-16 flex p-2 bg-black rounded-lg outline-none shadow-lg">
          {/* <YouTube
            className="hidden tw:block"
            videoId="kgOjo6mY0ZY"
            opts={opts}
            onReady={onReady}
            />*/}
          <YouTube
            className="hidden five:block tw:hidden outline-none"
            videoId="kgOjo6mY0ZY"
            opts={opts2}
            onReady={onReady}
          />
          <YouTube
            className="hidden fourteen:block five:hidden outline-none"
            videoId="kgOjo6mY0ZY"
            opts={opts3}
            onReady={onReady}
          />
          <YouTube
            className="block fourteen:hidden outline-none"
            videoId="kgOjo6mY0ZY"
            opts={opts4}
            onReady={onReady}
          />
        </div>
      </div>

      <div className="flex bg-purple py-24 ">
        <div className="w-[0px] eight:w-[50%] tw:w-[500px]"></div>
        <div className="bg-light text-black w-[500px] mx-5 five:mx-auto eight:mr-10 tw:mx-auto p-8 rounded-lg">
          <span className="text-3xl sev:text-4xl mx-auto">Age groups</span>
          <div className="flex flex-col mt-10 gap-5 text-xl ">
            <span>- Volchata and Belochki 8-11</span>
            <span>- Rasvedchiki and Rasvedchitsi 12-17</span>
            <span>- Vityazi and Druzhinitsi 18-98</span>
            {/*<span>- Волчата и Белочки 8-11</span>
            <span>- Разведчики и Разведчици 12-17</span>
          <span>- Витязи и Дружчинницы 18 - 98</span>*/}
            <motion.button
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              className="text-xl bg-purple text-white hover:bg-purpleHover px-5 py-3 rounded-lg mx-auto mt-5 mb-3"
            >
              <Link href="/camp">Apply</Link>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-light text-black py-24">
        <div className="mx-auto ">
          <span className="text-4xl mx-5 five:mx-10">Events</span>
          <div className="bg-purple text-white rounded-lg p-5 mt-5 flex flex-col gap-5 mx-5">
            {events && events.length > 0 ? (
              <>
                {events.map((event: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col lg:flex-row items-center justify-center gap-4 five:gap-6"
                    >
                      <Image
                        src={
                          event.imageUrl ||
                          "https://res.cloudinary.com/duaiiecow/image/upload/v1698730024/rcvhbweur9cgg3umpg9b.png"
                        }
                        alt="event"
                        width={150}
                        height={150}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedImage(event.imageUrl);
                          onImageOpen();
                        }}
                      />
                      <div className="flex flex-col text-center lg:text-left ">
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
                      {event.buttonOption === "Get Tickets" ? (
                        <button
                          className="text-white lg:ml-8 text-xl bg-blue hover:bg-blueHover px-5 py-3 rounded-lg mb-3 whitespace-nowrap"
                          onClick={() => {
                            setSquareSiteLink(event.squareSiteLink);
                            setTicketPrice(event.ticketPrice);
                            setDisclaimer(event.disclaimer);
                            setTitle(event.event_name);
                            onTicketOpen();
                          }}
                        >
                          Get Tickets
                        </button>
                      ) : (
                        <div className="ml-auto"></div>
                      )}
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
                    w-[116px] h-[116px] ml-[67px]
                    xs:w-[140px] xs:h-[140px] xs:ml-[80px]"
                >
                  <Image src="/favicon.png" alt="Logo" fill />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[0px] eight:w-[40%] tw:w-[500px]"></div>
      </div>
      <div className="bg-purple text-white  py-16 footerSM:py-24 flex ">
        <div className="flex flex-col five:flex-row text-md sm:text-xl mx-auto border border-white border-1 ">
          <div className="flex flex-col items-center five:border-r p-5 gap-2">
            <span>Email</span>
            <span>razvedchik.dnn@gmail.com</span>
          </div>
          <div className="flex flex-col items-center five:border-r p-5 gap-2">
            <span>Call</span>
            <span>(805) 512-6020</span>
          </div>
          <div className="flex flex-col items-center p-5 gap-2">
            <span>Follow Us</span>
            <div className="flex gap-4">
              <motion.a
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.1 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 },
                }}
                className="text-light"
                href="https://www.facebook.com/sgpathfinders/"
                target="_blank"
              >
                <BsFacebook className="text-3xl" />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.1 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 },
                }}
                className="text-light"
                href="https://www.instagram.com/razvedchik.dnn"
                target="_blank"
              >
                <BsInstagram className="text-3xl" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <JoinModal isOpen={isOpen} onClose={onClose} />
      <TicketModal
        isOpen={isTicketOpen}
        onClose={onTicketClose}
        squareSiteLink={squareSiteLink}
        ticketPrice={ticketPrice}
        disclaimer={disclaimer}
        title={title}
      />
      <EventModal
        isImageOpen={isImageOpen}
        onImageClose={onImageClose}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
}

export default HomePage;
