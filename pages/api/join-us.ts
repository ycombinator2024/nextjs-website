import type { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";
import prisma from "@/lib/client";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  childrenInfo: z.string(),
  subscribe: z.boolean(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const event = schema.parse(JSON.parse(req.body));

    await prisma.joined.create({
      data: {
        name: event.name,
        email: event.email,
        phone: event.phone,
        children_info: event.childrenInfo,
        subscribe: event.subscribe,
      },
    });

    res.status(200).json({ message: "Success" });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({ message: err.issues[0].message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  return;
}
