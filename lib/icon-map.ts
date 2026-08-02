import {
  AlignJustify,
  Building2,
  Cable,
  Clock,
  Flame,
  Layers,
  MonitorPlay,
  MoveDiagonal,
  Palette,
  Plug,
  Sparkles,
  Volume2,
  Wine,
  Archive,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Flame,
  Cable,
  Archive,
  Sparkles,
  Volume2,
  AlignJustify,
  Palette,
  Layers,
  MoveDiagonal,
  Plug,
  Building2,
  MonitorPlay,
  Wine,
  Clock,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Sparkles;
}
