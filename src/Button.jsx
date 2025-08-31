import { useState } from "react";

export default function ButtonComponent() {
    const [number, numberSet] = useState(0);

    const handleButtonClick = () => {
        numberSet((prevNumber) => prevNumber + 1);
        numberSet((prevNumber) => prevNumber + 1);
    };

    console.log(number);
    return <button onClick={handleButtonClick}></button>;
}
