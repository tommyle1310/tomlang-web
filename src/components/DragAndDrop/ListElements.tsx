import React, { useState } from 'react';
import MultipleChoice from './MultipleChoice';
import Title from './Title';
import { DRAG_DISPLAY } from '@/lib/constants/variables';

interface Item {
  id: string;
  content: JSX.Element;
}

const initialListA: Item[] = [
  {
    id: `${Math.random() * Math.random()}`,
    content: <div key='title'><Title type={DRAG_DISPLAY} /></div>,
  },
  {
    id: `${Math.random() + 1 * Math.random()}`,
    content: <div key='multiple-choice'>
      <MultipleChoice type={DRAG_DISPLAY} onSelect={() => { }} options={[{ id: 1, label: '1' }, { id: 2, label: '2' }, { id: 3, label: '3' }, { id: 4, label: '4' }]} question='hello world' />
    </div>

  },
];

const DragAndDropExample = ({ onDropToEditor }: { onDropToEditor: (item: Item) => void }) => {
  const [listA] = useState(initialListA);

  const handleDragStart = (event: React.DragEvent, item: Item) => {
    event.dataTransfer.setData('application/json', JSON.stringify(item));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h2>List A</h2>
        <div style={{ padding: 20, border: '1px solid gray', minHeight: 200 }}>
          {listA.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(event) => handleDragStart(event, item)}
              style={{ padding: 10, marginBottom: 10, backgroundColor: 'lightblue' }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDropExample;
