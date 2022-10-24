import "./Challenges.css";
import TaskList from "../../components/challenge/TaskList";
import Jigsaw from "./Jigsaw";

const Challenges = () => {
    const tasks = [
        {
            "name": "Pick up 20 pieces of trash", 
            "desc": "Pick up 20 pieces of trash that you see lying on the ground or in the grass.", 
            "points": 2, 
            "id": 1, 
        }, 
        {
            "name": "Use public transport instead of driving", 
            "desc": "Ride the bus, take the light rail, or carpool instead of driving your car today",
            "points": 2, 
            "id": 2, 
        },
        {
            "name": "Upcycle an old item", 
            "desc": "Repurpose an old item in your home into something new! Examples: turning plastic bags into a plastic mat, making a tote bag out of old clothes",
            "points": 2, 
            "id": 3, 
        },
        {
            "name": "Plant something!", 
            "desc": "Did you know that even one houseplant in a room improves indoor air quality by 25%? Plant something inside (or outside) today! Examples: pothos, zinnias, ferns",
            "points": 2, 
            "id": 4, 
        },
        {
            "name": "Read your city's manual on trash sorting", 
            "desc": "Not every city processes trash the same way! Find UW's disposal guide here: https://facilities.uw.edu/services/recycling/disposal-guide",
            "points": 2, 
            "id": 5, 
        },
        {
            "name": "Make your own worm bin", 
            "desc": "Worm bins reduce food waste and provide nutrient rich, biologically beneficial soil. Create your own worm bin with a bin, dirt, food scraps, and worms",
            "points": 2, 
            "id": 6, 
        },
        {
            "name": "Walk/bike to your next destination", 
            "desc": "Instead of using transportation that releases fossil fuels this week, walk or bike to your destinations",
            "points": 2, 
            "id": 7, 
        },
        {
            "name": "Go vegetarian for a day", 
            "desc": "Don't eat meat for a day! Try recipes with lentils or tofu",
            "points": 2, 
            "id": 8, 
        },
        
        {
            "name": "Donate your old clothes", 
            "desc": "Have clothes that you don't wear anymore? Donate them to your local shelter or thrift store",
            "points": 2, 
            "id": 9, 
        },
        {
            "name": "No plastic for a day", 
            "desc": "Don't use one-time plastic for the day! Examples of one-time plastic: plastic water bottles, plastic bags",
            "points": 2, 
            "id": 10, 
        },
        {
            "name": "Go thrifting", 
            "desc": "Need to switch up your wardrobe? Go to your local thrift store and engage in second-hand shopping",
            "points": 2, 
            "id": 11, 
        },
        {
            "name": "Pass on the challenge", 
            "desc": "Tell your friends to participate in this challenge!",
            "points": 2, 
            "id": 12, 
        },
    ]; 
    
    return(
        <>
        <h2 className="heading" style={{marginTop: "50px"}}>THE CHALLENGE</h2>
        <h3 className="heading" style={{textAlign:"center"}}>complete one green habit per week for the next quarter...</h3>
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