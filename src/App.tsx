import React, { useState } from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar';
import RightSidebar from './Components/RightSidebar';
import Content from './Components/Content';
import { Switch, Route, Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
  const custom: any = {
    id: `id-${k}`,
    content: `Quote ${k}`,
  };

  return custom;
});

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </div>
      )}
    </Draggable>
  );
}

const QuoteList = function QuoteList({ quotes }) {
  return quotes.map((quote: any, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
};

function App() {
  const [state, setState] = useState({ quotes: initial });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index,
    );

    setState({ quotes });
  }
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {/* <QuoteList quotes={state.quotes} /> */}
              <Sidebar quotes={state.quotes} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Content />
      <RightSidebar />
    </div>
  );
}

export default App;
