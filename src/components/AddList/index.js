import React, { useState } from 'react';
import { createTodos } from '../../api/todos';
import ButtonGroup from '../ButtonGroup';
import TextFiled from '../TextFiled';
import './add-list.css';

export default function AddList({ handleCancel, getTodosAPI }) {
  const [name, setName] = useState('');

  const saveTodos = async () => {
    try {
      const payload = { name };
      const response = await createTodos(payload);
      if (response.data.message === 'success') {
        getTodosAPI();
        setName('');
        handleCancel('');
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='add-list-editor'>
      <TextFiled
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter list title'
        className='list-title-textarea' />
      <ButtonGroup saveLabel='Add list'
        handleCancel={handleCancel}
        handleSave={() => saveTodos()} />
    </div>
  )
}
