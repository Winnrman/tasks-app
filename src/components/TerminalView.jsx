import React from 'react';
import Terminal from './Terminal';

const TerminalView = () => {
    return (
        <div className="terminal-view bg-slate-100 w-full h-screen p-2">
        <Terminal tasks = {[]}/>
        <p className = "text-xs text-slate-500 mt-2">Press Enter to submit command</p>

        <div id = "output" className = "hidden">
            <p className = "text-xs font-semibold text-slate-500 mt-2">Output</p>
            <div id = "output_content" className = "text-xs text-slate-500 mt-2 p-2 h-32 bg-white ring-1 ring-slate-300 rounded-md overflow-y-auto">
            </div>
            </div>
        </div>
    );
    }

export default TerminalView;