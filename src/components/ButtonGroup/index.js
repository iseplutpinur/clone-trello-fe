import React from 'react';
import './button-group.css';


export default function ButtonGroup(props) {
  const { handleSave, saveLabel, handleDelete, handleCancel } = props;
  return <>
    <div className='edit-buttons'>
      <div className='edit-button'>{saveLabel}</div>
      <div className='edit-button-cancel' onClick={handleCancel}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  </>
}
