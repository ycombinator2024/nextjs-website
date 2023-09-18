import React from "react";
import useSWR from "swr";
import { toMonth } from "@/utils/mapping";

export default function Calendar() {
  let url = `/api/calendar/get-events`;

  const { data: events, mutate } = useSWR(url, async () => {
    const res = await fetch(url);
    return res.json();
  });

  return (
    <div className="min-h-[calc(100svh-85px)] py-8 px-4 ml:pr-8 bg-light flex flex-col items-center">
      {events && events.length > 0 && (
        <div className="flex flex-col gap-5">
          {events.map((event: any, index: number) => {
            return (
              <div key={index} className="flex items-center gap-5">
                <div className="flex flex-col items-center ">
                  <span>{toMonth(event.date.split("/")[0])}</span>
                  <span>{event.date.split("/")[1]}</span>
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
