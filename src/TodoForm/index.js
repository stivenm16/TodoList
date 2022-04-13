import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
import { MdAddBox } from 'react-icons/md'
import { MdOutlineCancelPresentation } from 'react-icons/md'

function TodoForm() {
    
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const  onChange = (event) => {
      setNewTodoValue(event.target.value)
    }
    const  onCancel = () => {
      setOpenModal(false)
    }
 
    const  onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    }
 
    return (
        <form onSubmit={onSubmit}>
            <label>👻👻👻</label>
            <textarea
                placeholder="¿Qué tienes pendiente por hacer?"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="small-button">
                <MdOutlineCancelPresentation
                size={25}
                className="buttonS"
                type="button"
                onClick={onCancel}
                />
                <MdAddBox size={25}
                className="buttonS"
                type="submit"
                onClick={onSubmit}
                />
                
            </div>
        </form>
    )
}

export { TodoForm };