import React from "react";
import useSWR from "swr";
import { convertDate } from "@/utils/mapping";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useCalendarContext } from "@/context/CalendarContext";
import Image from "next/image";

export default function Calendar() {
  const { events, isLoading } = useCalendarContext();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-[calc(100svh-133px)] py-8 px-4 ml:pr-8 flex flex-col items-center bg-gradient-to-t from-[#f9fde6] to-white text-black ">
      {events && events.length > 0 && (
        <div className="flex flex-col gap-5 mx-5">
          {events.map((event: any, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col five:flex-row items-center gap-4 five:gap-6"
              >
                <Image
                  src={event.imageUrl}
                  alt="event"
                  width={150}
                  height={150}
                />
                <div className="flex flex-col">
                  <span className="text-xl xs:text-2xl">
                    {event.event_name}
                  </span>
                  <span className="text-md xs:text-lg mt-2">
                    {convertDate(event.from, event.to)}
                  </span>
                  <span className="text-md xs:text-lg">{event.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
