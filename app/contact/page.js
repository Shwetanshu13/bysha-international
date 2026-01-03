export const metadata = {
    title: "Contact",
    description:
        "Contact Bysha Internationals via email or WhatsApp.",
};

export default function ContactPage() {
    const whatsappNumber = "917004423373";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="space-y-10">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    Contact Us
                </h1>
                <p className="max-w-3xl text-sm leading-6 text-slate-600">
                    Reach out to us anytime — we’ll get back to you as soon as possible.
                </p>
            </header>

            <section className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-900">Email</div>
                        <p className="text-sm leading-6 text-slate-600">
                            Contact us at:
                        </p>
                        <div className="space-y-1 text-sm text-slate-600">
                            <a
                                className="font-medium text-emerald-700 hover:underline"
                                href="mailto:info@byshainternational.com"
                            >
                                info@byshainternational.com
                            </a>
                            <br />
                            <a
                                className="font-medium text-emerald-700 hover:underline"
                                href="mailto:sales@byshainternational.com"
                            >
                                sales@byshainternational.com
                            </a>
                        </div>
                    </div>

                    <div className="pt-2">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                            aria-label="Start a WhatsApp chat with +91 70044 23373"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
