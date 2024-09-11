import { headerComponent } from "./header.ts";
import { productsListComponent } from "./products.ts";
import './index.css'

document.addEventListener("DOMContentLoaded", () => {
  const headerContainerEl = document.getElementById("header");
  const productsContainerEl = document.getElementById("products");
  headerContainerEl.appendChild(headerComponent());
  productsContainerEl.appendChild(productsListComponent());
});