// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { CounterProvider } from "./Context/Counter";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <CounterProvider>
//       <App />
//     </CounterProvider>
//   </StrictMode>
// );

// For second Add to cart context Api

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
