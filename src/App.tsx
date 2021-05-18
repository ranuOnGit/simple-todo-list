import React from 'react';
import './App.css';
import ToDoForm from './components/todoform/ToDoForm';

const App: React.FC = () => {
  return (
    <div className='main-container'>
      <h1>A TO-DO LIST</h1>
      <ToDoForm />
      <h4>@ react-typescript app</h4>
    </div>
  );
};

export default App;
