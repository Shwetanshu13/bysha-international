import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="relative">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <Carousel
            className="rounded-none border-x-0"
            slides={[
              {
                eyebrow: "Featured",
                title: "Amazon-ready products",
                subtitle:
                  "Professional catalog presentation and customer-first quality standards.",
                imageSrc: "https://m.media-amazon.com/images/I/8129M0CGLpL._SX679_.jpg",
              },
              {
                eyebrow: "Reach",
                title: "Worldwide marketplaces",
                subtitle:
                  "Built for international buyers, reviews, and reliable fulfillment.",
                imageSrc: "/imgs/worldwide.jpg",
              },
              {
                eyebrow: "Sourcing",
                title: "Quality, compliance, consistency",
                subtitle:
                  "Supplier vetting, packaging control, and export-focused documentation.",
                imageSrc: "/imgs/premium-makhana.webp",
              },
              {
                eyebrow: "Catalog",
                title: "Lifestyle-ready categories",
                subtitle:
                  "Practical, well-presented products with reliable quality and packaging.",
                imageSrc: "/imgs/leather_bag.jpeg",
              },
              {
                eyebrow: "Export",
                title: "Ready for bulk supply",
                subtitle:
                  "Share your destination, quantity, and timeline — we’ll support the next steps.",
                imageSrc: "/imgs/bulk-order.png",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="relative z-10 grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-medium leading-5 text-emerald-800 whitespace-normal">
              Export-ready sourcing • Amazon-first B2C • B2B partnerships
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-slate-900 via-emerald-700 to-sky-700 bg-clip-text text-transparent">
                Bysha International
              </span>
            </h1>

            <p className="text-lg leading-8 text-slate-600">
              Global Trade. Quality Products. Trusted Partnerships.
            </p>

            <p className="leading-7 text-slate-600">
              We help customers discover reliable products through Amazon
              marketplaces worldwide, while supporting wholesalers and importers
              with export-focused bulk supply for select categories.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.amazon.in/s?k=Bysha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700 sm:w-auto"
              >
                View Products on Amazon
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-sky-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-sky-50 sm:w-auto"
              >
                B2B Inquiries
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          <div className="rounded-xl border border-emerald-200/60 bg-emerald-50/60 p-3 sm:p-4">
            <div className="text-sm font-semibold text-slate-900">
              Global presence
            </div>
            <div className="mt-1 text-sm text-slate-600">
              Marketplace-ready operations and export documentation support.
            </div>
          </div>
          <div className="rounded-xl border border-sky-200/60 bg-sky-50/60 p-3 sm:p-4">
            <div className="text-sm font-semibold text-slate-900">
              Amazon marketplaces
            </div>
            <div className="mt-1 text-sm text-slate-600">
              B2C purchases are fulfilled via Amazon for speed and trust.
            </div>
          </div>
          <div className="rounded-xl border border-indigo-200/60 bg-indigo-50/60 p-3 sm:p-4">
            <div className="text-sm font-semibold text-slate-900">
              B2B partnerships
            </div>
            <div className="mt-1 text-sm text-slate-600">
              Bulk supply, sourcing, and long-term distribution.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm lg:grid-cols-3">
        <div className="space-y-2 lg:col-span-1">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            About Bysha International
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            We operate across two models: B2C sales through Amazon marketplaces
            and B2B bulk supply for select export categories.
          </p>
        </div>
        <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-sm font-semibold text-slate-900">
              Built for credibility
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Clear documentation, consistent packaging, and transparent product
              positioning for international buyers.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-sm font-semibold text-slate-900">
              Product-first approach
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Focused catalogs with quality control and sourcing discipline to
              support long-term relationships.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-sm font-semibold text-slate-900">
              B2C via Amazon
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Customers purchase on Amazon. We use Amazon fulfillment for
              dependable delivery and service.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-sm font-semibold text-slate-900">
              B2B bulk supply
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              For wholesalers and distributors: bulk orders, export packaging,
              and partnership-led supply planning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
