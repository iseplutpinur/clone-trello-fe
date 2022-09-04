import React, { useState } from 'react';
import Header from '../../components/Header';
import Board from '../../components/Board';
import './list.css';
import AddList from '../../components/AddList';
import { Card } from '../../components/Card';

export default function HomePage() {
  const [isToggleList, setIsToggleList] = useState(false);
  return (
    <>
      <Header>
        MERN Clone Trello
      </Header>
      <Board>
        <Card />
        <div className='add-list'>
          {isToggleList ? <AddList handleSave={() => {
            setIsToggleList(false)
          }} /> :
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
