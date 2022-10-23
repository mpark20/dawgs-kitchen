import "./Challenges.css";
import TaskList from "../../components/challenge/TaskList";
import Jigsaw from "./Jigsaw";

const Challenges = () => {
    const tasks = [
        {
            "name": "Pick up 20 pieces of trash", 
            "points": 2, 
            "id": 1, 
        }, 
        {
            "name": "Use public transport instead of driving", 
            "points": 2, 
            "id": 2, 
        },
        {
            "name": "Upcycle an old item", 
            "points": 2, 
            "id": 3, 
        },
        {
            "name": "Plant something!", 
            "points": 2, 
            "id": 4, 
        },
        {
            "name": "Read your city's manual on trash sorting", 
            "points": 2, 
            "id": 5, 
        },
        {
            "name": "Make your own worm bing", 
            "points": 2, 
            "id": 6, 
        },
        {
            "name": "Walk/bike to your next destination", 
            "points": 2, 
            "id": 7, 
        },
        {
            "name": "Go vegetarian for a day", 
            "points": 2, 
            "id": 8, 
        },
        
        {
            "name": "Donate your old clothes", 
            "points": 2, 
            "id": 9, 
        },
        {
            "name": "No plastic for a day", 
            "points": 2, 
            "id": 10, 
        },
        {
            "name": "Go thrifting", 
            "points": 2, 
            "id": 11, 
        },
        {
            "name": "Pass on the challenge!", 
            "points": 2, 
            "id": 12, 
        },
    ]; 
    
    return(
        <>
        <h2>THE CHALLENGE</h2>
        <h3 style={{textAlign:"center"}}>complete one green habit per week for the next quarter...</h3>
        <div className="challenges-container">
            <div className="checklist">
                <h2>CHALLENGES</h2>
                <hr className="solid"/>
                <div className ="hitest">
                    <div className ="individualcl">
                        <TaskList tasks={tasks}/>
                    </div>
                </div>
            </div>

            <div className="puzzle">
                <h2>PROGRESS PUZZLE</h2>
                <hr className="solid"/>
                <Jigsaw/>
            </div>
        </div>
        </>
    )
}
export default Challenges; 