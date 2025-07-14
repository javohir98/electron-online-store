import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../../entities/cart/model/useCartStore";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export const TopMenu = () => {
  const totalPrice = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.price * i.qty, 0)
  );
  const totalItems = useCartStore((s) => s.items.length);
  const openCart = useCartStore((s) => s.open);

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-8 shadow-sm">
      <nav className="flex flex-1 gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((name) => (
          <NavLink
            key={name}
            to={`/category/${name}`}
            className={({ isActive }) =>
              [
                "relative px-4 py-2 text-lg font-medium transition-colors",
                isActive
                  ? "text-black before:absolute before:inset-0 before:rounded-xl before:bg-yellow-400 before:-z-10"
                  : "text-gray-800 hover:text-black",
              ].join(" ")
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={openCart}
        aria-label="Open cart"
        className="ml-6 flex items-center gap-3 rounded-full bg-red-500 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <ShoppingCart className="h-5 w-5" />

        <div className="text-left leading-tight">
          <div className="text-sm font-semibold">
            {totalPrice.toLocaleString("ru-RU")} USD
          </div>
          <div className="text-xs text-red-200">{totalItems} items</div>
        </div>
      </button>
    </header>
  );
};
