/**
 * Wuhdul
 * Designed and built by Harshith Gupta (@progharshith)
 */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log(
  "%cWuhdul %c— built by Harshith Gupta (@progharshith)",
  "font-weight:bold;font-size:14px;color:#6aaa64;",
  "color:#888;font-size:12px;"
);

createRoot(document.getElementById("root")!).render(<App />);