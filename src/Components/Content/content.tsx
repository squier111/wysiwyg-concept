import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { LOGOFOOT } from '../../assets/Icons';
import { Button, TextField } from '@material-ui/core';

const Content = ({ quotes, editHandler }) => {
  return (
    <div className="content">
      <h3>App builder</h3>
      {quotes.map((quote: any, index: number) => (
        <Draggable
          disableInteractiveElementBlocking
          draggableId={quote.id}
          index={index}
          key={index}
        >
          {(provided) => {
            switch (quote.typeField) {
              case 'button':
                return (
                  <div
                    onClick={() => editHandler(quote.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Button
                      style={{
                        width: `${quote.width}px` || 'auto',
                        height: `${quote.height}px` || 'auto',
                      }}
                      variant="contained"
                      color="primary"
                    >
                      {quote.content}
                    </Button>
                  </div>
                );
              case 'textfield':
                return (
                  <div
                    onClick={() => editHandler(quote.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TextField
                      style={{
                        width: `${quote.width}px` || 'auto',
                        height: `${quote.height}px` || 'auto',
                      }}
                      id="filled-basic"
                      label="Filled"
                      variant="filled"
                      value={quote.content}
                    />
                  </div>
                );
              case 'image':
                return (
                  <div
                    onClick={() => editHandler(quote.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img
                      style={{
                        width: `${quote.width}px` || 'auto',
                        height: `${quote.height}px` || 'auto',
                      }}
                      src={LOGOFOOT}
                      alt="logo"
                      className="logo-foot"
                    />
                  </div>
                );
              default:
                return (
                  <div
                    onClick={() => editHandler(quote.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Button
                      style={{
                        width: `${quote.width}px` || 'auto',
                        height: `${quote.height}px` || 'auto',
                      }}
                      variant="contained"
                      color="primary"
                    >
                      {quote.content}
                    </Button>
                  </div>
                );
            }
          }}
        </Draggable>
      ))}
    </div>
  );
};

export default Content;
