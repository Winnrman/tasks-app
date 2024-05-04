//import firebase from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";

import { db } from "../Firebase";

const Terminal = (props) => {


    const [tasks, setTasks] = useState([]); //initialize tasks state
    const inputRef = useRef(null);

    useEffect(() => {
        getTasks();
    }, []);

    async function getTasks() {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasksData = querySnapshot.docs.map(doc => doc.data());
        setTasks(tasksData);
    }


    //create a dictionary of help commands
    const helpCommands = {
        "help": "Display available commands",
        "clear": "Clear the terminal",
        "echo [text]": "Display text",
        "list_tasks": "List all tasks",
        "date": "Display current date and time",
        "exit": "Close the terminal",
        "addtask": "Add a new task"
    }

    async function handleCommand(e) {
        e.preventDefault();
        const command = inputRef.current.value.trim();
        inputRef.current.value = "";
        const output = document.getElementById("terminal_output");

        if(command === "help"){
            output.innerHTML += "<p class = 'text-xs text-slate-500'>[help] Available commands:</p>";
            for (const [key, value] of Object.entries(helpCommands)) {
                output.innerHTML += `<p class = 'text-xs text-slate-500'>${key} - ${value}</p>`;
            }
        }else if(command === "clear"){
            output.innerHTML = "<p class = 'text-xs text-slate-500'>tasks_app_terminal_v1.0</p>";
        }else if(command.includes("echo")){
            const text = command.split(" ")[1];
            output.innerHTML += `<p class = 'text-xs text-slate-500'>${text}</p>`;
        }else if(command === "date"){
            const date = new Date();
            output.innerHTML += `<p class = 'text-xs text-slate-500'>${date}</p>`;
        }else if(command === "exit"){
            output.innerHTML += "<p>Terminal closed</p>";
        }
        else if(command === "list_tasks"){
            // getTasks();
            output.innerHTML += "<p class = 'text-xs text-slate-500'>[list_tasks] Tasks:</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>--------------------</p>";

            tasks.map((task) => {
                output.innerHTML += `<p class = 'text-xs text-slate-500'>${task.id} ${task.title} | ${task.description} | ${task.due} | Priority: ${task.priority} | Shared: ${task.shared} | Completed: ${task.completed}</p>`;
            });
        }
        //the correct format of the addtask command is addtask -t [title] -d [description] -D [due] -p [priority] -s [shared] -c [completed]
        else if (command.includes("addtask")) {
            const parts = command.match(/(?:[^\s"]+|"[^"]*")+/g);
            const flags = ["-t", "-d", "-D", "-p", "-s", "-c"];
            const values = {};
        
            for (let i = 0; i < parts.length; i++) {
                if (flags.includes(parts[i])) {
                    let value = parts[i + 1];
                    if (value.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                    }
                    values[parts[i]] = value;
                }
            }
        
            if (Object.keys(values).length === flags.length) {
                const newTask = {
                    title: values["-t"],
                    description: values["-d"],
                    due: values["-D"],
                    priority: values["-p"],
                    // these final two are boolean values
                    shared: values["-s"] === "true",
                    completed: values["-c"] === "true"
                };
        
                const docRef = await addDoc(collection(db, "tasks"), newTask);
                output.innerHTML += "<p class='text-xs text-slate-500'>Task added with ID: " + docRef.id + "</p>";
                getTasks();
            }
            else{
                output.innerHTML += "<p class = 'text-xs text-slate-500'>Incorrect command format for addtask: " + command + command.split(" ").length + "</p>";
                output.innerHTML += "<p class = 'text-xs text-slate-500'>The correct format of the addtask command is addtask -t [title] -d [description] -D [due] -p [priority] -s [shared] -c [completed]</p>";
            
            }
        }
        else if(command.includes("addtask") && command.split(" ").length !== 22){
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Incorrect command format for addtask: " + command + command.split(" ").length + "</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>The correct format of the addtask command is addtask -t [title] -d [description] -D [due] -p [priority] -s [shared] -c [completed]</p>";
        }

        else if(command.includes("deletetask") && command.split(" ").length === 2){
            const id = command.split(" ")[1];
            await deleteDoc(doc(db, "tasks", id));
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Task " + id + " deleted</p>";
        }
        
        else{
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Command '" + command + "' not recognized as an internal or external command</p>";
        }
    }

return (
    <>
        <div id="terminal_output" className="p-2 rounded-md bg-white font-mono ring-1 ring-slate-300 h-96 gap-1 flex flex-col overflow-auto">
            {/* Render tasks here */}
        </div>
        <form onSubmit={handleCommand} id="terminal_form" className="flex flex-col gap-2">
            <div className="bg-white ring-1 ring-slate-300 rounded-md px-2 mt-2 flex items-center">
                <p id="output" className="text-xs text-slate-400">&gt;</p>
                <input ref={inputRef} type="text" className="w-full font-mono p-2 focus:outline-none rounded-sm text-xs bg-white" placeholder="Enter command..." />
            </div>
        </form>
    </>
);
}

export default Terminal;