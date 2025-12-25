import ProductCard from "../../components/ProductCard";
import { b2cProducts } from "../../lib/b2cProducts";

export const metadata = {
    title: "B2C Products",
    description:
        "Explore featured B2C products from Bysha Internationals. All purchases are completed and fulfilled via Amazon marketplaces.",
};

export default function B2CProductsPage() {
    return (
        <div className="space-y-10">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    B2C Products
                </h1>
                <p className="max-w-3xl text-sm leading-6 text-slate-600">
                    Browse a selection of our marketplace-ready catalog. For customer
                    convenience and reliable fulfillment, all B2C purchases are completed
                    via Amazon.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <span className="font-semibold">Note:</span> This website does not
                    process payments. “Buy on Amazon” links open the Amazon marketplace
                    for checkout and fulfillment.
                </div>
            </header>

            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {b2cProducts.slice(0, 16).map((product) => (
                    <ProductCard
                        key={product.id}
                        imageSrc={product.imageSrc}
                        name={product.name}
                        description={product.description}
                        amazonHref={product.amazonHref}
                    />
                ))}
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                            Want to discuss distribution or bulk supply?
                        </h2>
                        <p className="text-sm leading-6 text-slate-600">
                            If you are a wholesaler, importer, or retail partner, we can
                            support B2B bulk orders for selected products.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                        <a
                            href="https://www.amazon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                        >
                            Visit Amazon Storefront
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                        >
                            Contact for B2B
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
