import { IProduct } from "src/shared/types/product";
import { create } from "zustand";

interface CartItem extends IProduct {
  qty: number;
}

interface CartState {
  items: CartItem[];

  add(item: IProduct, qty?: number): void;

  remove(id: number): void;

  clear(): void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (product, qty = 1) =>
    set((s) => {
      const idx = s.items.findIndex((i) => i.id === product.id);
      if (idx > -1) {
        s.items[idx].qty += qty;
        return { items: [...s.items] };
      }
      return { items: [...s.items, { ...product, qty }] };
    }),
  remove: (id: number) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] }),
}));
