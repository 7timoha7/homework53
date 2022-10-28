import React from 'react';

interface TaskProps extends React.PropsWithChildren {
  inputUser: string;
  onClickDelete:React.MouseEventHandler;
  onChangeCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  style: string;
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div>
      <div className='task'>
        <p>{props.inputUser}</p>
        <span style={{display: props.style}}>Done</span>
        <input className='checkbox' type="checkbox" onChange={props.onChangeCheckbox}/>
        <button className='btn-delete' onClick={props.onClickDelete}>Delete</button>
      </div>
    </div>
  );
};


export default Task;


