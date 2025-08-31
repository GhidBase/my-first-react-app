import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { MyNameIs } from "./my-name-is.jsx";
import Bio from "./Bio.jsx";
import TodoList from "./challenges/FixMistake.jsx";
import Animals from "./Animals.jsx";
import DrinkList from "./Conditional.jsx";
import People from "./challenges/ListsChallenge.jsx";
import RecipeList from "./challenges/ListTwo.jsx";
import Poem from "./challenges/Haiku.jsx";
import TestArea from "./practice/MessAround.jsx";
import Gallery from "./challenges/Gallery.jsx";
import Profile from "./challenges/Props.jsx";
import ButtonComponent from "./Button.jsx";
import InputTest from "./InputTest.jsx";
import MailClient from "./components/StarList.jsx";
import SyncedInputs from "./components/SyncedInputs.jsx";
import FilterableList from "./FilterableList.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FilterableList></FilterableList>
    </StrictMode>
);
