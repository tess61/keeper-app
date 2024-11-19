import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById('root')); // Create a root
root.render(<App />); // Render the App component



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 