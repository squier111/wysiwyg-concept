import React, { useState } from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar';
import RightSidebar from './Components/RightSidebar';
import Content from './Components/Content';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

const initial = Array.from({ length: 0 }, (v, k) => k).map((k) => {
  const custom: any = {
    id: `id-${k}`,
    content: `Button ${k}`,
    typeField: 'button',
  };

  return custom;
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [state, setState] = useState<any>({
    quotes: initial,
  });

  const addHandler = (type: string) => {
    setState({
      quotes: [
        ...state.quotes,
        {
          id: `id-${uuidv4()}`,
          content: `${type}`,
          typeField: `${type}`,
        },
      ],
    });
  };

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
      <Sidebar addHandler={(type) => addHandler(type)} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Content quotes={state.quotes} />
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <RightSidebar />
    </div>
  );
}

export default App;
