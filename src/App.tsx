import './App.css';
import { TasksColumn } from './components/TasksColumn/TasksColumn';
import React, { useState } from 'react';
import CreateTaskModal from './components/TaskCard/TaskModalCreating';
import { Card } from './types';

const statuses = ['TODO', 'In progress', 'QA/Review', 'Done'];

const neigborStatuses: [string, string][] = [
  ['TODO', 'In progress'],
  ['TODO', 'QA/Review'],
  ['In progress', 'Done'],
  ['QA/Review', 'Done'],
];

const initialState = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is the first task.',
    status: 'TODO',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is the second task.',
    status: 'In progress',
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'This is the third task.',
    status: 'QA/Review',
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'This is the fourth task.',
    status: 'Done',
  },
];

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const filterTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status);
  };

  const changeTaskStatus = (taskId: number, newStatus: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCreateTask = (task: Card) => {
    setTasks((prev) => [...prev, { ...task, id: prev.length + 1 }]);
  };

  return (
    <>
      <button
        className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600`}
        onClick={() => setIsOpen(true)}
      >
        Add New Task
      </button>
      <div className="mx-auto my-10 max-w-l flex gap-2">
        {statuses.map((status, i) => (
          <TasksColumn
            key={status}
            tasks={filterTasksByStatus(status)}
            title={status}
            neigborStatus={neigborStatuses[i]}
            changeStatus={changeTaskStatus}
          />
        ))}
      </div>
      <CreateTaskModal isOpen={isOpen} close={() => setIsOpen(false)} onSubmit={handleCreateTask} />
    </>
  );
}

export default App;
