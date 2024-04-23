const SharedView = ({ shared }) => {
    return (
        <div className="sm:w-1/2 w-full h-screen bg-slate-100 flex items-center justify-center">
            {shared.length > 0 && (
                <div>
                    {shared.map((task) => (
                        <div key={task.id} className="bg-white shadow-md p-4 rounded-md mb-4">
                            <h2 className="text-lg font-semibold">{task.title}</h2>
                            <p className="text-sm text-gray-500">{task.description}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className = "flex flex-col items-center justify-center gap-2 text-slate-500">
            <h1 className="font-semibold text-md items-center flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

                No shared tasks</h1>
                <p className = "text-xs">Share a task to view it here!</p>
                </div>

        </div>
    );
}

export default SharedView;