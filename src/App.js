import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>Do not click me!</Button>
      <Button>Click another button</Button>
      <Button>click</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
