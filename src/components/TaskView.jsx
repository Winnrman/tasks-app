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

    const handleAddSubtask = () => {
        //max 4 subtasks
        if(subtask_number == 4) return;
        const subtaskInput = document.createElement('input');
        subtaskInput.className = "w-full p-2 border border-b-slate-300 rounded-md";
        subtaskInput.type = "text";
        subtaskInput.placeholder = `Subtask ${subtask_number+1}`;
        document.getElementById('subtask_container').appendChild(subtaskInput);
        subtask_number++;
    }

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

    return (
        <div className="w-full h-screen bg-slate-100 flex flex-col">

            {creatingNewTask && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
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

                        <div className = "flex sm:flex-row flex-col gap-2 text-sm p-4">
                        <div className = "flex flex-col gap-2 w-full sm:w-2/3">
                            <label className="text-sm text-gray-500">Task title
                            <input className = "w-full p-2 border border-b-slate-300 rounded-md" type="text" placeholder="Walk the dog.." />
                            </label>
                            <label className="text-sm text-gray-500">Task description
                            <textarea className = "w-full p-2 border resize-y border-b-slate-300 rounded-md" placeholder="Write something witty.." />
                            </label>
                            <label className="text-sm text-gray-500 flex flex-col">Subtasks
                            <div className = "flex flex-col gap-1" id = "subtask_container">
                            <input className = "w-full p-2 border border-b-slate-300 rounded-md" type="text" placeholder="Subtask 1" />
                            <input className = "w-full p-2 border border-b-slate-300 rounded-md" type="text" placeholder="Subtask 2" />
                            </div>
                            {subtask_number < 4 ? (
                            <button onClick = {handleAddSubtask} className="bg-slate-200 hover:bg-slate-300 text-slate-500 p-2 rounded-md w-full mt-2">Add subtask</button>
                            ): 
                            <p className = "text-xs text-red-500">Max 4 subtasks</p>}
                            </label>
                            <label className="text-sm text-gray-500">Notes</label>
                            <textarea className = "w-full p-2 border resize-none border-b-slate-300 rounded-md" placeholder="Additional notes" />
                        
                        </div>
                        <div className = "sm:w-1/3 w-full">
                        <label className="text-sm text-gray-500">Due date</label>
                        <input className = "w-full p-2 border border-b-slate-300 rounded-md" type="date" />
                        <label className="text-sm text-gray-500">Priority</label>
                        <select className = "w-full p-2 border border-b-slate-300 rounded-md">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <label className="text-sm text-gray-500">Status</label>
                        <select className = "w-full p-2 border border-b-slate-300 rounded-md">
                            <option>Not started</option>
                            <option>In progress</option>
                            <option>Completed</option>
                        </select>
                        <label className="text-sm text-gray-500">Attachments</label>
                        <input className = "w-full p-2 border border-b-slate-300 rounded-md" type="file" />

                        </div>
                        </div>

                        <div className = "flex flex-row gap-2 justify-between sm:bg-slate-200 bg-transparent p-2">
                            <div></div>
                        <button onClick = {handleAddTask} className="bg-slate-500 hover:bg-slate-600 text-white p-2 rounded-md sm:w-auto w-full text-sm">Create Task</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-slate-200 border border-b-slate-300 flex items-center gap-2 p-2">
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
            </div>


            <div className="flex h-full w-full">
                {!creatingNewTask ? (
                <button onClick={handleNewTask} className="absolute shadow-lg right-0 bottom-16 m-4 h-12 w-12 rounded-full sm:hidden text-white text-xs bg-slate-500 hover:bg-slate-600 flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
                ) : null}
                <div className="flex flex-col w-full">
                    {tasks.length > 0 ? (
                        <div>
                            {tasks.map((task) => (
                                <div key={task.id} className="bg-white shadow-md p-1 rounded-md m-2 ring-1 ring-slate-300">
                                    <h2 className="text-lg font-semibold">{task.title}</h2>
                                    <p className="text-sm text-gray-500">{task.description}</p>
                                    <p className="text-sm text-gray-500">{task.priority}</p>
                                    <p className="text-sm text-gray-500">{task.completed}</p>
                                    <p className="text-sm text-gray-500">{task.project}</p>
                                    <p className="text-sm text-gray-500">{task.shared}</p>
                                </div>
                            ))}
                        </div>
                    ):

                    <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
                        <h1 className="font-semibold text-md items-center flex flex-col gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                            No tasks due</h1>
                        <p className="text-xs">Enjoy your free time!</p>
                    </div>
}
                </div>
            </div>
        </div>
    );
}

export default TaskView;