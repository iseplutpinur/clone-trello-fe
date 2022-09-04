import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Board from '../../components/Board';
import './list.css';
import AddList from '../../components/AddList';
import { Card } from '../../components/Card';
import { getTodos } from '../../api/todos';

export default function HomePage() {
  const [isToggleList, setIsToggleList] = useState(false);
  const [Todos, setTodos] = useState([]);

  const getTodosAPI = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodosAPI();
  }, []);


  return (
    <>
      <Header>
        MERN Clone Trello
      </Header>
      <Board>
        <Card todos={Todos} getTodosAPI={getTodosAPI} />
        <div className='add-list'>
          {isToggleList ? <AddList
            handleCancel={() => { setIsToggleList(false) }}
            getTodosAPI={() => getTodosAPI()} /> :
            <div className='add-list-button'
              onClick={() => { setIsToggleList(true) }}>
              <ion-icon name="add-outline"></ion-icon> Add a list
            </div>
          }
        </div>
      </Board>
    </>
  )
};
