import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Content = ({ quotes }) => {
  return (
    <div className="content">
      {quotes.map((quote: any, index: number, typeField: string) => (
        <Draggable
          disableInteractiveElementBlocking
          draggableId={quote.id}
          index={index}
          key={index}
        >
          {(provided) =>
            quote.typeField === 'button' ? (
              <button
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {quote.content}
              </button>
            ) : (
              <input
                type="text"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                value={quote.content}
              />
            )
          }
        </Draggable>
      ))}
    </div>
  );
};

export default Content;
