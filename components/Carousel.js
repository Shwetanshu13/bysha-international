"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Carousel({ slides, intervalMs = 5200, className = "" }) {
    const safeSlides = useMemo(() => (Array.isArray(slides) ? slides : []), [slides]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (safeSlides.length <= 1) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) return;

        const id = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % safeSlides.length);
        }, intervalMs);

        return () => window.clearInterval(id);
    }, [intervalMs, safeSlides.length]);

    if (safeSlides.length === 0) return null;

    const accentByIndex = [
        "text-emerald-700",
        "text-sky-700",
        "text-indigo-700",
    ];

    return (
        <div
            className={`relative overflow-hidden rounded-xl border border-slate-200 bg-linear-to-br from-emerald-50 via-white to-sky-50 ${className}`.trim()}
            aria-roledescription="carousel"
            aria-label="Featured highlights"
        >
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-6 bottom-4 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />

            <div
                className="flex transition-transform duration-700 ease-in-out"
                aria-live="polite"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {safeSlides.map((slide, idx) => (
                    <div
                        key={`${slide.title}-${idx}`}
                        className={`w-full shrink-0 p-4 sm:p-6 transition-transform duration-500 ${idx === activeIndex ? "sm:scale-[1.01]" : "sm:scale-[0.99]"}`}
                        aria-hidden={idx !== activeIndex}
                    >
                        <div className="grid gap-2 sm:gap-2.5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                            <div className="space-y-2.5 sm:space-y-2.5">
                                <div
                                    className={`text-sm font-semibold uppercase tracking-wide ${accentByIndex[idx % accentByIndex.length]
                                        }`}
                                >
                                    {slide.eyebrow}
                                </div>
                                <div className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                                    {slide.title}
                                </div>
                                <p className="text-lg leading-7 text-slate-700 sm:text-lg sm:leading-7">{slide.subtitle}</p>

                                <div className="flex flex-col gap-2.5 pt-1.5 sm:flex-row sm:pt-1">
                                    <a
                                        href="https://www.amazon.in/s?k=Bysha"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-12 items-center justify-center rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-6 text-base font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                                    >
                                        View Products
                                    </a>
                                    <Link
                                        href="/contact"
                                        className="inline-flex h-12 items-center justify-center rounded-lg border border-sky-200 bg-white px-6 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-sky-50"
                                    >
                                        Talk to Us
                                    </Link>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 sm:p-4 shadow-md ring-1 ring-slate-100">
                                <div className="relative aspect-2/1 w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.title}
                                        fill
                                        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 60vw, 100vw"
                                        className="object-contain transition-transform duration-700 ease-out"
                                        priority={idx === 0}
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/5 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {safeSlides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 w-6 rounded-full transition-colors ${idx === activeIndex ? "bg-emerald-600" : "bg-slate-200"
                            }`}
                        aria-hidden="true"
                    />
                ))}
            </div>
        </div>
    );
}
