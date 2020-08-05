import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import nameList from "./Components/Counter";

function NameList() {
  const names = [
    "Neeta",
    "Elisha",
    "Kirtika",
    "Srijana",
    "Bishika",
    "Kirtee",
    "Trija",
    "Rachana",
    "Anisha",
  ];

  return (
    <div className="main">
      {names.map((name, index) => {
        return <Counter key={name.concat(index)} name={name} />;
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <Counter name={"eee"} /> */}
      <NameList />
    </div>
  );
}

export default App;
