"use client";

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

const VIDEOS = ["/videos/1.mp4", "/videos/2.mp4", "/videos/3.mp4", "/videos/4.mp4"];

export function VideoShowcase({
  title = "Watch Our Latest Installations",
  description = "Real projects, real homes across the North West.",
}: {
  title?: string;
  description?: string;
}) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const videos = videoRefs.current.filter((v): v is HTMLVideoElement => Boolean(v));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            if (!video.src) {
              const source = video.dataset.src;
              if (source) video.src = source;
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.35 }
    );

    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#141414] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See Our Work"
          title={title}
          description={description}
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VIDEOS.map((src, i) => (
            <div
              key={src}
              className="group relative h-[260px] overflow-hidden rounded-xl border border-border transition-colors duration-300 hover:border-brass sm:h-[320px] lg:h-[400px]"
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                data-src={src}
                muted
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <span className="flex size-12 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                  <Play className="size-5 fill-white text-white" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
