import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Portfolio } from "@/components/portfolio/Portfolio";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Не найден #root");

createRoot(root).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
