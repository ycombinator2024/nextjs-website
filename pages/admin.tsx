import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { toMonth } from "@/utils/mapping";

export default function Admin() {
  const { data: session, status } = useSession();
  const [isCalendar, setIsCalendar] = useState(true);

  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (session && session.user && session.user.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  let url = "";
  if (email) {
    url = `/api/calendar/get-events`;
  }

  const { data: events, mutate } = useSWR(url, async () => {
    const res = await fetch(url);
    return res.json();
  });

  if (status !== "authenticated") {
    return (
      <div>
        <button
          onClick={() =>
            signIn(
              "auth0",
              { callbackUrl: "/admin" },
              {
                prompt: "login",
              }
            )
          }
          className="text-blue hover:text-blueHover"
        >
          Sign In
        </button>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col items-center my-16">
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
        {isCalendar && events && events.length > 0 && (
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
            <div className="mt-16">Create an Event: </div>
          </div>
        )}
      </div>
    );
  }
}
