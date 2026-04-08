# 🟩 WuhDul
A modern, browser-based clone of the classic **Wordle** game
built with a clean UI, responsive design, and a fully client-side architecture.

---

## 🚀 Project Overview

This project is a recreation of the popular New York Times Wordle game. Players have **6 attempts** to guess a hidden **5-letter word**, receiving color-coded feedback after each guess:

* 🟩 **Green** —> Correct letter in the correct position
* 🟨 **Yellow** —> Correct letter in the wrong position
* ⬜ **Grey** —> Letter not in the word 

The game uses a curated dictionary consisting of **thousands of valid guessable words** and a smaller, refined list of **possible answer words** to ensure balanced and engaging gameplay.

Designed for smooth gameplay, accessibility, and a polished user experience, the app runs entirely in the browser with no backend dependencies.

---

## ✨ Features

* 🎯 Classic Wordle gameplay (6 attempts, 5-letter words)
* 🎨 Color-coded feedback system
* ⌨️ Fully interactive on-screen keyboard
* 🌗 Dark / Light mode toggle
* 📚 Large built-in word list (valid guesses + curated answers)
* ⚡ Fast and responsive UI
* 🧠 Client-side logic (no server required)
* 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Components-black)
![React Query](https://img.shields.io/badge/TanStack%20Query-Data%20Fetching-ff4154?logo=react-query)
![React Router](https://img.shields.io/badge/React%20Router-Routing-ca4245?logo=react-router)

* **React 18** — UI library
* **TypeScript** — Type safety
* **Vite** — Fast build tool
* **Tailwind CSS** — Utility-first styling
* **shadcn/ui** — Accessible UI components
* **TanStack React Query** — State/data management
* **react-router-dom** — Routing

---

## ⚙️ Getting Started

### 📌 Prerequisites

Make sure you have the following installed:

* **Node.js** (v16 or higher recommended)
* **npm** or **yarn**

---

### 📥 Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
```

---

## 🧪 Running Locally

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🖥️ Running a Local Production Build

To test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the optimized build locally so you can verify production behavior before deployment.

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the:

```
/dist
```

---

## 🌍 Deployment (GitHub Pages)

This project is deployed using **GitHub Pages**.

### Steps:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist/` folder to your `gh-pages` branch
   (or configure via `vite.config.ts` with `base` path)

3. Enable GitHub Pages in your repository settings

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve the project:

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

Please ensure your code follows the existing style and includes relevant documentation where needed.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 💡 Acknowledgements

Inspired by the original **Wordle** game by The New York Times.

---

Built with love, have fun
- Harshith :)