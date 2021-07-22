import React from "react";
import './Keyboard.css';
import Key from "./Key";

function Keyboard() {
    return (
        <div className="calculator__keys">
            <Key modifier="operator">+</Key>
            <Key modifier="operator">-</Key>
            <Key modifier="operator">&times;</Key>
            <Key modifier="operator">&#247;</Key>
            <Key>7</Key>
            <Key>8</Key>
            <Key>9</Key>
            <Key>4</Key>
            <Key>5</Key>
            <Key>6</Key>
            <Key>1</Key>
            <Key>2</Key>
            <Key>3</Key>
            <Key>0</Key>
            <Key>.</Key>
            <Key>AC</Key>
            <Key modifier="enter">=</Key>
        </div>
    );
}

export default Keyboard;

