import { Card } from '../../types';
import React, { useState } from 'react';

interface Props {
  card: Partial<Card>;
  onChange: (card: Card) => void;
}

export const CardInput: React.FC<Props> = ({ card, onChange }: Props) => {
  const [localCard, setLocalCard] = useState(card);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLocalCard({ ...localCard, [name]: value });
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          className={`border-2 p-2 rounded-md`}
          value={localCard.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          className={`border-2 p-2 rounded-md`}
          type="text"
          name="description"
          value={localCard.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          className={`border-2 p-2 rounded-md`}
          type="text"
          name="status"
          value={localCard.status}
          onChange={handleChange}
        />
      </div>
      <button
        className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600`}
        onClick={() => onChange(localCard as Card)}
      >
        Save
      </button>
    </div>
  );
};
