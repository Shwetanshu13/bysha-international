export const metadata = {
    title: "Contact",
    description:
        "Contact Bysha International via email or WhatsApp for product, bulk order, and partnership inquiries.",
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
            </header>

            <section className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-sm">
                <div className="space-y-4">
                    <p className="max-w-3xl text-sm leading-6 text-slate-600">
                        Thank you for reaching out to Bysha International — we’re happy
                        to hear from you. Whether you have a quick question or a detailed
                        requirement, just share what you need (quantity, destination,
                        and timeline) and we’ll get back to you with the right next steps.
                    </p>

                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-slate-900">Email</div>
                        <p className="text-sm leading-6 text-slate-600">
                            Contact us at either of the emails below:
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
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                            aria-label="Start a WhatsApp chat with +91 70044 23373"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="currentColor"
                            >
                                <path d="M12 2a9.9 9.9 0 0 0-9.88 11.5L1 22.99l9.65-1.09A9.99 9.99 0 1 0 12 2Zm0 18a7.93 7.93 0 0 1-4.03-1.1l-.29-.17-2.86.32.31-2.78-.19-.3A7.93 7.93 0 1 1 12 20Zm4.62-5.72c-.25-.13-1.48-.73-1.71-.81-.23-.09-.39-.13-.55.13-.16.25-.63.81-.77.98-.14.16-.28.18-.53.05-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.71-.14-.25-.01-.39.11-.51.11-.11.25-.28.38-.42.13-.14.16-.25.25-.42.08-.16.04-.3-.02-.43-.06-.13-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.13.16 1.7 2.6 4.12 3.64.57.25 1.01.4 1.36.51.57.18 1.1.16 1.51.1.46-.07 1.48-.6 1.69-1.18.21-.57.21-1.06.14-1.18-.06-.12-.23-.2-.48-.33Z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
