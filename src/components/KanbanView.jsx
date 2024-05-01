const KanbanView = ({ boards }) => {
    return (
        <div className="bg-slate-100 h-screen w-full p-4">
            <div className="flex items-center justify-center gap-2 w-full h-full">
                {boards.length === 0 ? <div className="text-center text-slate-500 items-center flex flex-col gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                    <h2 className="font-semibold text-md items-center flex flex-col gap-2">Kanban Boards</h2>
                    <p className="text-xs">Create a new board to start planning your projects</p>

                    <div className = "flex flex-row gap-2">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 mt-4 rounded-full mt-2">Create Board</button>
                    <button className="bg-transparent text-purple-600 hover:text-purple-400 text-sm px-4 py-2 mt-4 rounded-full mt-2">View Templates</button>
                    </div>
                    </div>
                    :
                    boards.map((board) => (
                        <div key={board.id}>{board.title}</div>
                    ))}

            </div>

        </div>
    );
}

export default KanbanView;