"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const STYLES = [
  { value: "fireplace", label: "Fireplace" },
  { value: "acoustic", label: "Acoustic" },
  { value: "tv-mount", label: "TV Mount" },
  { value: "slatted-wood", label: "Slatted Wood" },
  { value: "commercial", label: "Commercial" },
];

export function GalleryUploadForm() {
  const router = useRouter();
  const [style, setStyle] = useState("fireplace");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("style", style);

    try {
      const res = await fetch("/api/admin/gallery", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Upload failed.");
      e.currentTarget.reset();
      setStatus("idle");
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Upload failed.");
    }
  }

  return (
    <Card className="p-6">
      <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">Upload New Project Photo</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="title" className="mb-1.5 block">Title</Label>
          <Input id="title" name="title" required placeholder="e.g. Oak slat fireplace media wall" />
        </div>
        <div>
          <Label className="mb-1.5 block">Style</Label>
          <Select value={style} onValueChange={setStyle}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STYLES.map((s) => (
                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location" className="mb-1.5 block">Location / City</Label>
          <Input id="location" name="location" required placeholder="e.g. Manchester" />
        </div>
        <div>
          <Label htmlFor="timeline" className="mb-1.5 block">Timeline</Label>
          <Input id="timeline" name="timeline" placeholder="e.g. 3 days" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="description" className="mb-1.5 block">Description</Label>
          <Textarea id="description" name="description" placeholder="Brief description of the project" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="image" className="mb-1.5 block">Image</Label>
          <Input id="image" name="image" type="file" accept="image/*" required className="pt-2" />
        </div>
        {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
        <Button type="submit" disabled={status === "submitting"} className="sm:col-span-2">
          {status === "submitting" ? "Uploading..." : "Upload Photo"}
        </Button>
      </form>
    </Card>
  );
}
