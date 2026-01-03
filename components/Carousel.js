"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Carousel({ slides, intervalMs = 5200 }) {
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
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50"
            aria-roledescription="carousel"
            aria-label="Featured highlights"
        >
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {safeSlides.map((slide, idx) => (
                    <div
                        key={`${slide.title}-${idx}`}
                        className="w-full shrink-0 p-5 sm:p-8"
                        aria-hidden={idx !== activeIndex}
                    >
                        <div className="grid gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                            <div className="space-y-3">
                                <div
                                    className={`text-xs font-semibold uppercase tracking-wide ${accentByIndex[idx % accentByIndex.length]
                                        }`}
                                >
                                    {slide.eyebrow}
                                </div>
                                <div className="text-2xl font-semibold tracking-tight text-slate-900">
                                    {slide.title}
                                </div>
                                <p className="text-sm leading-6 text-slate-600">{slide.subtitle}</p>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white/70 p-4">
                                <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.title}
                                        fill
                                        sizes="(min-width: 640px) 40vw, 100vw"
                                        className="object-contain"
                                        priority={idx === 0}
                                    />
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
