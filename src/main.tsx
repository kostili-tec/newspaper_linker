import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from "./styles/global";

const root = document.createElement("div")
root.className = "linker"
document.body.appendChild(root)

const rootDiv = ReactDOM.createRoot(root);

// ReactDOM.createRoot(document.getElementById('root')!).render(
rootDiv.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
