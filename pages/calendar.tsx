import React from "react";
import useSWR from "swr";
import { toMonth } from "@/utils/mapping";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Calendar() {
  let url = `/api/calendar/get-events`;

  const { data: eventsToJSON, isLoading } = useSWR(url, async () => {
    const res = await fetch(url);
    return res.json();
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  let events = [];
  if (eventsToJSON && eventsToJSON != "[object Object]") {
    events = JSON.parse(eventsToJSON);
  }

  return (
    <div className="min-h-[calc(100svh-85px)] py-8 px-4 ml:pr-8 flex flex-col items-center bg-gradient-to-t from-[#f9fde6] to-white text-black">
      {events && events.length > 0 && (
        <div className="">
          {events.map((event: any, index: number) => {
            return (
              <div key={index} className="grid grid-cols-3 text-center my-5">
                <div className="flex flex-col items-center ">
                  <span>{toMonth(event.date.split("/")[0])}</span>
                  <span className="text-xl font-semibold">
                    {event.date.split("/")[1]}
                  </span>
                </div>
                <div>
                  {event.from} - {event.to}
                </div>
                <div>{event.event_name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
