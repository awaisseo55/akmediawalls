"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HomeHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden sm:min-h-[60vh] lg:min-h-[70vh]">
      <Image
        src="/slider.jpeg"
        alt="Bespoke media wall installation by Media Walls North"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-24 sm:px-6 lg:px-8"
      >
        <motion.span
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-brass"
        >
          Manchester&rsquo;s Trusted Media Wall Specialists
        </motion.span>
        <motion.h1
          variants={item}
          className="max-w-2xl font-serif text-4xl font-semibold leading-[1.1] text-white balance sm:text-5xl lg:text-6xl"
        >
          Bespoke Media Walls, Designed &amp; Installed Across the North West
        </motion.h1>
        <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-white/85">
          From concept to completion. Handcrafted media walls with fireplaces,
          acoustic panels, and premium finishes for Manchester homes.
        </motion.p>
        <motion.div variants={item} className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outlineLight">
            <Link href="/gallery">View Our Gallery</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
