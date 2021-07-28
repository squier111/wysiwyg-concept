import React from 'react';
import ButtonElemenet from '../ButtonElement';
import { Draggable } from 'react-beautiful-dnd';

const Sidebar = ({ quotes }) => {
  return (
    <div className="sidebar">
      {quotes.map((quote: any, index: number) => (
        // <Quote quote={quote} index={index} key={quote.id} />
        <Draggable draggableId={quote.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {quote.content}
            </div>
            // <ButtonElemenet
            //   ref={provided.innerRef}
            //   props={provided.draggableProps}
            //   props2={provided.dragHandleProps}
            // />
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Sidebar;
