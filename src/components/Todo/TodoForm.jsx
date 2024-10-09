import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useTodo } from '../Contexts/TodoContext';
import Button from "../../components/Utilities/Buttons/Button";

const TodoFormField = () => {

    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
      e.preventDefault();
      if(!todo) return;
      addTodo({todo, completed: false, dueDate: ""});
      setTodo("");
    }

  return (
    <div className='m-4 relative'>
        <TextField fullWidth label="Todos" id="fullWidth" value={todo} onChange={(e) => setTodo(e.target.value)}
        sx={{
            '& .MuiOutlinedInput-root': {
                color: '#7871fc',
                fontWeight: '600',
                '& fieldset': {
                            borderColor: '#7871fc',
                        },
                        '&:hover fieldset': {
                            borderColor: '#7871fc',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#7871fc',
                        },
            },
            '& .MuiInputLabel-root': {
                color: '#7871fc',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: '#7871fc',
            },
        }}/>
        <div className='absolute right-0 top-0'>
          <Button TodoFieldButton={true} onClick={add}>
            Add
          </Button>
        </div>
    </div>
  )
}

export default TodoFormField