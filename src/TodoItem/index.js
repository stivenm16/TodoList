import React from "react";
import './TodoItem.css';
import { BsCheckLg } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

function TodoItem(props) {
    
    return (
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
        <BsCheckLg/>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
        <MdDelete/>
        </span>
      </li>
    );
  }
  
export {TodoItem};