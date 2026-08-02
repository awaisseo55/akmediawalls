"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CATEGORIES = ["Design Ideas", "Cost Guides", "Installation Tips", "Home Improvement"];

export function BlogPostForm() {
  const router = useRouter();
  const [category, setCategory] = useState("Design Ideas");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("category", category);

    try {
      const res = await fetch("/api/admin/blog", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Could not save post.");
      e.currentTarget.reset();
      setStatus("idle");
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not save post.");
    }
  }

  return (
    <Card className="p-6">
      <h2 className="mb-4 font-serif text-xl font-semibold text-foreground">Add / Update Blog Post</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="title" className="mb-1.5 block">Title</Label>
          <Input id="title" name="title" required placeholder="Post title (saving with an existing title updates that post)" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label className="mb-1.5 block">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="author" className="mb-1.5 block">Author</Label>
            <Input id="author" name="author" placeholder="AK Media Walls Team" />
          </div>
        </div>
        <div>
          <Label htmlFor="excerpt" className="mb-1.5 block">Excerpt</Label>
          <Textarea id="excerpt" name="excerpt" required placeholder="One or two sentence summary shown on listing cards" />
        </div>
        <div>
          <Label htmlFor="metaDescription" className="mb-1.5 block">Meta Description (SEO)</Label>
          <Input id="metaDescription" name="metaDescription" placeholder="~155 characters, defaults to excerpt if left blank" />
        </div>
        <div>
          <Label htmlFor="content" className="mb-1.5 block">
            Content (separate paragraphs with a blank line, prefix a line with &ldquo;## &rdquo; for a heading)
          </Label>
          <Textarea id="content" name="content" required rows={10} className="min-h-56" />
        </div>
        <div>
          <Label htmlFor="image" className="mb-1.5 block">Cover Image</Label>
          <Input id="image" name="image" type="file" accept="image/*" required className="pt-2" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Saving..." : "Save Post"}
        </Button>
      </form>
    </Card>
  );
}
