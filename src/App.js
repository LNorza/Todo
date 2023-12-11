import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
//import "./App.css";

const all = [
    {text: "Hi, i'm ", completed: false},
    {text: "Test ", completed: false},
    {text: "The first app with ", completed: true},
    {text: "React", completed: false},
];

function App() {
    return (
        <React.Fragment>
            {<TodoCounter />}

            <TodoSearch />

            <TodoList>
                {all.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
