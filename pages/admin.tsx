import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { toMonth } from "@/utils/mapping";

export default function Admin() {
  const { data: session, status } = useSession();
  const [isCalendar, setIsCalendar] = useState(true);

  const [email, setEmail] = useState<string | null>(null);
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

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

  async function createEvent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/api/calendar/create-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: eventName,
        date: date,
        from: from,
        to: to,
      }),
    });
    const res = await response.json();
    mutate();
    return await res;
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
            <div className="mt-16">
              Create an Event:
              <form
                className="border border-1 flex flex-col p-5 rounded-lg"
                onSubmit={(e) => createEvent(e)}
              >
                <label className={labelStyles}>Event Name</label>
                <input
                  className={inputStyles}
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Vistovka"
                ></input>
                <label className={labelStyles}>Date</label>
                <input
                  className={inputStyles}
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="10/11/2023"
                ></input>
                <label className={labelStyles}>From</label>
                <input
                  className={inputStyles}
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="10:00 am"
                ></input>
                <label className={labelStyles}>To</label>
                <input
                  className={inputStyles}
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="4:00 pm"
                ></input>
                <button
                  type="submit"
                  className="mt-8 mx-auto bg-blue text-white rounded-full transition-colors duration-200 py-2 px-8 whitespace-nowrap shadow-md hover:shadow-lg cursor-pointer hover:bg-blueHover"
                >
                  Add Event
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
