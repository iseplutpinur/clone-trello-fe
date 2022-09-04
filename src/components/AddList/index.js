import React, { useState } from 'react';
import ButtonGroup from '../ButtonGroup';
import TextFiled from '../TextFiled';
import './add-list.css';

export default function AddList({ handleSave }) {
  const [name, setName] = useState('');
  return (
    <div className='add-list-editor'>
      <TextFiled
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter list title'
        className='list-title-textarea' />
      <ButtonGroup saveLabel='Add list' handleCancel={handleSave} />
    </div>
  )
}
