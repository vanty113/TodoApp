import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './routes/route-app/RouterApp';
import { useState } from 'react';
import React from 'react';
import { listTaskData } from './constant/ListTaskData';
import { Layout } from './layouts/Layout';

export const TaskContext = React.createContext([]);
function App() {
  const [data, setData] = useState(listTaskData);

  return (
    <div className="App">
      <TaskContext.Provider value={{
        tasksData: data,
        updateData: setData,
      }}>
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter>
        </TaskContext.Provider>
    </div>
  );
}

export default App;
