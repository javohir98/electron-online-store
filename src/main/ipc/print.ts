import {ipcMain, BrowserWindow} from 'electron';

ipcMain.handle('cart:print', async (_evt, html: string) => {
    const win = new BrowserWindow({show: false});
    await win.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
    await win.webContents.print({silent: false});
    win.close();
});
