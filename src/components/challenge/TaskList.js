import "./TaskList.css";
import { getAuth } from "firebase/auth";
import { getDatabase, set, ref, onValue, remove } from "firebase/database";
import { useState, useEffect } from "react";
import { isDocument } from "@testing-library/user-event/dist/utils";

const TaskList = (props) => {
    const auth = getAuth(); 
    const db = getDatabase(); 
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        readCompleted()
        .then((res) => {
            console.log(res);
            loadProgress(res);
        })
    }, [])
    
    function readCompleted() {
        return new Promise((resolve, reject) => {
            if (user) {
                var node = ref(db, "users/" + user.uid + "/completed"); 
                var stats = [];
                onValue(node, (snapshot) => {
                    snapshot.forEach(function(childSnapshot) {
                    var item = childSnapshot.val(); 
                    stats.push(item);
                    })
                    console.log(stats);
                    resolve(stats);
                })
            }
            
        })
    }
    function loadProgress(data) {
        var tasks = document.getElementsByClassName("task-entry");
        var pieces = document.getElementsByClassName("jigsaw-piece"); 
        var completeBtns = document.getElementsByClassName("complete-task");
        for (let i = 0; i < data.length; i++) {
            var completedIndex = parseInt(data[i].id); 
            tasks[completedIndex].style.backgroundColor = "rgb(170, 137, 109)";
            pieces[completedIndex].style.backgroundColor = "transparent";
            completeBtns[completedIndex].style.backgroundColor = "#426c54";
        }
    }
    function completeTask(id) {
        var taskEntry = document.getElementsByClassName("task-entry")[id];
        var jigsawPiece = document.getElementsByClassName("jigsaw-piece")[id];
        var completeBtn = document.getElementsByClassName("complete-task")[id];
        if (taskEntry.style.backgroundColor === "rgb(255, 253, 208)") {
            taskEntry.style.backgroundColor = "rgb(170, 137, 109)";
            jigsawPiece.style.backgroundColor = "transparent";
            completeBtn.style.backgroundColor = "#426c54";
            if (user) {
                var today = new Date().toDateString(); 
                var node = ref(db, "users/" + user.uid + "/completed/" + id);
                var completed = {status: "complete", date: today, id: id};
                set(node, completed);
            }
        } else {
            taskEntry.style.backgroundColor = "rgb(255, 253, 208)"
            jigsawPiece.style.backgroundColor = "#426c54"
            completeBtn.style.backgroundColor = "#ededed";
            if (user) { 
                var node = ref(db, "users/" + user.uid + "/completed/" + id);
                remove(node);
            }
        }
        
    }
    function toggleTaskDesc(id) {
        var desc = document.getElementsByClassName("task-description")[id];
        if (desc.style.display === "none") {
            desc.style.display = "block";
        } else {
            desc.style.display = "none";
        }
    }
    return(
        <>
        {props.tasks.map((task, index) => (
            <div key={task.id}>
                <button className="task-entry" onClick={() => toggleTaskDesc(index)} >{task.name}</button>
                <div className="task-description" style={{display:"none"}}>
                    <button onClick={() => completeTask(index)} className="complete-task">I completed this task</button>
                </div>
            </div>
            
        ))}
        
        </>
    )
}
export default TaskList; 