import React from "react";
// import Calendar from "@ericz1803/react-google-calendar";

const API_KEY =
  "665067831162-hmvujsat9vol7ebvhcp09hfqk69q7svn.apps.googleusercontent.com";
let calendars = [
  {
    calendarId:
      "c_4031092576fadd6e2d9dbf6ef0b6d891e5e877bed846f4135f9301a9c397e662@group.calendar.google.com",
  },
];

export default function CalendarPage() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_4031092576fadd6e2d9dbf6ef0b6d891e5e877bed846f4135f9301a9c397e662%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        className="w-[100vw] h-[calc(100svh-87px)]"
      ></iframe>
      {/*<Calendar apiKey={API_KEY} calendars={calendars} />*/}
    </div>
  );
}
