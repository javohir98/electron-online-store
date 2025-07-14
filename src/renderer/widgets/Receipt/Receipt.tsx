import React from "react";
import { CartItem } from "../../entities/cart/model/useCartStore";

interface Props {
  items: CartItem[];
  total: number;
}

export const Receipt: React.FC<Props> = ({ items, total }) => {
  const nf = new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 0 });
  const dateStr = new Date().toLocaleString("ru-RU");

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <style>{`
          @page { size: 72mm auto; margin: 0 }
          *      { box-sizing: border-box }
          body   { font-family: "Courier New", monospace; font-size: 10pt; margin: 0; padding: 4mm }
          h1     { font-size: 12pt; font-weight: 700; text-align: center; margin: 0 0 2mm }
          p      { margin: 0 }
          table  { width: 100%; border-collapse: collapse; margin: 2mm 0 }
          tr     { line-height: 1.25 }
          .sep   { margin: 1.5mm 0; border-bottom: 1px dashed #000 }
          .total { font-weight: 700; font-size: 11pt }
        `}</style>
      </head>
      <body>
        <h1>Receipt&nbsp;# {Date.now().toString().slice(-6)}</h1>
        <p style={{ textAlign: "center", marginBottom: "2mm" }}>{dateStr}</p>

        <div className="sep" />

        <table>
          <tbody>
            {items.map((it) => (
              <tr key={it.id}>
                <td style={{ width: "50%", wordBreak: "break-word" }}>
                  {it.title}
                </td>
                <td style={{ width: "15%", textAlign: "center" }}>{it.qty}×</td>
                <td style={{ width: "35%", textAlign: "right" }}>
                  {nf.format(it.price * it.qty)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sep" />

        <table>
          <tbody>
            <tr className="total">
              <td style={{ width: "65%" }}>Total</td>
              <td style={{ width: "35%", textAlign: "right" }}>
                {nf.format(total)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="sep" />

        <p style={{ textAlign: "center", marginTop: "2mm" }}>
          Thank you for your purchase!
        </p>
      </body>
    </html>
  );
};
