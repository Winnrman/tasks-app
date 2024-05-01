const Terminal = (props) => {

    const handleCommand = (e) => {
        e.preventDefault();
        const command = document.getElementById("terminal_input").value;
        document.getElementById("terminal_input").value = "";
        const output = document.getElementById("terminal_output");
        const outputContent = document.getElementById("output_content");
        const outputDiv = document.getElementById("output");

        if(command === "help"){
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Available commands:</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>help - Display available commands</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>clear - Clear the terminal</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>echo [text] - Display text</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>date - Display current date and time</p>";
            output.innerHTML += "<p class = 'text-xs text-slate-500'>exit - Close the terminal</p>";
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
            outputDiv.style.display = "none";
        }
        else if(command === "tasks"){
            {props.tasks.length == 0 ? <p class = 'text-xs text-slate-500'>No tasks found</p> :
            props.tasks.map((task) => (
                <p class = 'text-xs text-slate-500'>{task.title}</p>
            ))}
        }
        else if(command.includes("addtask")){
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Correct usage of addtask: addtask [title] [description]</p>";
        }

        else if(command === "deletetask [id]"){
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Task deleted</p>";
        }
        
        else{
            output.innerHTML += "<p class = 'text-xs text-slate-500'>Command " + command + " not found</p>";
        }
    }

    return(
        <>
        <div id = "terminal_output" className = "p-2 rounded-md bg-white font-mono ring-1 ring-slate-300 h-96 gap-1 flex flex-col overflow-scroll">
            <p className = "text-xs text-slate-500">tasks_app_terminal_v1.0</p>
            <p className = "text-xs text-slate-500">Type 'help' for a list of available commands</p>
        </div>
        <form onSubmit = {handleCommand} id = "terminal_form" className = "flex flex-col gap-2">
        <input id = "terminal_input" type = "text" className = "w-full font-mono p-2 rounded-sm text-xs bg-white ring-1 ring-slate-300 mt-2" placeholder = "Enter command..."/>
        </form>
        </>
    )
}

export default Terminal;