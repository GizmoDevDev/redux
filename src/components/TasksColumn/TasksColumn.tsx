import React from 'react';
import { TaskCard } from '../TaskCard/TaskCard';
import { Card } from '../../types';

interface ColumnProps {
  title: string;
  tasks: Card[];
  neigborStatus: [string, string];
  changeStatus: (taskId: number, status: string) => void;
}

export const TasksColumn: React.FC<ColumnProps> = ({
  title,
  tasks,
  neigborStatus,
  changeStatus,
}) => {
  const onPrevStatus = (id: number) => {
    changeStatus(id, neigborStatus[0]);
  };

  const onNextStatus = (id: number) => {
    changeStatus(id, neigborStatus[1]);
  };
  return (
    <div className="flex flex-col rounded-lg p-4 gap-4 bg-gray-100">
      <h2 className="text-lg font-medium">{title}</h2>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onNextStatus={() => onNextStatus(task.id)}
          onPrevStatus={() => onPrevStatus(task.id)}
        />
      ))}
    </div>
  );
};
