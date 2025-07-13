import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../../entities/cart/model/useCartStore";

const categories = [
  "Паста",
  "Looonger",
  "Комбо",
  "Пицца",
  "Закуски",
  "Десерты",
  "Бар",
  "Напитки",
  "Прочие",
];

export const TopMenu = () => {
  const { totalPrice, totalItems } = useCartStore((s) => ({
    totalPrice: s.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    totalItems: s.items.length,
  }));

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-8 shadow-sm">
      {/* Categories */}
      <nav className="flex flex-1 gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((name) => (
          <NavLink
            key={name}
            to={name === "Комбо" ? "/combo" : `/category/${name}`}
            className={({ isActive }) =>
              [
                "relative px-2 py-1 text-lg font-medium transition-colors",
                isActive
                  ? "text-black before:absolute before:inset-0 before:rounded-full before:bg-yellow-400 before:-z-10"
                  : "text-gray-800 hover:text-black",
              ].join(" ")
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Cart summary */}
      <NavLink
        to="/cart"
        className="ml-6 flex items-center gap-3 rounded-full bg-red-500 px-4 py-2 text-white"
      >
        <ShoppingCart className="h-5 w-5" />
        <div className="text-left leading-tight">
          <div className="text-sm font-semibold">
            {totalPrice.toLocaleString("ru-RU")} сум
          </div>
          <div className="text-xs text-red-200">{totalItems} товара</div>
        </div>
      </NavLink>
    </header>
  );
};
