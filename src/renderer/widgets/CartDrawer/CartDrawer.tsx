import { X, Trash } from "lucide-react";
import { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";
import { useCartStore } from "../../../renderer/entities/cart/model/useCartStore";
import { PrintButton } from "../../../renderer/features/print-receipt/ui/PrintButton";

interface Props {
  onPrint: () => void;
  onOrder: () => void;
}

export const CartDrawer = ({ onPrint, onOrder }: Props) => {
  const { items, remove, isOpen: open, close: onClose } = useCartStore();

  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const nf = new Intl.NumberFormat("ru-RU");

  return createPortal(
    <Fragment>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-full transform bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-gray-500 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-sm text-gray-500">Empty</p>
          ) : (
            items.map((p) => (
              <div
                key={p.id}
                className="relative flex gap-3 rounded-lg border p-3 pr-10"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-14 w-14 shrink-0 rounded object-contain"
                />

                <div className="flex flex-1 flex-col">
                  <h3 className="line-clamp-2 text-sm font-medium">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500">quantity: {p.qty}</p>
                  <span className="mt-auto text-sm font-semibold">
                    {nf.format(p.price * p.qty)} USD
                  </span>
                </div>

                <button
                  onClick={() => remove(p.id)}
                  className="absolute right-2 top-2 rounded p-1 text-gray-500 hover:text-red-600"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="sticky bottom-0 border-t bg-white p-4 space-y-3">
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Total:</span>
            <span>{nf.format(total)} USD</span>
          </div>

          <PrintButton />

          <button
            disabled
            onClick={onOrder}
            className="w-full rounded-lg border-2 border-blue-600 py-2 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white disabled:opacity-40"
          >
            Order
          </button>
        </div>
      </aside>
    </Fragment>,
    document.body
  );
};
