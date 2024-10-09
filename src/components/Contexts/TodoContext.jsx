import { createContext, useContext } from 'react'
import moment from 'moment'

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todoMsg: "Todo msg",
        completed: false,
        dateAdded: moment().format("MMMM Do YYYY"),
        dueDate: "",
    }],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
    setDueDate: (id, dueDate) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;