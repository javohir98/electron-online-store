// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  printReceipt: (html: string, deviceName?: string) =>
    ipcRenderer.invoke("cart:print", { html, deviceName }),
  getPrinters: () => ipcRenderer.invoke("cart:getPrinters"),
});
