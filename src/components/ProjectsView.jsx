// const ProjectsView = ({ projects }) => {

//     const handleNewProject = () => {
//         const task = {
//             id: projects.length + 1,
//             title: "New Task",
//             description: "Description of the new task"
//         }
//         projects.push(task);
//     }


//     return (
        
//         <div className="sm:w-1/2 w-full h-screen bg-slate-100 flex flex-col items-center justify-center">

// <div className="bg-slate-200 border border-b-slate-300 p-2 flex gap-2 items-center">

//                 <input id="task_search_bar" type="text" placeholder="Search tasks" className="focus:outline-0 ring-1 ring-slate-300 bg-white p-2 sm:text-xs text-sm rounded-sm w-full" />

//                 <button onClick={handleNewProject} className="sm:flex hidden text-white text-xs h-full bg-slate-500 hover:bg-slate-600 rounded-sm w-32 flex items-center justify-center gap-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                     </svg>
//                     Create Project</button>
//             </div>

//             {projects.length > 0 && (
//                 <div>
//                     {projects.map((task) => (
//                         <div key={task.id} className="bg-white shadow-md p-4 rounded-md mb-4">
//                             <h2 className="text-lg font-semibold">{task.title}</h2>
//                             <p className="text-sm text-gray-500">{task.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             <div className = "flex flex-col items-center justify-center gap-2 text-slate-500">
//             <h1 className="font-semibold text-md items-center flex flex-col gap-2">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
// </svg>

//                 No projects created</h1>
//                 <p className = "text-xs">Create a project to get started!</p>
//                 </div>

//         </div>
//     );
// }

// export default ProjectsView;

const ProjectsView = ({ projects }) => {

    const handleNewTask = () => {
        const task = {
            id: projects.length + 1,
            title: "New Task",
            description: "Description of the new task"
        }
        projects.push(task);
    }

    return (

        <div className="sm:w-1/2 w-full h-screen bg-slate-100 flex flex-col">

<div className="bg-slate-200 border border-b-slate-300 p-2 flex items-center gap-2">
                    <div className="bg-white flex flex-row w-full items-center px-1 text-slate-400 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                        <input id="task_search_bar" type="text" placeholder="Search tasks" className="focus:outline-0 bg-white p-2 sm:text-xs text-sm rounded-sm w-full" />
                    </div>
                    <button onClick={handleNewTask} className="px-2 whitespace-nowrap sm:flex hidden text-white h-full text-xs bg-slate-500 hover:bg-slate-600 rounded-sm w-32 items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Create Project</button>
                </div>

            <div className="flex h-full w-full">
                <button onClick={handleNewTask} className="absolute shadow-lg right-0 bottom-16 m-4 h-12 w-12 rounded-full sm:hidden text-white text-xs bg-slate-500 hover:bg-slate-600 flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="flex flex-col items-center justify-center w-full">
                    {projects.length > 0 && (
                        <div>
                            {projects.map((task) => (
                                <div key={task.id} className="bg-white shadow-md p-4 rounded-md mb-4">
                                    <h2 className="text-lg font-semibold">{task.title}</h2>
                                    <p className="text-sm text-gray-500">{task.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
                        <h1 className="font-semibold text-md items-center flex flex-col gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
   <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
 </svg>
                            No projects created</h1>
                        <p className="text-xs">Create a project to get started!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;