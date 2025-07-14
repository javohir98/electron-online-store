import { renderToString } from "react-dom/server";
import { Receipt } from "../../../../renderer/widgets/Receipt/Receipt";
import { useCartStore } from "../../../../renderer/entities/cart/model/useCartStore";

export const PrintButton = () => {
  const { items, clear } = useCartStore();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const handlePrint = async () => {
    const receiptHtml = renderToString(<Receipt items={items} total={total} />);

    const printers = await window.api.getPrinters();

    const deviceName = printers[0]?.name;

    await window.api.printReceipt(receiptHtml, deviceName);

    clear();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      disabled={!items.length}
      className="w-full rounded-lg border-2 border-gray-900 py-2 font-semibold hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      Print receipt
    </button>
  );
};
