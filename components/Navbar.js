import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/b2c-products", label: "B2C Products" },
    { href: "/b2b-products", label: "B2B Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-emerald-200/70">
                        <Image
                            src="/logo.jpeg"
                            alt="Bysha Internationals logo"
                            fill
                            sizes="36px"
                            className="object-contain p-1"
                            priority
                        />
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
                            className="rounded-md px-2 py-1 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://www.amazon.in/s?k=Bysha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-slate-900 to-emerald-800 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:from-slate-900 hover:to-emerald-700"
                    >
                        Amazon
                    </a>
                </nav>
            </div>
        </header>
    );
}
