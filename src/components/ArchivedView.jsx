const ArchivedView = ({ collection }) => {
    return (
        <div className="w-full h-screen bg-slate-100 flex items-center justify-center">
            {collection.length > 0 && (
                <div>
                    {collection.map((task) => (
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
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
</svg>

                No archived projects or tasks</h1>
                <p className = "text-xs">Archive a project or task to view it here!</p>
                </div>

        </div>
    );
}

export default ArchivedView;