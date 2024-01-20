// my-app/src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TopPage from "./pages/TopPage"; // または App など、適切なコンポーネントを指定

ReactDOM.render(
  <React.StrictMode>
    <TopPage />
  </React.StrictMode>,
  document.getElementById("root")
);
