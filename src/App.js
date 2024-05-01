
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TaskView from './components/TaskView';
import ProjectsView from './components/ProjectsView';
import ArchivedView from './components/ArchivedView';
import SharedView from './components/SharedView';
import TimerView from './components/TimerView';
import TerminalView from './components/TerminalView';

function App() {

  const example_timers = [
    {
    title: 'Timer 1',
    duration: '00:00:00',
    active: false
  }
]

  const [currentTab, setCurrentTab] = useState('tasks');

  const handleSetCurrentTab = (tab) => {
    setCurrentTab(tab);
  }

  return (
    <div className="App flex sm:flex-row flex-col h-screen">
      <NavBar active = {currentTab} handleSetCurrentTab = {handleSetCurrentTab}/>
      {currentTab === 'tasks' && <TaskView tasks={[]} />}
      {currentTab === 'projects' && <ProjectsView projects={[]} />}
      {currentTab === 'archived' && <ArchivedView collection={[]} />}
      {currentTab === 'shared' && <SharedView shared={[]} />} 
      {currentTab === 'timer' && <TimerView timers={example_timers} />} 
      {currentTab == "terminal" && <TerminalView />}
      </div>
  );
}

export default App;
