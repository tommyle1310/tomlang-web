import React, { useState } from 'react';

interface Item {
  id: string;
  content: JSX.Element;
}

const initialListA: Item[] = [
  {
    id: `${Math.random() * Math.random()}`,
    content: <div style={{ color: 'red', fontSize: 20 }}>hello world</div>,
  },
  {
    id: `${Math.random() + 1 * Math.random()}`,
    content: <div style={{ color: 'blue', fontSize: 20 }}>hello React</div>,
  },
];

const DragAndDropExample = ({ onDropToEditor }: { onDropToEditor: (item: Item) => void }) => {
  const [listA] = useState(initialListA);

  const handleDragStart = (event: React.DragEvent, item: Item) => {
    event.dataTransfer.setData('application/json', JSON.stringify({ id: item.id }));
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
