import React from 'react';
import { Card } from '../../types';

interface TaskCardProps {
  task: Card;
  onPrevStatus: () => void;
  onNextStatus: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onNextStatus, onPrevStatus }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>

      <div className={`mt-4`}>
        <button
          className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600`}
          onClick={onPrevStatus}
        >
          Prev
        </button>
        <button
          className={`bg-red-500 text-white p-2 rounded-md hover:bg-red-600 ml-4`}
          onClick={onNextStatus}
        >
          Next
        </button>
      </div>
    </div>
  );
};
