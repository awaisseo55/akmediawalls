"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { SERVICES } from "@/data/services";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");
  const [contactMethod, setContactMethod] = useState("phone");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.set("service", service);
    formData.set("preferredContact", contactMethod);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-10 text-center shadow-warm">
        <CheckCircle2 className="size-12 text-success" />
        <h3 className="font-serif text-2xl font-semibold text-foreground">Thank you</h3>
        <p className="max-w-sm text-body">
          Your quote request has been received. We will be in touch within
          one working day to arrange your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6 shadow-warm sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="mb-1.5 block">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div>
          <Label htmlFor="phone" className="mb-1.5 block">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input id="phone" name="phone" type="tel" required placeholder="07XXX XXXXXX" />
        </div>
        <div>
          <Label htmlFor="email" className="mb-1.5 block">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="postcode" className="mb-1.5 block">
            Postcode <span className="text-destructive">*</span>
          </Label>
          <Input id="postcode" name="postcode" required placeholder="e.g. M20 2XX" />
        </div>
      </div>

      <div>
        <Label className="mb-1.5 block">
          Service interested in <span className="text-destructive">*</span>
        </Label>
        <Select value={service} onValueChange={setService} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s.slug} value={s.name}>
                {s.name}
              </SelectItem>
            ))}
            <SelectItem value="Not sure / general enquiry">Not sure / general enquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2 block">Preferred contact method</Label>
        <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
          <label className="flex items-center gap-2 text-sm text-body">
            <RadioGroupItem value="phone" /> Phone
          </label>
          <label className="flex items-center gap-2 text-sm text-body">
            <RadioGroupItem value="email" /> Email
          </label>
          <label className="flex items-center gap-2 text-sm text-body">
            <RadioGroupItem value="either" /> Either
          </label>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="message" className="mb-1.5 block">
          Message / details
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your room, the look you're after, and any timescales."
        />
      </div>

      <div>
        <Label htmlFor="photo" className="mb-1.5 block">
          Photo of your current wall (optional)
        </Label>
        <Input id="photo" name="photo" type="file" accept="image/*" className="pt-2" />
      </div>

      {status === "error" && (
        <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {errorMessage}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Request Free Quote
          </>
        )}
      </Button>
    </form>
  );
}
