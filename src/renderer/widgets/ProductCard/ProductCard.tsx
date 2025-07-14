import type { IProduct } from "src/shared/types/product";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../../../renderer/entities/cart/model/useCartStore";

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const nf = new Intl.NumberFormat("ru-RU");

  const { add } = useCartStore();

  return (
    <article className="group relative flex w-full max-w-xs flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-contain transition-transform group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 line-clamp-2 h-10 text-sm font-medium">
        {product.title}
      </h3>

      <div className="mt-2 flex items-end gap-2">
        <span className={`text-lg font-bold text-gray-900`}>
          {nf.format(product.price)} USD
        </span>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-900 transition hover:bg-gray-900 hover:text-white"
          onClick={() => add(product)}
        >
          <ShoppingCart className="h-5 w-5" />
        </button>

        <button className="flex-1 rounded-xl border-2 border-rose-600 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-600 hover:text-white">
          В рассрочку
        </button>
      </div>
    </article>
  );
};
