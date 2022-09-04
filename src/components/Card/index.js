import React, { useState } from 'react';
import TextFiled from '../TextFiled';
import Title from '../Title';
import './card.css';
import '../AddList/add-list.css';
import { deleteTodo, updateTodos } from '../../api/todos';

export const Card = ({ todos, getTodosAPI }) => {
  const [editList, setEditList] = useState({
    status: false,
    id: '',
    name: '',
  });

  const onEnter = async (e, id) => {
    try {
      if (e.keyCode !== 13) return false;
      const payload = { name: editList.name };
      const response = await updateTodos(id, payload);
      if (response.data.message === 'success') {
        setEditList({
          status: false,
          id: '',
          name: ''
        });
        getTodosAPI();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onChange = e => {
    setEditList({ ...editList, [e.target.name]: e.target.value });
  }

  const deleteTodoAPI = async (id) => {
    try {
      const confirm = window.confirm('apakah anda yakin akan mengahpus data ini..?');
      if (confirm) {
        const response = await deleteTodo(id);
        if (response.data.message === 'success') {
          setEditList({
            status: false,
            id: '',
            name: ''
          });
          getTodosAPI();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (<>
    {todos.map(e =>
      <div className='list' key={e.id}>
        <div className='list-card'>
          {(editList.status && editList.id == e.id) ? <TextFiled
            autoFocus={true}
            name="name"
            value={editList.name}
            deleteList={() => deleteTodoAPI(e.id)}
            onEnter={(ele) => onEnter(ele, e.id)}
            handleCancel={() => { setEditList({ id: '', name: '', status: false }) }}
            placeholder='Enter list title'
            className='list-title-textarea'
            onChange={e => onChange(e)}
          /> : <Title onClick={() => { setEditList({ id: e.id, name: e.name, status: true }) }}>{e.name}</Title>}

          {e.Items.map(item => <div key={item.id} className='card'>
            {item.name}
          </div>)}

          <div className='toggle-add-card'>
            <ion-icon name="add-outline"></ion-icon> Add a card
          </div>
        </div>
      </div>
    )}
  </>)
}
