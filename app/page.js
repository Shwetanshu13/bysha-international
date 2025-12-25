import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
            Export-ready sourcing • Amazon-first B2C • B2B partnerships
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Bysha Internationals
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
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              View Products on Amazon
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              B2B Inquiries
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">
                Global presence
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Marketplace-ready operations and export documentation support.
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">
                Amazon marketplaces
              </div>
              <div className="mt-1 text-sm text-slate-600">
                B2C purchases are fulfilled via Amazon for speed and trust.
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-semibold text-slate-900">
                B2B partnerships
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Bulk supply, sourcing, and long-term distribution.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <Carousel
            slides={[
              {
                eyebrow: "Featured",
                title: "Amazon-ready products",
                subtitle:
                  "Professional catalog presentation and customer-first quality standards.",
                imageSrc: "/placeholder-product.svg",
              },
              {
                eyebrow: "Reach",
                title: "Worldwide marketplaces",
                subtitle:
                  "Built for international buyers, reviews, and reliable fulfillment.",
                imageSrc: "/placeholder-export.svg",
              },
              {
                eyebrow: "Sourcing",
                title: "Quality, compliance, consistency",
                subtitle:
                  "Supplier vetting, packaging control, and export-focused documentation.",
                imageSrc: "/placeholder-sourcing.svg",
              },
            ]}
          />
        </div>
      </section>

      <section className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 lg:grid-cols-3">
        <div className="space-y-2 lg:col-span-1">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            About Bysha Internationals
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
