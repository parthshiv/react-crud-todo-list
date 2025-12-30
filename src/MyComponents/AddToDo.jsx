import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AddToDoModal({todoList, setTodoList}) {
  
    // modal setting
    const [show, setShow] = useState(false);    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // form field settings
    const [status, setStatus] = useState(false);
    const [task, setTask] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: todoList.length + 1,
            task: task,
            desc: desc,
            completed: status
        };
        
        setTodoList([...todoList, newTodo]);
        
        setTask('');
        setDesc('');
        handleClose();
    };

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Add New ToDo
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='task' 
                            placeholder="Enter title" 
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='desc' 
                            placeholder="Enter description" 
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                            required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Completed"
                            name='completed'
                            checked={status}
                            onChange={e => setStatus(e.target.checked)}
                        />
                    </Form.Group>
                        
                        
                        
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </>
    );
}

 