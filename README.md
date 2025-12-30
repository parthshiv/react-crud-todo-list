# React ToDo Application

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-Icons-blue?logo=fontawesome)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-yellow?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

A portfolio-ready **ToDo application** built with **React**, **React Bootstrap**, and **Font Awesome**, demonstrating real-world React patterns such as lifted state, controlled modals, and clean component communication.

---

## Built With

- [React](https://react.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Vite](https://vitejs.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Overview

The React ToDo Application provides a clean, responsive interface for managing daily tasks.  
Users can add, edit, delete, and update the status of todos using modal dialogs.

This project focuses on **clarity**, **maintainability**, and **best practices**, making it suitable for learning, interviews, and portfolio demonstration.

---

## Features

- Card-based todo layout
- Add new todos using a modal form
- Edit existing todos with pre-filled data
- Delete todos using an icon-based action
- Toggle todo status between Pending and Completed
- Font Awesome icons for edit and delete actions
- Responsive UI powered by React Bootstrap

---

## Application Architecture

### Parent Component (ToDos)

- Maintains the complete todo list state
- Controls modal visibility
- Handles add, update, delete, and status toggle logic
- Acts as the single source of truth

### List Component (ToDoList)

- Renders todos as cards
- Displays edit and delete icons
- Sends user actions to the parent via callbacks

### Add Modal (AddToDo)

- Collects task details from the user
- Adds new todos to the list

### Update Modal (UpdateToDo)

- Opens with selected todo data
- Updates task title, description, and status

---

## Data Flow Strategy

- State lives only in the parent component
- Child components receive data via props
- Child components emit events via callback functions
- Parent updates state and React re-renders the UI

## Basic Commands

### Install Dependencies

```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

**Design principle followed:**

> Events go up, data comes down

---

## UI & Styling

- React Bootstrap for layout, grid, cards, forms, buttons, and modals
- Font Awesome icons for visual clarity and user actions
- Responsive design suitable for desktop and mobile devices

---

## Learning Highlights

- Proper use of React hooks
- Managing lists with immutable updates
- Modal-driven workflows
- Clean separation of concerns between components
- Real-world React state management patterns

---

## Portfolio Value

This project demonstrates:

- Practical React fundamentals
- Clean component design
- Scalable state management
- UI consistency using a component library

It is suitable for:
- Personal portfolio
- React learning reference
- Interview discussion project

---

## Future Enhancements

- Persist todos using local storage
- Add filters for All, Completed, and Pending tasks
- Add animations and transitions
- Improve accessibility and keyboard navigation

---

## License

This project is licensed under the **MIT License** and is free to use for learning and personal projects.
