import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// Define item type and initial data
type Item = string;

const initialTodoItems: Item[] = [
  "Schedule perm",
  "Rewind VHS tapes",
  "Make change for the arcade",
  "Get disposable camera developed",
  "Learn C++",
  "Return Nintendo Power Glove",
];

const initialDoneItems: Item[] = ["Pickup new mix-tape from Beth"];

export function DragAndDrop() {
  const [todoItems, setTodoItems] = useState<Item[]>(initialTodoItems);
  const [doneItems, setDoneItems] = useState<Item[]>(initialDoneItems);

  const handleOnDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;

    if (!destination) return; // Dropped outside the list

    // Define lists based on source and destination
    const sourceList = source.droppableId === "todo" ? todoItems : doneItems;
    const destinationList =
      destination.droppableId === "todo" ? todoItems : doneItems;

    if (source.droppableId === destination.droppableId) {
      // Moving within the same list
      const updatedList = Array.from(sourceList);
      const [movedItem] = updatedList.splice(source.index, 1);
      updatedList.splice(destination.index, 0, movedItem);

      if (source.droppableId === "todo") {
        setTodoItems(updatedList);
      } else {
        setDoneItems(updatedList);
      }
    } else {
      // Moving between lists
      const sourceUpdatedList = Array.from(sourceList);
      const [movedItem] = sourceUpdatedList.splice(source.index, 1);

      const destinationUpdatedList = Array.from(destinationList);
      destinationUpdatedList.splice(destination.index, 0, movedItem);

      if (source.droppableId === "todo") {
        setTodoItems(sourceUpdatedList);
        setDoneItems(destinationUpdatedList);
      } else {
        setTodoItems(destinationUpdatedList);
        setDoneItems(sourceUpdatedList);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="kanban-board" style={{ display: "flex", gap: "16px" }}>
        <Droppable droppableId="todo">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="todo-list"
              style={{
                padding: 8,
                width: 250,
                minHeight: 500,
                border: "1px solid lightgrey",
                backgroundColor: "lightgrey",
                listStyleType: "none",
                margin: 0,
              }}
            >
              {todoItems.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="kanban-item"
                      style={{
                        ...provided.draggableProps.style,
                        padding: 16,
                        marginBottom: 8,
                        backgroundColor: "white",
                        border: "1px solid lightgrey",
                        borderRadius: 4,
                        boxShadow: "0 2px 2px rgba(0,0,0,0.2)",
                        userSelect: "none", // Prevent text selection
                        cursor: "grab", // Visual feedback for drag
                      }}
                    >
                      {item}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <Droppable droppableId="done">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="done-list"
              style={{
                padding: 8,
                width: 250,
                minHeight: 500,
                border: "1px solid lightgrey",
                backgroundColor: "lightgrey",
                listStyleType: "none",
                margin: 0,
              }}
            >
              {doneItems.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="kanban-item"
                      style={{
                        ...provided.draggableProps.style,
                        padding: 16,
                        marginBottom: 8,
                        backgroundColor: "white",
                        border: "1px solid lightgrey",
                        borderRadius: 4,
                        boxShadow: "0 2px 2px rgba(0,0,0,0.2)",
                        userSelect: "none", // Prevent text selection
                        cursor: "grab", // Visual feedback for drag
                      }}
                    >
                      {item}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
