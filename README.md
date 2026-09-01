# Clock Screensaver App

A lightweight, minimal clock application for macOS, designed to display a simple 24-hour digital clock with seconds.

## ✨ Features

- 24-hour time format
- Displays hours, minutes, and seconds
- Minimal, distraction-free interface
- Adwaita Sans font
- Smooth visual updates
- Mouse cursor hidden while the clock is active
- Designed with low power usage in mind
- Built with Electron, Vite, and TypeScript

## 🖥️ Requirements

- macOS
- Node.js
- npm

## 🚀 Development

Clone the repository:

```bash
git clone https://github.com/PSANDILYA1440/Clock-Screensaver-app.git
cd Clock-Screensaver-app
```

Install dependencies:

```bash
npm install
```

Start the development version:

```bash
npm run dev
```

## 🔨 Build

Build the application with:

```bash
npm run build
```

## ⚠️ Screensaver Note

This application is designed to function as a clock display rather than replacing the macOS system screensaver.

For the best experience, users may need to disable or adjust their macOS screensaver settings while using the application.

## 🔤 Font

The application uses **Adwaita Sans**.

The applicable font license and notices are included in the `LICENSES/` directory.

## 📁 Project Structure

```text
Clock-Screensaver-app/
├── electron/          # Electron main process
├── src/               # Clock interface and styles
│   └── fonts/         # Application fonts
├── LICENSES/          # Third-party licenses and notices
├── .gitignore
├── Easter-Egg.md
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Technology

- Electron
- Vite
- TypeScript
- HTML
- CSS
- JavaScript

## 📄 License

See the repository license and the files in `LICENSES/` for applicable licensing information.

## 👤 Author

Made by **Prakhhar Sandilya (PSANDILYA1440) ** with assistance from **ChatGPT**.

GitHub:  
https://github.com/PSANDILYA1440
```

One small recommendation: because the project is **not actually a macOS `.saver` screensaver**, calling it a **“clock application for macOS”** in the README is technically safer than claiming it is a native screensaver. The current wording makes that distinction clear.
