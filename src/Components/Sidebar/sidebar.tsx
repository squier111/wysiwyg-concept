import React from 'react';
import ButtonElemenet from '../ButtonElement';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from '@material-ui/core';

const Sidebar = ({ quotes }) => {
  return (
    <div className="sidebar">
      {quotes.map((quote: any, index: number) => (
        // <Quote quote={quote} index={index} key={quote.id} />
        <Draggable
          disableInteractiveElementBlocking
          draggableId={quote.id}
          index={index}
        >
          {(provided) => (
            <button
              // variant="contained"
              // color="primary"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {quote.content}
            </button>
            // <ButtonElemenet
            //   ref={provided.innerRef}
            //   //@ts-ignore
            //   props={{
            //     ...provided.draggableProps,
            //     ...provided.dragHandleProps,
            //   }}
            //   // props={provided.draggableProps}
            //   // props2={provided.dragHandleProps}
            // />
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Sidebar;
