import Image from "next/image";

export default function ProductCard({
    imageSrc,
    name,
    description,
    amazonHref,
}) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500" />
            <div className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-emerald-50 p-4">
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex flex-1 flex-col justify-center">
                    <div className="text-sm font-semibold text-slate-900">{name}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    <div className="mt-3 text-xs text-slate-500">
                        B2C purchases are completed on Amazon.
                    </div>
                </div>

                <a
                    href={amazonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:from-emerald-700 hover:to-teal-700"
                >
                    Buy on Amazon
                </a>
            </div>
        </div>
    );
}
