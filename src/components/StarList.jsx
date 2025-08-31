import { useState } from "react";
import { letters } from "../data/letters.js";
import Letter from "../components/Letter.jsx";

export default function MailClient() {
    const [selectedIds, setSelectedIds] = useState({
        0: false,
        1: true,
        2: true,
    });

    const selectedCount = Object.values(selectedIds).filter(
        (value) => value
    ).length;

    function handleToggle(toggledId) {
        const newObj = { ...selectedIds };
        newObj[toggledId] = !newObj[toggledId];
        setSelectedIds(newObj);
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map((letter) => {
                    return (
                        <Letter
                            key={letter.id}
                            letter={letter}
                            isSelected={selectedIds[letter.id]}
                            onToggle={handleToggle}
                        />
                    );
                })}
                <hr />
                <p>
                    <b>You selected {selectedCount} letters</b>
                </p>
            </ul>
        </>
    );
}
