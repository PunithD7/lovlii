import { Webhook } from "svix";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function POST(req) {
  const payload = await req.text();
  const headerList = headers();
  const svix_id = headerList.get("svix-id");
  const svix_timestamp = headerList.get("svix-timestamp");
  const svix_signature = headerList.get("svix-signature");

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  let evt;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    return new Response("Error verifying webhook", { status: 400 });
  }

  const { data, type } = evt;

  if (type === "user.created") {
    await prisma.user.create({
      data: {
        id: data.id,
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
      },
    });
  }

  if (type === "user.updated") {
    await prisma.user.update({
      where: { id: data.id },
      data: {
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url,
      },
    });
  }

  if (type === "user.deleted") {
    await prisma.user.delete({ where: { id: data.id } });
  }

  return new Response("OK", { status: 200 });
}
