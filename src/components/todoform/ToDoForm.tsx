import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { ITodo } from '../Interfaces';
import ToDoList from '../todolist/ToDoList';
import './ToDoForm.css'

const ToDoForm: FC = () => {
  const [todo, setTodo] = useState({
    task: '',
    deadline: 0,
  });
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const { task, deadline } = todo;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    const newTodo = {
      todoName: task,
      days: deadline,
      id: new Date().getTime().toString(),
    };
    setTodoList([...todoList, newTodo]);
    setTodo({ task: '', deadline: 0 });
  };

  const handleDelete = (id: string): void => {
    setTodoList(todoList.filter((el) => el.id !==id))
  }

  return (
    <div className='todo-container'>

      <div className='form-container'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='new to-do'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='days to complete'
            name='deadline'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>

      <div className='list-container'>
        <ToDoList list={todoList} deleteTask={handleDelete} />
      </div>
    </div>
  );
};

export default ToDoForm;
