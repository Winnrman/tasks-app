import React, { useState } from 'react';

const TaskView = ({ tasks }) => {

    let subtask_number = 2;

    const [creatingNewTask, setCreatingNewTask] = useState(false);

    const handleNewTask = () => {
        setCreatingNewTask(!creatingNewTask);
    }

    const handleCloseNewTask = () => {
        setCreatingNewTask(false);
    }

    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0); // Set to start of current day


    const handleAddTask = () => {
        const taskTitle = document.querySelector('input[placeholder="Walk the dog.."]').value;
        const taskDescription = document.querySelector('textarea[placeholder="Write something witty.."]').value;
        const subtasks = document.querySelectorAll('input[placeholder^="Subtask"]');
        const dueDate = document.querySelector('input[type="date"]').value;
        const priority = document.querySelector('select').value;
        const status = document.querySelectorAll('select')[1].value;
        const attachments = document.querySelector('input[type="file"]').value;
        const notes = document.querySelector('textarea[placeholder="Additional notes"]').value;

        console.log(taskTitle, taskDescription, dueDate, priority, status, attachments, notes);
        subtasks.forEach(subtask => {
            console.log(subtask.value);
        });

        handleCloseNewTask();
    }

    const [selectedTask, setSelectedTask] = useState({});

    // turn 2024-05-03 into Fri May 03 2024
    const formatDate = (date) => {
        return new Date(date).toDateString();
    }

    const handleTaskClick = (e) => {
        if (e.target.id.includes('task') === false){
            return;
        }
        else{
            console.log(e.target);
        }

        let task = tasks.find(task => task.id === e.target.id.split('task')[1]);
        setSelectedTask(task);
    }

    return (
        <div className="w-full bg-slate-100 flex flex-col h-full">

            {creatingNewTask && (
                <div className="absolute z-0 top-0 left-0 w-full h-full flex items-center bg-slate-900/30 justify-center">
                    <div className="bg-white ring-1 ring-slate-300 rounded-md shadow-md sm:w-1/2 w-full sm:h-fit h-auto mt-8 mb-24 overflow-scroll">
                        <div className="flex flex-row justify-between items-center px-4 py-2">
                            <h2 className="text-md font-semibold">Create a new task</h2>
                            <button onClick={handleCloseNewTask} className="top-0 right-0 rounded-sm hover:bg-slate-200 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <hr className="w-auto border-1 border-slate-300 mx-4" />

                        <div className="flex sm:flex-row flex-col gap-2 text-sm p-4">
                            <div className="flex flex-col gap-2 w-full sm:w-2/3">
                                <label className="text-sm text-gray-500">Task title
                                    <input className="w-full p-2 border border-b-slate-300 rounded-md" type="text" placeholder="Walk the dog.." />
                                </label>
                                <label className="text-sm text-gray-500">Task description
                                    <textarea className="w-full p-2 border resize-y border-b-slate-300 rounded-md" placeholder="Write something witty.." />
                                </label>
                                {/* <label className="text-sm text-gray-500 flex flex-col">Subtasks
                                    <div className="flex flex-col gap-1" id="subtask_container">
                                        <input className="w-full p-2 border border-b-slate-300 rounded-md" type="text" placeholder="Subtask 1" />
                                        <input className="w-full p-2 border border-b-slate-300 rounded-md" type="text" placeholder="Subtask 2" />
                                    </div>
                                    {subtask_number < 4 ? (
                                        <button onClick={handleAddSubtask} className="bg-slate-200 hover:bg-slate-300 text-slate-500 p-2 rounded-md w-full mt-2">Add subtask</button>
                                    ) :
                                        <p className="text-xs text-red-500">Max 4 subtasks</p>}
                                </label> */}
                                <label className="text-sm text-gray-500">Notes
                                    <textarea className="w-full p-2 border resize-none border-b-slate-300 rounded-md" placeholder="Additional notes" />
                                </label>
                            </div>

                            <div className="sm:w-1/3 w-full gap-2 flex flex-col">
                                <label className="text-sm text-gray-500">Due date
                                    <input className="w-full p-2 border border-b-slate-300 rounded-md" type="date" />
                                </label>
                                <label className="text-sm text-gray-500">Priority
                                    <select className="w-full p-2 border border-b-slate-300 rounded-md">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </label>
                                <label className="text-sm text-gray-500">Status
                                    <select className="w-full p-2 border border-b-slate-300 rounded-md">
                                        <option>Not started</option>
                                        <option>In progress</option>
                                        <option>Completed</option>
                                    </select>
                                </label>
                                <label className="text-sm text-gray-500">Attachments
                                    <input className="w-full p-2 border border-b-slate-300 rounded-md" type="file" />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2 justify-between sm:bg-slate-200 bg-transparent p-2">
                            <div></div>
                            <button onClick={handleAddTask} className="bg-purple-600 hover:bg-slate-600 text-white p-2 rounded-md sm:w-auto w-full text-sm">Create Task</button>
                        </div>
                    </div>
                </div>
            )}
            {/* <div className="bg-slate-200 border border-b-slate-300 flex items-center gap-2 p-2">
                <div className="bg-white flex flex-row w-full items-center px-1 text-slate-400 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                    <input id="task_search_bar" type="text" placeholder="Search tasks" className="focus:outline-0 bg-white p-2 sm:text-xs text-sm rounded-sm w-full" />
                </div>
                <button onClick={handleNewTask} className="sm:flex hidden text-white h-full text-xs bg-slate-500 hover:bg-slate-600 rounded-sm w-32 items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Create Task</button>
            </div> */}


            <div className="flex flex-col h-full w-full">

                <div className="z-1 w-full bg-white border border-b-slate-300 py-3 px-3 flex flex-row items-center justify-between">
                    <h1 className="sm:text-lg text-sm font-semibold sm:text-start text-center text-slate-900">Tasks</h1>
                    <button onClick={handleNewTask} className="sm:flex hidden flex flex-row w-fit rounded-full bg-purple-500 text-white px-2 py-1 text-sm items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                        </svg>
                        <h2>
                            Add</h2>
                    </button>
                </div>

                {!creatingNewTask ? (
                    <button onClick={handleNewTask} className="absolute shadow-lg right-0 bottom-16 m-4 h-12 w-12 rounded-full sm:hidden text-white text-xs bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                ) : null}

                <div className="flex sm:flex-row flex-col w-full h-full bg-slate-100 p-4 gap-4">
                    <div className="flex flex-col sm:w-2/3 sm:h-full h-64 overflow-scroll rounded-lg gap-2 bg-white border border-b-slate-300 p-2">
                        {/* create divs for each day of the week including today */}

                        {Array.from({ length: 365 }, (_, i) => {
                            let day = new Date(startDate); // Use a copy of startDate
                            day.setDate(startDate.getDate() + i); // Increment by i days
                            // console.log(day.toDateString());
                            return (
                                <div key={i} className={`flex flex-col gap-1 border border-b-slate-300 p-2 rounded-md ${day.toDateString() === new Date().toDateString() ? 'bg-purple-100' : 'bg-white'}`}>
                                    <div className = "flex flex-row items-center gap-2">
                                    <h2 className="text-sm font-semibold">{day.toDateString().split(' ')[0]}</h2>
                                    <p className="text-xs text-gray-500">{day.toDateString().split(' ')[1]} {day.toDateString().split(' ')[2]}</p>
                                </div>
                                    {/* check if tasks are loaded and then map over them */}
                                    {tasks && tasks.map((task) => {
                                        let dueDate = new Date(task.due); // Parse due date
                                        if (formatDate(dueDate) === day.toDateString()) {
                                            return (
                                                <div onClick = {handleTaskClick} id = {`task${task.id}`} key={task.id} className="flex flex-row items-center gap-2 p-2 rounded-md bg-purple-500 hover:bg-purple-400 hover:cursor-pointer active:bg-purple-600 text-white">
                                                    <h2 className="text-xs font-semibold">{task.title}</h2>
                                                    <p className="text-xs">{task.priority}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            // console.log(day.toDateString(), formatDate(task.due));
                                            return null; // Return null if task is not for this day
                                        }
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div className="bg-white rounded-md sm:w-1/3 w-full h-fit">
                        <div className="flex flex-col rounded-t-lg bg-white gap-2">
                            <h2 className="text-md font-semibold p-2 mx-4 my-2">Selected task</h2>
                        </div>

                        <div className="border-b border-slate-300 p-2 m-4">
                            <h2 className="text-sm font-semibold">Title</h2>
                            <p className="text-sm italic text-gray-500">{selectedTask.title}</p>
                        </div>

                        <div className="border-b border-slate-300 p-2 m-4">
                            <h2 className="text-sm font-semibold">Description</h2>
                            <p className="text-sm italic text-gray-500">{selectedTask.description}</p>
                        </div>

                        <div className="border-b border-slate-300 p-2 m-4">
                            <h2 className="text-sm font-semibold">Priority</h2>
                            <p className="text-sm italic text-gray-500">{selectedTask.priority}</p>
                        </div>

                        <div className="border-b border-slate-300 p-2 m-4">
                            <h2 className="text-sm font-semibold">Due Date</h2>
                            <p className="text-sm italic text-gray-500">{selectedTask.due}</p>
                        </div>

                        <div className="border-b border-slate-300 p-2 m-4">
                            <h2 className="text-sm font-semibold">Shared members</h2>
                            <p className="text-sm italic text-gray-500">{selectedTask.shared ? 'Yes' : 'No'}</p>
                        </div>


                        

                        <div className="flex flex-row gap-1 text-sm m-4 items-center w-full">
                        <button className="flex flex-row items-center gap-2 text-sm bg-purple-500 hover:bg-purple-400 w-auto text-white p-2 rounded-md">
                                Mark as Complete</button>
                            <button className="flex flex-row items-center gap-2 bg-transparent hover:bg-purple-100 text-purple-500 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                Edit</button>

                            <span className="border-r border-slate-300 h-4"></span>

                            <button className="flex flex-row items-center gap-2 bg-transparent hover:bg-purple-100 text-purple-500 p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                                Delete</button>

                            <span className="border-r border-slate-300 h-4"></span>

                            <button className="flex flex-row items-center gap-2 bg-transparent hover:bg-purple-100 text-purple-500 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>

                                Share</button>
                        </div>
                    </div>

                </div>

                {/* <div className="flex flex-col sm:w-2/3 md:w-1/2 w-full h-full overflow-scroll m-4">
                    {tasks.length > 0 ? (
                        <div>
                            <div className="grid grid-cols-5 bg-slate-200 border border-b-slate-300 p-2 rounded-t-md">
                                <h2 className="text-sm font-semibold">Status</h2>
                                <h2 className="text-sm font-semibold">Title</h2>
                                <h2 className="text-sm font-semibold">Description</h2>
                                <h2 className="text-sm font-semibold">Priority</h2>
                                <h2 className="text-sm font-semibold">Due</h2>
                             
                            </div>
                            {tasks.map((task) => (
                                <div key={task.id} className="bg-white shadow-md ring-1 ring-slate-300 flex h-full items-center grid grid-cols-5 grid-rows-1 items-center">
                                    <div className="flex flex-row h-full items-ceter">
                                        <span className="rounded-full h-5 px-2 items-center flex m-2 justify-center bg-purple-500 text-white text-xs font-semibold">{task.completed ? 'Completed' : 'Incomplete'}</span>
                                    </div>
                                    <h2 className="text-sm font-semibold">{task.title}</h2>
                                    <p className="text-sm text-gray-500">{task.description}</p>
                                    <p className={`text-sm text-gray-500 ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</p>
                                    <p className="text-sm text-gray-500">{task.due}</p>
                                    
                                </div>
                            ))}
                        </div>
                    ) :

                        <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
                            <h1 className="font-semibold text-md items-center flex flex-col gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                </svg>
                                No tasks due</h1>
                            <p className="text-xs">Create a new task to start planning your day</p>
                            <button onClick={handleNewTask} className="sm:flex hidden text-white h-full text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 mt-2 rounded-full items-center justify-center gap-1">

                                Create Task</button>
                        </div>
                    }
                </div> */}
            </div>
        </div>
    );
}

export default TaskView;