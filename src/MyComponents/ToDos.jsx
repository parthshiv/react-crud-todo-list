import { useState } from 'react';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import UpdateToDoModal from './UpdateToDo';

export default function ToDos() {
    
    const [todoList, setTodoList] = useState([
        { id: 1, task: 'Buy Groceries', desc: 'some details of task', completed: false },
        { id: 2, task: 'Buy Clothes', desc: 'some details of task', completed: true },
        { id: 3, task: 'Go to Movie', desc: 'some details of task', completed: false },
        { id: 4, task: 'Go to Mall', desc: 'some details of task', completed: false },
        { id: 5, task: 'Go to Airport', desc: 'some details of task', completed: false },
        { id: 6, task: 'Go to Railway Station', desc: 'some details of task', completed: true },
    ]);
    const toggleStatus = (id) => {
        setTodoList(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {    
        setTodoList(prev => prev.filter(todo => todo.id !== id));
    };

    // modal control
    const [showUpdate, setShowUpdate] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const openUpdateModal = (todo) => {
        setSelectedTodo(todo);
        setShowUpdate(true);
    };

    const closeUpdateModal = () => {
        setShowUpdate(false);
        setSelectedTodo(null);
    };

    const updateTodo = (updatedTodo) => {
        setTodoList(prev =>
        prev.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        )
        );
        closeUpdateModal();
    };

    return (
        <>
            <AddToDo todoList={todoList} setTodoList={setTodoList} />
            <ToDoList ToDoList={todoList} toggleStatus={toggleStatus} deleteTodo={deleteTodo} onEdit={openUpdateModal} />     
            <UpdateToDoModal
                show={showUpdate}
                handleClose={closeUpdateModal}
                todo={selectedTodo}
                updateTodo={updateTodo}
            /> 
            
            
        </>   
  )
}
