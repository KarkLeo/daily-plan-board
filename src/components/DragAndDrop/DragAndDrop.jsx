import React from "react";
import "./DragAndDrop.css";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

const DragAndDrop = ({ list, setList }) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newList = Array.from(list);
    newList.splice(source.index, 1);
    newList.splice(
      destination.index,
      0,
      list.filter((i) => i.id.toString() === draggableId)[0]
    );

    setList(newList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div
            className="drag-and-drop"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.map((i, index) => (
              <Draggable key={i.id} draggableId={i.id.toString()} index={index}>
                {(provided) => (
                  <div
                    className="drag-and-drop__item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {i.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
