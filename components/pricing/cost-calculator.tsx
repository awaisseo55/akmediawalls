"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";

import { LOCATIONS } from "@/data/locations";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const WALL_TYPES = [
  { value: "tv-mount", label: "TV Mounting Only", base: 220 },
  { value: "standard", label: "Standard Media Wall", base: 1100 },
  { value: "fireplace", label: "Fireplace Media Wall", base: 1500 },
  { value: "acoustic", label: "Acoustic Media Wall", base: 1600 },
  { value: "slatted-wood", label: "Slatted Wood Wall", base: 1400 },
  { value: "commercial", label: "Commercial Fit-Out", base: 2200 },
];

const SIZES = [
  { value: "small", label: "Small (under 6ft)", multiplier: 0.8 },
  { value: "medium", label: "Medium (6ft to 10ft)", multiplier: 1 },
  { value: "large", label: "Large (10ft+)", multiplier: 1.45 },
];

const MATERIALS = [
  { value: "standard", label: "Standard (painted MDF)", multiplier: 1 },
  { value: "premium", label: "Premium (oak/walnut veneer)", multiplier: 1.25 },
  { value: "luxury", label: "Luxury (solid slats, marble-effect)", multiplier: 1.6 },
];

function formatGBP(n: number) {
  return `£${Math.round(n / 10) * 10}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function CostCalculator() {
  const [type, setType] = useState("fireplace");
  const [size, setSize] = useState("medium");
  const [fireplace, setFireplace] = useState("no");
  const [acoustic, setAcoustic] = useState("no");
  const [led, setLed] = useState("yes");
  const [material, setMaterial] = useState("premium");
  const [city, setCity] = useState("Manchester");

  const { low, high } = useMemo(() => {
    const wallType = WALL_TYPES.find((w) => w.value === type) ?? WALL_TYPES[1];
    const sizeInfo = SIZES.find((s) => s.value === size) ?? SIZES[1];
    const materialInfo = MATERIALS.find((m) => m.value === material) ?? MATERIALS[0];

    let total = wallType.base * sizeInfo.multiplier * materialInfo.multiplier;

    if (type !== "tv-mount") {
      if (fireplace === "yes" && type !== "fireplace") total += 500;
      if (acoustic === "yes" && type !== "acoustic") total += 400;
      if (led === "yes") total += 150;
    }

    return {
      low: Math.round((total * 0.85) / 10) * 10,
      high: Math.round((total * 1.2) / 10) * 10,
    };
  }, [type, size, fireplace, acoustic, led, material]);

  return (
    <Card className="p-6 sm:p-10">
      <div className="mb-8 flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-primary">
          <Calculator className="size-5" />
        </span>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">Cost Calculator</h2>
          <p className="text-sm text-muted">Adjust the options to see an estimated price range</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label className="mb-2 block">Media wall type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {WALL_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-2 block">Size</Label>
          <Select value={size} onValueChange={setSize} disabled={type === "tv-mount"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SIZES.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-2 block">Materials</Label>
          <Select value={material} onValueChange={setMaterial} disabled={type === "tv-mount"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MATERIALS.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-2 block">City</Label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.map((l) => (
                <SelectItem key={l.slug} value={l.city}>
                  {l.city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="mb-3 block">Fireplace included?</Label>
          <RadioGroup value={fireplace} onValueChange={setFireplace} disabled={type === "tv-mount" || type === "fireplace"}>
            <label className="flex items-center gap-2 text-sm text-body">
              <RadioGroupItem value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-body">
              <RadioGroupItem value="no" /> No
            </label>
          </RadioGroup>
        </div>

        <div>
          <Label className="mb-3 block">Acoustic panels?</Label>
          <RadioGroup value={acoustic} onValueChange={setAcoustic} disabled={type === "tv-mount" || type === "acoustic"}>
            <label className="flex items-center gap-2 text-sm text-body">
              <RadioGroupItem value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-body">
              <RadioGroupItem value="no" /> No
            </label>
          </RadioGroup>
        </div>

        <div className="sm:col-span-2">
          <Label className="mb-3 block">LED lighting?</Label>
          <RadioGroup value={led} onValueChange={setLed} disabled={type === "tv-mount"}>
            <label className="flex items-center gap-2 text-sm text-body">
              <RadioGroupItem value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm text-body">
              <RadioGroupItem value="no" /> No
            </label>
          </RadioGroup>
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-forest p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          Estimated price range for {city}
        </p>
        <p className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">
          {formatGBP(low)} &ndash; {formatGBP(high)}
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
          This is a guide only. Your exact price depends on your room, wall
          condition, and final design chosen at your free consultation.
        </p>
        <Button asChild size="lg" variant="accent" className="mt-6">
          <Link href="/contact">Book Free Quote for Exact Price</Link>
        </Button>
      </div>
    </Card>
  );
}
