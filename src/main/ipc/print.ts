import { ipcMain, BrowserWindow } from "electron";

ipcMain.handle("cart:print", async (_e, { html, deviceName }) => {
  const win = new BrowserWindow({
    show: false,
    webPreferences: { sandbox: false },
  });

  await win.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
  await win.webContents.executeJavaScript("document.fonts?.ready");

  await new Promise<void>((res, rej) =>
    win.webContents.print(
      { silent: true, deviceName, printBackground: true },
      (ok, err) => (ok ? res() : rej(new Error(err)))
    )
  ).catch((err) => console.error("Print failed:", err.message));

  win.close();
});

ipcMain.handle("cart:getPrinters", async () => {
  const bw = BrowserWindow.getAllWindows()[0];
  if (!bw) return [];

  if (typeof (bw.webContents as any).getPrintersAsync === "function") {
    return (bw.webContents as any).getPrintersAsync();
  }

  // @ts-expect-error tip yo‘q
  return bw.webContents.getPrinters();
});
