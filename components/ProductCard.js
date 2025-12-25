import Image from "next/image";

export default function ProductCard({
    imageSrc,
    name,
    description,
    amazonHref,
}) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-slate-50 p-4">
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="space-y-3 p-5">
                <div>
                    <div className="text-sm font-semibold text-slate-900">{name}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>

                <a
                    href={amazonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                    Buy on Amazon
                </a>

                <div className="text-xs text-slate-500">
                    B2C purchases are completed on Amazon.
                </div>
            </div>
        </div>
    );
}
