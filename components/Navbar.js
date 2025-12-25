import Link from "next/link";

const navLinks = [
    { href: "/b2c-products", label: "B2C Products" },
    { href: "/b2b-products", label: "B2B Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-sm font-semibold text-white">
                        BI
                    </span>
                    <div className="leading-tight">
                        <div className="text-sm font-semibold text-slate-900">
                            Bysha Internationals
                        </div>
                        <div className="text-xs text-slate-600">
                            Global Trade • B2C on Amazon • B2B Supply
                        </div>
                    </div>
                </Link>

                <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-slate-700 transition-colors hover:text-slate-900"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://www.amazon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                        Amazon
                    </a>
                </nav>
            </div>
        </header>
    );
}
