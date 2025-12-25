import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:px-8 md:grid-cols-3">
                <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900">
                        Bysha Internationals
                    </div>
                    <p className="text-sm leading-6 text-slate-600">
                        Brand-focused B2C catalog presence on Amazon marketplaces and
                        export-ready B2B bulk supply for selected product categories.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-900">Quick Links</div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="text-slate-600 hover:text-slate-900" href="/b2c-products">
                            B2C Products
                        </Link>
                        <Link className="text-slate-600 hover:text-slate-900" href="/b2b-products">
                            B2B Products
                        </Link>
                        <Link className="text-slate-600 hover:text-slate-900" href="/about">
                            About Us
                        </Link>
                        <Link className="text-slate-600 hover:text-slate-900" href="/contact">
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
                            className="hover:text-slate-700"
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
