import React from "react";
import './Key.css';


const Key: React.FunctionComponent<KeyProps> = (props) => {
    return (
        <button className={"calculator__key" + (props.modifier ? " calculator__key--" + props.modifier : "")}>
            {props.children}
        </button>
    );
}

interface KeyProps {
    modifier?: string;
    onClick?: () => void;
}

export default Key;