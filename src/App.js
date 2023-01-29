import "./styles/App.scss";
import React from "react";
import ConverterTool from "./components/ConverterTool";

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="title">Unit Conversion Helper</div>
      </div>
      <div className="body">
        <ConverterTool />
      </div>
    </div>
  );
}

export default App;
