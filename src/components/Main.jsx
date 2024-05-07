const Main = () => {
    const example_tasks = [
        {
          id: '000001',
          title: 'Task 1',
          description: 'Complete task 1',
          due: 'May 3, 2024',
          priority: 'High',
          shared: false,
          completed: false
        },
        {
          id: '000002',
          title: 'Create a new task',
          description: 'Complete task 1',
          due: 'May 7, 2024',
          priority: 'Low',
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
    
      const handleLogout = () => {
        console.log("Logging out");
      }
    
      return (
        <div className="App flex sm:flex-row flex-col h-screen">
          <NavBar handleLogout = {handleLogout} active = {currentTab} handleSetCurrentTab = {handleSetCurrentTab}/>
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
    
    export default Main;
    