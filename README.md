# Nextgeen Online Store

An Electron-based desktop application for managing an online store, built with React, Vite, and TailwindCSS.

## Features

- Product catalog with categories and ratings
- Cart management and receipt printing
- Printer selection and receipt formatting
- Modern UI with TailwindCSS
- Cross-platform packaging (Windows, macOS, Linux)

## Project Structure

```
.
├── src/
│   ├── main/           # Electron main process code
│   ├── preload.ts      # Preload script for secure IPC
│   ├── renderer/       # React renderer process
│   ├── renderer.ts     # Entry for renderer process
│   ├── index.css       # Global styles (Tailwind)
│   └── shared/         # Shared code
├── public/             # Static assets
├── build/              # Compiled output
├── forge.config.ts     # Electron Forge configuration
├── vite.*.config.ts    # Vite configs for main, preload, renderer
├── package.json        # Project metadata and scripts
└── index.html          # App HTML entry
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Install Dependencies

```sh
pnpm install
```

### Development

Start the app in development mode:

```sh
pnpm run dev
```

### Build

Build the app for production:

```sh
pnpm run build
```

### Package

Package the app for distribution:

```sh
pnpm run make
```

## Printing Receipts

- Receipts are rendered as HTML using React ([`Receipt`](src/renderer/widgets/Receipt/Receipt.tsx)).
- Printing is handled via IPC between renderer and main process ([`printReceipt`](src/preload.ts), [`PrintButton`](src/renderer/features/print-receipt/ui/PrintButton.tsx)).
- Printer selection is available via [`getPrinters`](src/preload.ts).

## Configuration

- TailwindCSS: [tailwind.config.js](tailwind.config.js)
- PostCSS: [postcss.config.js](postcss.config.js)
- Electron Forge: [forge.config.ts](forge.config.ts)
- Vite: [vite.main.config.ts](vite.main.config.ts), [vite.preload.config.ts](vite.preload.config.ts), [vite.renderer.config.ts](vite.renderer.config.ts)

## License

MIT

---

**Main entry points:**
- [src/main.ts](src/main.ts)
- [src/preload.ts](src/preload.ts)
-
