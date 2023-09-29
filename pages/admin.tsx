import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { convertDate } from "@/utils/mapping";

import { motion } from "framer-motion";
import { Spinner } from "@chakra-ui/react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BsTrash3 } from "react-icons/bs";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Admin() {
  const { data: session, status } = useSession();
  const [isCalendar, setIsCalendar] = useState(true);

  const [email, setEmail] = useState<string | null>(null);
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());

  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isEventLoading, setIsEventLoading] = useState(false);
  const [eventDeleteId, setEventDeleteId] = useState("");
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const inputStyles = "text-xl outline-none border rounded-lg p-2";
  const labelStyles = "text-lg";

  useEffect(() => {
    if (session && session.user && session.user.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  let url = "";
  if (email) {
    url = `/api/calendar/get-events`;
  }

  const {
    data: eventsToJSON,
    isLoading,
    mutate,
  } = useSWR(url, async () => {
    const res = await fetch(url);
    return res.json();
  });

  if (isLoading || status === "loading") {
    return <LoadingSpinner />;
  }

  let events = [];
  if (eventsToJSON && eventsToJSON != "[object Object]") {
    events = JSON.parse(eventsToJSON);
  }

  if (status !== "authenticated") {
    return (
      <div className=" flex items-center justify-center min-h-[calc(100svh-85px)]">
        <div className="relative items-center">
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
              setIsSignInLoading(true);
              signIn(
                "auth0",
                { callbackUrl: "/admin" },
                {
                  prompt: "login",
                }
              ).then(() => {
                setIsSignInLoading(false);
              });
            }}
            className={` bg-blue text-white rounded-lg transition-colors duration-200 text-xl
         py-1 px-3 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover mr-5
         ${isSignInLoading ? "opacity-0 pointer-events-none" : ""}`}
          >
            Sign In
          </motion.button>
          {isSignInLoading && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-blue opacity-50 rounded-lg shadow-md py-1 px-3
           cursor-not-allowed mr-5"
            >
              <Spinner size="md" color="white" />
            </div>
          )}
        </div>
      </div>
    );
  }

  async function createEvent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsEventLoading(true);

    const response = await fetch("/api/calendar/create-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: eventName,
        location: location,
        from: from,
        to: to,
        email: email,
      }),
    });
    const res = await response.json();
    mutate();
    setIsEventLoading(false);
    return await res;
  }

  async function deleteEvent(
    event: React.FormEvent<HTMLFormElement>,
    id: string
  ) {
    event.preventDefault();
    setIsDeleteLoading(true);

    const response = await fetch("/api/calendar/delete-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        eventId: id,
      }),
    });
    const res = await response.json();
    mutate();
    setIsDeleteLoading(false);
    setEventDeleteId("");
    return await res;
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center py-16 min-h-[calc(100svh-85px)]">
        <div className="flex flex-col w-[300px] mx-auto mb-3 ">
          <div className="flex items-center justify-center mb-3">
            <button
              className={`border p-2 rounded-l-xl ${
                isCalendar && "bg-white border-blue"
              }`}
              onClick={() => {
                setIsCalendar(true);
              }}
            >
              Calendar
            </button>
            <button
              className={`border p-2 rounded-r-xl ${
                !isCalendar && "bg-white border-blue"
              }`}
              onClick={() => {
                setIsCalendar(false);
              }}
            >
              Pay Logs
            </button>
          </div>
        </div>

        {isCalendar && (
          <div className="flex flex-col gap-5 mx-5">
            {events &&
              events.length > 0 &&
              events.map((event: any, index: number) => {
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
                    <div className="relative items-center ml-auto">
                      <BsTrash3
                        className={`text-red ml-auto cursor-pointer   ${
                          isDeleteLoading && event.id === eventDeleteId
                            ? "opacity-0 pointer-events-none"
                            : ""
                        }`}
                        onClick={(e: any) => {
                          setEventDeleteId(event.id);
                          deleteEvent(e, event.id);
                        }}
                        size="22"
                      />
                      {isDeleteLoading && event.id === eventDeleteId && (
                        <div
                          className="absolute right-0 top-0 flex items-center justify-center bg-red opacity-50 rounded-lg shadow-md ml-auto px-2 py-1
           cursor-not-allowed "
                        >
                          <Spinner size="sm" color="white" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            <div className="mt-16 flex flex-col mx-5">
              <span className="mx-auto text-xl mb-5 text-black">
                Create an Event
              </span>
              <form
                className="border border-1 flex flex-col p-5 rounded-lg"
                onSubmit={(e) => createEvent(e)}
              >
                <label className={labelStyles}>
                  Event Name <span className="text-[#E53B17] ml-[2px]">*</span>
                </label>
                <input
                  className={inputStyles}
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Vistovka"
                  required
                ></input>
                <label className={`${labelStyles} mt-2`}>
                  Event Location{" "}
                  <span className="text-[#E53B17] ml-[2px]">*</span>
                </label>
                <input
                  className={inputStyles}
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Scouts House"
                  required
                ></input>
                <label className={`${labelStyles} mt-2`}>
                  From <span className="text-[#E53B17] ml-[2px]">*</span>
                </label>
                <DatePicker
                  selected={from}
                  onChange={(date: Date) => setFrom(date)}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="Time"
                  className="w-[225px] footerXM:w-[300px] text-black"
                  isClearable
                />
                <label className={`${labelStyles} mt-2`}>
                  To <span className="text-[#E53B17] ml-[2px]">*</span>
                </label>
                <DatePicker
                  selected={to}
                  onChange={(date: Date) => setTo(date)}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={30}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="Time"
                  isClearable
                  className="w-[225px] footerXM:w-[300px] text-black"
                />

                <div className="mt-8 relative items-center mx-auto">
                  <button
                    type="submit"
                    className="bg-blue text-white rounded-full transition-colors duration-200 py-2 px-8 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover"
                  >
                    Add Event
                  </button>
                  {isEventLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue opacity-50 rounded-full shadow-md py-2 px-8 cursor-not-allowed">
                      <Spinner size="md" color="white" />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
