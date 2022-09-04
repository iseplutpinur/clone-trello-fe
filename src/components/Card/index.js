import React, { useState } from 'react';
import TextFiled from '../TextFiled';
import Title from '../Title';
import './card.css';
import '../AddList/add-list.css';

export const Card = (props) => {
  const [editList, setEditList] = useState({
    status: false,
    id: '',
    name: 'Doing',
  });
  return (<>
    <div className='list'>
      <div className='list-card'>
        {editList.status ? <TextFiled
          autoFocus={true}
          name="name"
          value={editList.name}
          deleteList={() => { }}

          handleChange={e => setEditList({ ...editList, name: e.target.value })}

          handleCancel={() => { setEditList({ ...editList, status: false }) }}
          // onChange={(e) => setName(e.target.value)}
          placeholder='Enter list title'
          className='list-title-textarea'
        /> : <Title onClick={() => { setEditList({ ...editList, status: true }) }}>{editList.name}</Title>}
        <div className='card'>Main Game</div>
        <div className='toggle-add-card'>
          <ion-icon name="add-outline"></ion-icon> Add a card
        </div>
      </div>
    </div>
  </>)
}
