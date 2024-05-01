import React, { useState } from 'react';

{/*
Ideas:
- Change theme (Done)
- Change language (Done)
- Change task duration (Done)
- Change project settings (Done)
- Change timer settings (In progress)
- Change terminal settings
- Change shared settings

*/}


const SettingsView = () => {

    const [currentTheme, setCurrentTheme] = useState('light');
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [currentTaskDuration, setCurrentTaskDuration] = useState('25 minutes');
    const [currentProjectSettings, setCurrentProjectSettings] = useState({
        sharedProjects: false,
        showArchivedProjects: false,
        showCompletedProjects: false
    });
    const [currentTimerSettings, setCurrentTimerSettings] = useState({
        showTimerNotifications: false
    });
    const [currentTerminalSettings, setCurrentTerminalSettings] = useState({
        terminalTheme: 'light',
        terminalFontSize: 'small'
    });

    const handleTerminalThemeChange = (e) => {
        console.log(e.target.value)
        setCurrentTerminalSettings({...currentTerminalSettings, terminalTheme: e.target.value});
    }

    return (
        <div className = "flex flex-col bg-slate-100 w-full h-screen p-4">
        <h1 className="text-md font-semibold">Settings</h1>

        <div className = "p-2 gap-2 flex flex-col w-fit">
            <h2 className="text-sm font-semibold">Theme</h2>
            <div className="flex flex-row ring-1 ring-slate-300 w-fit rounded-md">
                {/* <button onClick = {setCurrentTheme('light')} className="bg-slate-100 ring-1 ring-slate-400 text-slate-700 text-sm px-4 py-1 rounded-l-md">Light</button> */}
                
                {/* change the button to change style depending on the currentTheme state */}
                <button onClick = {(e) => setCurrentTheme('light')} className={`text-slate-700 text-sm px-4 py-1 rounded-l-md ${currentTheme === 'light' ? 'bg-purple-500 text-white' : 'bg-white'}`}>Light</button>
                <button onClick = {(e) => setCurrentTheme('dark')} className={`text-slate-700 text-sm px-4 py-1 rounded-r-md ${currentTheme === 'dark' ? 'bg-purple-500 text-white' : 'bg-white'}`}>Dark</button>
            </div>

            <h2 className="text-sm font-semibold">Language</h2>
            <select className="bg-white ring-1 ring-slate-300 text-slate-700 text-sm px-4 py-1 rounded-md">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
            </select>


            <h2 className="text-sm font-semibold">Task Duration</h2>
            <div className = "flex flex-row w-fit gap-2">
            <div className = "rounded-md ring-1 ring-slate-300">
                <button onClick = {(e) => setCurrentTaskDuration('25 minutes')}className={`text-slate-700 text-sm px-4 py-1 rounded-l-md ${currentTaskDuration === '25 minutes' ? 'bg-purple-500 text-white' : 'bg-white'}`}>25 minutes</button>
                <button onClick = {(e) => setCurrentTaskDuration('50 minutes')} className={`text-slate-700 text-sm px-4 py-1 ${currentTaskDuration === '50 minutes' ? 'bg-purple-500 text-white' : 'bg-white'}`}>50 minutes</button>
                <button onClick = {(e) => setCurrentTaskDuration('1 hour')} className={`text-slate-700 text-sm px-4 py-1 rounded-r-md ${currentTaskDuration === '1 hour' ? 'bg-purple-500 text-white' : 'bg-white'}`}>1 hour</button>
            </div>

            <button className="bg-white text-slate-700 ring-1 ring-slate-300 text-sm px-4 py-1 rounded-md">Custom</button>
            </div>

            <h2 className="text-sm font-semibold">Project Settings</h2>
            <h2 className="text-sm font-semibold">Default Project Settings</h2>
            <div className = "flex flex-row gap-2">
            <input type = "checkbox" className=" w-fit rounded-lg" /> <label className="text-sm">Shared projects</label>
            </div>
            <div className = "flex flex-row gap-2">
            <input type = "checkbox" className=" w-fit rounded-lg" /> <label className="text-sm">Show archived projects</label>
            </div>
            <div className = "flex flex-row gap-2">
            <input type = "checkbox" className=" w-fit rounded-lg" /> <label className="text-sm">Show completed projects</label>
            </div>

            <h2 className="text-sm font-semibold">Timer Settings</h2>
            <h2 className="text-sm font-semibold">Default Timer Settings</h2>
            <div className = "flex flex-row gap-2">
            <input type = "checkbox" className=" w-fit rounded-lg" /> <label className="text-sm">Show timer notifications</label>
            </div>

            <h2 className="text-sm font-semibold">Terminal Settings</h2>
            <h2 className="text-sm font-semibold">Default Terminal Settings</h2>
            <div className = "flex flex-row gap-2 w-full" >
                <p className="text-sm">Terminal theme</p>
                <select onChange = {handleTerminalThemeChange} className="bg-white w-fit ring-1 ring-slate-300 text-slate-700 text-sm px-4 py-1 rounded-md" value = {currentTerminalSettings.terminalTheme} >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="solarized">Solarized</option>
                </select>
                <p className="text-sm">Terminal font size</p>
                <select className="bg-white w-fit ring-1 ring-slate-300 text-slate-700 text-sm px-4 py-1 rounded-md">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
                <div className = {`flex flex-row gap-2 items-center ${currentTerminalSettings.terminalTheme == 'light' ? 'bg-white p-2 rounded-md ring-1 ring-slate-300' : ''} ${currentTerminalSettings.terminalTheme == 'dark' ? 'bg-slate-600 text-white p-2 rounded-md ring-1 ring-slate-300' : ''} ${currentTerminalSettings.terminalTheme == 'solarized' ? 'bg-yellow-100 p-2 rounded-md ring-1 ring-slate-300' : ''}`}>
                <p className={`${currentTerminalSettings.terminalFontSize == 'small' ? 'text-xs' : 'text-base'}} font-mono`}>$ ls</p>
                </div>

                

        </div>
        </div>
    )
    }

export default SettingsView;