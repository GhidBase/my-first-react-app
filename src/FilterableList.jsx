import { useState } from "react";
import { foods } from "./data/filterItems";

export default function FilterableList() {
    function filterItems(items, query) {
        query = query.toLowerCase();
        return items.filter((item) =>
            item.name
                .split(" ")
                .some((word) => word.toLowerCase().startsWith(query))
        );
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    const [query, setQuery] = useState("");
    return (
        <>
            <SearchBar handleChange={handleChange} query={query} />
            <hr />
            <List items={filterItems(foods, query)} />
        </>
    );
}

function SearchBar({ handleChange, query }) {
    return (
        <label>
            Search: <input value={query} onChange={handleChange} />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map((food) => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
