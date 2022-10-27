import React from 'react';

interface AddTaskFormProps extends React.PropsWithChildren {

  onTaskChange: React.ChangeEventHandler<HTMLInputElement>;
  currentTask: string;
  onClick: React.MouseEventHandler;
}


const AddTaskForm: React.FC<AddTaskFormProps> = props => {
  return (
    <div className='form-box'>
      <input value={props.currentTask} onChange={props.onTaskChange}/>
      <button className='btn-add' onClick={props.onClick}>ADD</button>
    </div>
  );
};

export default AddTaskForm;