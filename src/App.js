import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import Watch from "./components/Watch/Watch";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        ></Route>
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
