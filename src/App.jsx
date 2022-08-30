import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicLayout from "./Components/PublicLayout/PublicLayout";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
