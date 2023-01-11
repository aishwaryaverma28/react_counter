import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./counter";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <h1>Counter</h1>
        <Counter />
    </>
);