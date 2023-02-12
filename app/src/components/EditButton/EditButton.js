import React, { useState } from 'react';
import './EditButton.css';

function EditButton({ className, onClick, icon = 'fas fa-pen' }) {
  const [mouse, setMouse] = useState(false);

  return (
    <i
      className={`${className || ''} ${mouse && 'active'} edit-icon ${icon}`}
      onMouseDown={() => setMouse(true)}
      onMouseUp={() => setMouse(false)}
      onMouseLeave={() => setMouse(false)}
      onClick={onClick}
    />
  );
}

export default EditButton;
