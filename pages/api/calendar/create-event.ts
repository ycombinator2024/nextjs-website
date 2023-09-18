import type { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";
import prisma from "@/lib/client";

const schema = z.object({
  eventName: z.string().min(1).max(255),
  date: z.string().min(1).max(255),
  from: z.string().min(1).max(255),
  to: z.string().min(1).max(255),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const event = schema.parse(req.body);

    await prisma.calendar.create({
      data: {
        event_name: event.eventName,
        date: event.date,
        from: event.from,
        to: event.to,
      },
    });

    res.status(200).json({ message: "Event Created" });
  } catch (err) {
    console.log(err);
    if (err instanceof ZodError) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
