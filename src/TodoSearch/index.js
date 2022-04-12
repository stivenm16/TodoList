import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';


function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const [] = React.useState('');
    
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
  
    return (
      <input
        className="TodoSearch"
        placeholder="¿Qué estas buscando?"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    );
  }

export { TodoSearch };