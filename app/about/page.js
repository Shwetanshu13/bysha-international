import Link from "next/link";

export const metadata = {
    title: "About Us",
    description:
        "Learn about Bysha Internationals: our mission, quality approach, and long-term partnership focus across global trade.",
};

export default function AboutPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    About Bysha Internationals
                </h1>
                <p className="max-w-3xl text-sm leading-6 text-slate-600">
                    We are a brand-focused trading and sourcing company working across B2C
                    and B2B models. Our goal is simple: ship products that meet
                    marketplace expectations and distributor standards — consistently.
                </p>
            </header>

            <section className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-8 lg:grid-cols-3">
                <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                        Mission
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                        Quality that travels well
                    </h2>
                </div>
                <div className="space-y-4 lg:col-span-2">
                    <p className="text-sm leading-6 text-slate-600">
                        International trade depends on trust: clear specifications,
                        consistent batches, and reliable packaging. We build our catalogs
                        and partnerships around measurable quality and repeatable processes.
                    </p>
                    <p className="text-sm leading-6 text-slate-600">
                        For B2C, we use Amazon marketplaces for customer confidence,
                        fulfillment reliability, and a world-class purchasing experience.
                        For B2B, we support bulk supply and long-term distribution
                        partnerships for selected categories.
                    </p>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <div className="text-sm font-semibold text-slate-900">
                        Quality control
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        We prioritize clear specs, packaging checks, and catalog consistency
                        so products look and perform the same across markets and reorder
                        cycles.
                    </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <div className="text-sm font-semibold text-slate-900">
                        Global trade readiness
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        We design product communication for international buyers — from
                        labeling clarity to export-focused documentation support.
                    </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <div className="text-sm font-semibold text-slate-900">
                        Long-term partnerships
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        We prefer repeatable supply relationships: stable volumes,
                        predictable timelines, and continuous improvement through feedback.
                    </p>
                </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                            Work with us
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                            If you are exploring bulk supply, distribution, or a sourcing
                            partnership, we would be happy to understand your requirements.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                        <Link
                            href="/b2b-products"
                            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                        >
                            Explore B2B
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
