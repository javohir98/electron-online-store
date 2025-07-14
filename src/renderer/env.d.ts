export {};

declare global {
  interface Window {
    api: {
      printReceipt(html: string, deviceName?: string): Promise<void>;
      getPrinters(): Promise<
        {
          displayName(receiptHtml: string, displayName: any): unknown;
          name: string;
          description: string;
          isDefault: boolean;
        }[]
      >;
    };
  }
}
