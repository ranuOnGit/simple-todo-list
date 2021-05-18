import React from 'react';
import './ToDoList.css';
import { ITodo } from '../Interfaces';

const ToDoList: React.FC<{ list: ITodo[]; deleteTask(id: string): void }> = ({
  list,
  deleteTask,
}) => {
  return (
    <div>
      {list.map((el) => {
        const { todoName, days, id } = el;
        return (
          <div className='task'>
            <div key={id} className='content'>
              <span>{todoName} </span>
              <span>complete in {days} days</span>
              <button onClick={(id) => deleteTask(el.id)}>X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
