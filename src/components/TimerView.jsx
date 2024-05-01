const TimerView = ({ timers }) => {
    return (
        <div className="w-full bg-slate-100 h-screen flex flex-col">
            {timers.length > 0 ? (
                <div className="h-full">
                    <div className="flex h-3/4 items-center justify-center gap-2 text-slate-500">
                        <div className="text-md items-center flex flex-col gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>


                            <p className="font-semibold text-lg">Timers</p>
                            <p className="text-xs text-center px-8">This section can help you keep track of your time. Create pomodoro timers, countdowns, and more!</p>

                            <button className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 my-3 rounded-full">Add Timer</button>
                            <p className="text-xs">or select one of the presets below</p>

                            <div className="flex sm:flex-row flex-wrap flex-col gap-2 w-full p-3">

                                <div className = "flex flex-row sm:w-fit w-full sm:flex-wrap gap-2">
                                    <div className="bg-white p-2 rounded-md ring-1 ring-slate-300 hover:shadow-md hover:cursor-pointer sm:w-48 w-1/2">
                                        <p className="text-sm font-semibold">Pomodoro</p>
                                        <p className="text-xs text-gray-500">perfect for productivity</p>
                                        <p className="text-xs text-gray-500 pt-2">25 minutes</p>
                                </div>
                                    <div className="bg-white p-2 rounded-md ring-1 ring-slate-300 hover:shadow-md hover:cursor-pointer sm:w-48 w-1/2">
                                        <p className="text-sm font-semibold">Break</p>
                                        <p className="text-xs text-gray-500">time to relax</p>
                                        <p className="text-xs text-gray-500 pt-2">5 minutes</p>
                                </div>
                                </div>

                                <div className = "flex flex-row sm:w-fit w-full sm:flex-wrap gap-2">
                                    <div className="bg-white p-2 rounded-md ring-1 ring-slate-300 hover:shadow-md hover:cursor-pointer sm:w-48 w-full">
                                        <p className="text-sm font-semibold">Cooking</p>
                                        <p className="text-xs text-gray-500">time to cook</p>
                                        <p className="text-xs text-gray-500 pt-2">1 hour</p>
                                </div>
                                </div>
                                    <div className="bg-white p-2 rounded-md ring-1 ring-slate-300 hover:shadow-md hover:cursor-pointer sm:w-48 w-full">
                                        <p className="text-sm font-semibold">Meditation</p>
                                        <p className="text-xs text-gray-500">Relax and take a break</p>
                                        <p className="text-xs text-gray-500 pt-2">10 minutes</p>
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="sm:w-full w-full h-1/4 bg-slate-100 sm:flex-col gap-4 p-4">
                        <h2 className="text-md font-semibold py-2">Active Timers</h2>
                        {timers.map((timer) => (
                            <div key={timer.id} className="bg-white shadow-md p-4 rounded-md mb-4 ring-1 ring-slate-300 sm:w-96 w-full">
                                <h2 className="text-lg font-semibold">{timer.title}</h2>
                                <p className="text-sm text-gray-500">{timer.duration}</p>
                                <div className="flex justify-between gap-2">
                                    {timer.active ? (
                                        <button className="bg-purple-200 text-purple-500 text-sm px-2 py-1 rounded-full mt-3">Stop Timer</button>
                                    ) : (
                                        <button className="bg-purple-500 text-white text-sm px-2 py-1 rounded-full mt-3">Start Timer</button>
                                    )}
                                    <button className="bg-transparent hover:bg-purple-200 hover:text-purple-500 text-slate-500 text-sm px-2 py-1 rounded-full mt-3">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )
                : (
                    <div className="flex flex-col items-center justify-center gap-2 text-slate-500">
                        <h1 className="font-semibold text-md items-center flex flex-col gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>


                            No active timers</h1>
                        <p className="text-xs">Start a timer to view it here!</p>
                        <button className="bg-purple-600 text-white text-sm px-2 py-1 rounded-full mt-3">Start Timer</button>
                    </div>
                )}
        </div>
    );
}

export default TimerView;