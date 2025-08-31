import { useState } from "react";

export default function InputTest() {
    const [inputValue, inputValueSet] = useState("");

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(event) => inputValueSet(event.target.value)}
        ></input>
    );
}
