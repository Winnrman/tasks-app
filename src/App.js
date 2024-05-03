
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
import SettingsView from './components/SettingsView';
import KanbanView from './components/KanbanView';

function App() {

  const example_tasks = [
    {
      title: 'Task 1',
      description: 'Complete task 1',
      due: '2021-12-31',
      priority: 'High',
      shared: false,
      completed: false
    }
  ]

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
      {currentTab === 'tasks' && <TaskView tasks={example_tasks} />}
      {currentTab === 'projects' && <ProjectsView projects={[]} />}
      {currentTab === 'archived' && <ArchivedView collection={[]} />}
      {currentTab === 'shared' && <SharedView shared={[]} />} 
      {currentTab === 'timer' && <TimerView timers={example_timers} />} 
      {currentTab == "terminal" && <TerminalView />}
      {currentTab == "settings" && <SettingsView />}
      {currentTab == "kanban" && <KanbanView boards={[]} />}
      </div>
  );
}

export default App;
