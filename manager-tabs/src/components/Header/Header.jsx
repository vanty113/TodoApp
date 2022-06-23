import React from 'react';
import '../Header/header.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';

export function Header(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  }

  const searchTermSubmit = () => {
    const formValues = { searchTerm };
    props.onSubmit(formValues); 
  }

  return (<div className='header'>
      <Link to="/new-task">
        <button className='new-task-btn'>Create New Task</button>
      </Link>
      <div className='search-input'>
        <input type="text" placeholder='Type something to search' value={searchTerm} onChange={handleSearchTermChange} />
        <button onClick={searchTermSubmit}>Search</button>
      </div>
  </div>)
};

