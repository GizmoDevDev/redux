import React, { useState } from 'react';
import { CardInput } from './InputForm';
import { Card } from '../../types';

interface Props {
  onSubmit: (task: Card) => void;
  isOpen: boolean;
  close: () => void;
  card?: Partial<Card>;
}

const CreateTaskModal: React.FC<Props> = ({ onSubmit, isOpen, close, card = {} }) => {
  const handleSubmit = (task: Card) => {
    onSubmit(task);
    close();
  };

  return (
    <div>
      {isOpen && (
        <div className={`fixed top-0 left-0 h-full w-full flex items-center justify-center`}>
          <div className={`bg-white rounded-lg p-4`}>
            <div className={`text-lg font-medium mb-4`}>Create New Task</div>
            <CardInput card={card} onChange={handleSubmit} />
            <button
              className={`bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600`}
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTaskModal;
