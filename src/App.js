
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TaskView from './components/TaskView';
import ProjectsView from './components/ProjectsView';
import ArchivedView from './components/ArchivedView';
import SharedView from './components/SharedView';

function App() {

  const example_tasks = [
    {
      title: 'Task 1',
      description: 'This is a task',
      due_date: '2021-07-01',
      priority: 'High',
      completed: false,
      project: 'Project 1',
      shared: false
    },
    {
      title: 'Task 2',
      description: 'This is another task',
      due_date: '2021-07-02',
      priority: 'Medium',
      completed: false,
      project: 'Project 2',
      shared: false
    },
    {
      title: 'Task 3',
      description: 'This is a task',
      due_date: '2021-07-03',
      priority: 'Low',
      completed: false,
      project: 'Project 3',
      shared: false
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
      </div>
  );
}

export default App;
