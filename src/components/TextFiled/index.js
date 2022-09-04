import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './text-filed.css';

export default function TextFiled(props) {
  const { name, value, onChange, placeholder, className, deleteList, handleCancel, onEnter } = props;
  return (
    <div className='list-title-edit'>
      <TextareaAutosize
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        style={{
          width: deleteList ? 220 : 245,
          marginBottom: 8
        }}
        onKeyDown={onEnter}
        autoFocus={true}
      />
      {props.deleteList && (<>
        <ion-icon name="trash-outline" onClick={deleteList}></ion-icon>
        <ion-icon name="close-outline" onClick={handleCancel}></ion-icon>
      </>)}
    </div>
  )
}
