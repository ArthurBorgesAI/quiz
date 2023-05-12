import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Pages/Home/Home";
import { QuizProvider } from "./contexts/quizContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Home />
    </QuizProvider>
  </React.StrictMode>
);
