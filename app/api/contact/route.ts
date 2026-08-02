import { NextResponse } from "next/server";
import { Resend } from "resend";
import { randomUUID } from "crypto";

import { BUSINESS } from "@/lib/constants";
import { saveLead, uploadLeadPhoto } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const postcode = String(formData.get("postcode") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const preferredContact = String(formData.get("preferredContact") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const photo = formData.get("photo");

    if (!name || !phone || !email || !postcode) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    let photoUrl: string | undefined;
    if (photo instanceof File && photo.size > 0) {
      photoUrl = await uploadLeadPhoto(photo);
    }

    const lead = {
      id: randomUUID(),
      name,
      phone,
      email,
      postcode,
      service,
      preferredContact,
      message,
      photoUrl,
      createdAt: new Date().toISOString(),
    };

    await saveLead(lead);

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: "AK Media Walls Website <onboarding@resend.dev>",
          to: BUSINESS.email,
          replyTo: email,
          subject: `New quote request from ${name} (${postcode})`,
          text: [
            `New lead from akmediawalls.co.uk`,
            ``,
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Postcode: ${postcode}`,
            `Service: ${service}`,
            `Preferred contact: ${preferredContact}`,
            `Message: ${message || "(none provided)"}`,
            photoUrl ? `Photo: ${photoUrl}` : "",
          ].join("\n"),
        });
      } catch (emailError) {
        console.error("Resend email failed:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
