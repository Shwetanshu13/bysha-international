import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-emerald-200/60 bg-gradient-to-b from-white to-slate-50">
            <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:px-8 md:grid-cols-3">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-emerald-200/70">
                            <Image
                                src="/logo.jpeg"
                                alt="Bysha Internationals logo"
                                fill
                                sizes="40px"
                                className="object-contain p-1"
                            />
                        </span>
                        <div className="text-sm font-semibold text-slate-900">
                            Bysha Internationals
                        </div>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">
                        Brand-focused B2C catalog presence on Amazon marketplaces and
                        export-ready B2B bulk supply for selected product categories.
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                        Export-ready • Partnership-first
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900">Quick Links</div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="text-slate-600 hover:text-emerald-700" href="/b2c-products">
                            B2C Products
                        </Link>
                        <Link className="text-slate-600 hover:text-emerald-700" href="/b2b-products">
                            B2B Products
                        </Link>
                        <Link className="text-slate-600 hover:text-emerald-700" href="/about">
                            About Us
                        </Link>
                        <Link className="text-slate-600 hover:text-emerald-700" href="/contact">
                            Contact / Inquiries
                        </Link>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900">Business Notes</div>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li>All B2C purchases are fulfilled via Amazon.</li>
                        <li>B2B support includes bulk orders and partnerships.</li>
                        <li>Quality control and sourcing consistency are prioritized.</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-200">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                    <div>
                        © {new Date().getFullYear()} Bysha Internationals. All rights reserved.
                    </div>
                    <div>
                        <a
                            className="hover:text-emerald-700"
                            href="https://www.amazon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Amazon Marketplace (external)
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
