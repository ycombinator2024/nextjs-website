import React from "react";
import useSWR from "swr";
import { convertDate } from "@/utils/mapping";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useCalendarContext } from "@/context/CalendarContext";

export default function Calendar() {
  const { events, isLoading } = useCalendarContext();
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-[calc(100svh-85px)] py-8 px-4 ml:pr-8 flex flex-col items-center bg-gradient-to-t from-[#f9fde6] to-white text-black">
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
  );
}
