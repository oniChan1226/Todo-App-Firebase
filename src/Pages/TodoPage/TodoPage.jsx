import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../../components/Contexts/UserAuthContext'
import TodoForm from '../../components/Todo/TodoForm'
import { TodoProvider } from '../../components/Contexts/TodoContext';
import moment from 'moment'
import TodoItem from '../../components/Todo/TodoItem';
import Button from '../../components/Utilities/Buttons/Button';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';

const TodoPage = () => {

  const { user, fetchUser, updateDocument } = useUserAuth();
  const [username, setusername] = useState("");
  const [todos, setTodos] = useState([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const addTodo = (todo) => {
      setHasInteracted(true);
    setTodos((prevTodos) => [...prevTodos, {...todo, id: Date.now(), dateAdded: moment().format("MMMM Do YYYY")}])
  }

  const updateTodo = (todo, id) => {
      setHasInteracted(true);
    setTodos((prevTodos) => prevTodos.map(prevTodo => (prevTodo.id === id ? {...prevTodo, todoMsg: todo, dateAdded: moment().format("MMMM Do YYYY")} : prevTodo)));
  }

  const deleteTodo = (id) => {
      setHasInteracted(true);
    setTodos((prevTodos) => prevTodos.filter(prevTodo => prevTodo.id !== id));
  }

  const toggleCompleted = (id) => {
      setHasInteracted(true);
    setTodos((prevTodos) => prevTodos.map(prevTodo => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
  }

  const setDueDate = (id, dueDate) => {
      setHasInteracted(true);
    setTodos((prevTodos) => prevTodos.map(prevTodo => prevTodo.id === id ? {...prevTodo, dueDate: dueDate} : prevTodo));
  }

  const saveTodos = async () => {
    try {
      setIsSaving(true);
      await updateDocument(todos);
      toast.success("Todos Saved!");
    } catch (error) {
      console.error(`Error in TodoPage:: saveTodos:: ${error}`);
    }
    finally {
      setIsSaving(false);
    }
    
  }

  useEffect(() => {
    const fecthUserData = async () => {
      try {
        const userData = await fetchUser(user.uid);
        setusername(userData.username);
        setTodos(userData.todosList)
      }
      catch(err) {
        console.log(err);
      }
    }  
    
    return () => fecthUserData();

  }, [user, fetchUser]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted, setDueDate }}>
      <div className='dark:bg-bgDark'>
        <div className='w-[90%] mx-auto md:w-[80%] py-12 md:py-16 '>
          <h1 className='text-2xl md:text-4xl xl:text-6xl mb-6 font-semibold text-purpleMain text-center capitalize'>welcome {username}!</h1>
          <div className='flex items-center justify-center my-2'>
            <Button
            onClick={saveTodos}
            disabled={!hasInteracted}
            >
              {isSaving ? <PulseLoader color="#7871fc" size={8} /> : "Save Todos"}
            </Button>
          </div>
          <TodoForm />
          <div className='space-y-3 mt-5 md:mt-12'>
            {
              todos.map((todo) => (
                <div key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
            
        </div>
      </div>
    </TodoProvider>
  )
}

export default TodoPage