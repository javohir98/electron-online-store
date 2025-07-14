import { useParams } from "react-router-dom";
import { products } from "../entities/product/const/products";
import { ProductCard } from "../widgets/ProductCard/ProductCard";
import { CartDrawer } from "../widgets/CartDrawer/CartDrawer";

export function Home() {
  const { name } = useParams<{ name: string }>();

  const filtered = name
    ? products.filter((p) => p.category === name)
    : products;

  return (
    <main className="px-6 py-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <CartDrawer onPrint={() => console.log("print")} onOrder={() => {}} />
    </main>
  );
}
