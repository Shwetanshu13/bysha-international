export const metadata = {
    title: "Contact / Inquiry",
    description:
        "Send a business inquiry to Bysha Internationals for B2C or B2B requests. Form UI only; no checkout or payments on this website.",
};

export default function ContactPage() {
    return (
        <div className="space-y-10">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    Contact / Inquiry
                </h1>
                <p className="max-w-3xl text-sm leading-6 text-slate-600">
                    Share your requirements and we’ll respond with the appropriate next
                    steps. For B2C purchases, please use Amazon. This website does not
                    process payments.
                </p>
            </header>

            <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <form
                    className="space-y-5 rounded-2xl border border-slate-200 bg-white p-7"
                    action="#"
                    method="post"
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900" htmlFor="name">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                required
                                autoComplete="name"
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-emerald-600/20 focus:ring-4"
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900" htmlFor="company">
                                Company
                            </label>
                            <input
                                id="company"
                                name="company"
                                required
                                autoComplete="organization"
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-emerald-600/20 focus:ring-4"
                                placeholder="Company / Organization"
                            />
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-emerald-600/20 focus:ring-4"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-900" htmlFor="type">
                                Inquiry type
                            </label>
                            <select
                                id="type"
                                name="type"
                                required
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-emerald-600/20 focus:ring-4"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select one
                                </option>
                                <option value="b2c">B2C (Amazon product question)</option>
                                <option value="b2b">B2B (bulk orders / partnership)</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none ring-emerald-600/20 focus:ring-4"
                            placeholder="Tell us what you need: target market, volumes, timeline, product specifications, packaging requirements, and any compliance notes."
                        />
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                        This form is UI-only (no backend configured). If you’d like, we can
                        connect it to email delivery or a CRM in the next step.
                    </div>

                    <button
                        type="submit"
                        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                        Send Inquiry
                    </button>
                </form>

                <aside className="space-y-5 rounded-2xl border border-slate-200 bg-white p-7">
                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-900">
                            Faster B2B response
                        </div>
                        <p className="text-sm leading-6 text-slate-600">
                            For bulk orders, include your expected monthly volume, target
                            market, preferred packaging, and your required delivery timeline.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-900">
                            B2C purchases
                        </div>
                        <p className="text-sm leading-6 text-slate-600">
                            All B2C purchases are completed via Amazon. Use the Amazon listing
                            for the most up-to-date pricing, shipping, and availability.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-900">
                            Typical inquiry topics
                        </div>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                            <li>Bulk pricing and MOQ</li>
                            <li>Private label and packaging options</li>
                            <li>Product specifications and documentation</li>
                            <li>Partnership and distribution planning</li>
                        </ul>
                    </div>
                </aside>
            </section>
        </div>
    );
}
