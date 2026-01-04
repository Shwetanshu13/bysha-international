import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "B2B Products",
    description:
        "Bulk supply and partnership offerings from Bysha International, including foxnuts (makhana) and hand-crafted leather bags.",
};

export default function B2BProductsPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    B2B Bulk Supply & Partnerships
                </h1>
                <p className="max-w-3xl text-sm leading-6 text-slate-600">
                    Bysha International supports wholesalers, importers, and brand owners
                    with selected export-ready products. We emphasize sourcing discipline,
                    consistent quality, and packaging that works for international
                    distribution.
                </p>
            </header>

            <section className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div className="space-y-4">
                        <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                            Category
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Foxnuts (Makhana) — Bulk Packs & Private Label
                        </h2>
                        <p className="text-sm leading-6 text-slate-600">
                            Clean labeling, stable shelf presentation, and a repeatable roast
                            profile — designed for distributors who need consistency at scale.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-sm font-semibold text-slate-900">
                                    Use cases
                                </div>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                                    <li>Retail-ready bulk supply for regional distributors</li>
                                    <li>Hotel / airline / institutional snack programs</li>
                                    <li>Private label and custom flavor development</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-sm font-semibold text-slate-900">
                                    Quality & sourcing
                                </div>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                                    <li>Batch-level consistency and packaging control</li>
                                    <li>Export-focused labeling and documentation support</li>
                                    <li>Partner-first planning for repeat purchase cycles</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                            >
                                Contact for Bulk Orders
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex h-11 items-center justify-center rounded-lg border border-sky-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-sky-50"
                            >
                                Our Quality Approach
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50 p-4">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src="/imgs/premium-makhana.webp"
                                alt="Foxnuts bulk supply"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50 p-4">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src="/imgs/leather_bag.jpeg"
                                alt="Hand-crafted leather bags"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                            Category
                        </div>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Hand-crafted Leather Bags — Wholesale & Partnerships
                        </h2>
                        <p className="text-sm leading-6 text-slate-600">
                            Premium finishing, durable hardware selection, and consistent
                            craftsmanship standards — suitable for boutiques, retailers, and
                            international distributors.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-sm font-semibold text-slate-900">
                                    Use cases
                                </div>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                                    <li>Boutique retail lines and curated collections</li>
                                    <li>Corporate gifting and private branding</li>
                                    <li>Online retail catalog supply</li>
                                </ul>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div className="text-sm font-semibold text-slate-900">
                                    Quality & sourcing
                                </div>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                                    <li>Stitching standards and finishing consistency</li>
                                    <li>Material selection with clear specs</li>
                                    <li>Packaging and export-ready packing guidelines</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                            >
                                Contact for Bulk Orders
                            </Link>
                            <Link
                                href="/b2c-products"
                                className="inline-flex h-11 items-center justify-center rounded-lg border border-sky-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-sky-50"
                            >
                                View B2C Catalog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 via-slate-50 to-sky-50 p-8 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                            Request a partnership pack
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                            Share your target market, required volumes, and timeline. We will
                            respond with product specs, packaging options, and the next steps.
                        </p>
                    </div>
                    <div className="md:justify-self-end">
                        <Link
                            href="/contact"
                            className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                        >
                            Start a B2B Inquiry
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
