"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import type { Settings } from "@/lib/admin-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SettingsForm({ settings }: { settings: Settings }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    const body = {
      phone: formData.get("phone"),
      email: formData.get("email"),
      serviceAreas: formData.get("serviceAreas"),
    };

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Could not save settings.");
      setStatus("success");
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not save settings.");
    }
  }

  return (
    <Card className="max-w-xl p-6">
      <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">Business Settings</h2>
      <p className="mb-4 text-sm text-muted">
        Note: the live phone number and email shown across the public site are
        set via the <code>BUSINESS_PHONE</code> and <code>CONTACT_EMAIL</code>{" "}
        environment variables in Vercel. Saving here updates the values stored
        for future admin/CMS use.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="phone" className="mb-1.5 block">Business Phone</Label>
          <Input id="phone" name="phone" defaultValue={settings.phone} required />
        </div>
        <div>
          <Label htmlFor="email" className="mb-1.5 block">Contact Email</Label>
          <Input id="email" name="email" type="email" defaultValue={settings.email} required />
        </div>
        <div>
          <Label htmlFor="serviceAreas" className="mb-1.5 block">Service Areas (comma separated)</Label>
          <Textarea id="serviceAreas" name="serviceAreas" defaultValue={settings.serviceAreas.join(", ")} />
        </div>
        {status === "success" && <p className="text-sm text-success">Settings saved.</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Saving..." : "Save Settings"}
        </Button>
      </form>
    </Card>
  );
}
