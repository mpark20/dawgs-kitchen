import "./Home.css";
import Mascot from "../../img/little-man.png";
const Home = () => {
    return(
        <>
        <h1>Home</h1>
        <div id="wrapper">
        <div id="wrapper1">
        <div>
            <img src={Mascot} width="150" />
        </div>
        <div className="textbox">
            Human activity has driven climate change since the 19th century, and its devastating effects 
            have been especially prominent the past few years. This year, Seattle has been plagued by torrential 
            rain, spring snows, and smoke from forest fires that led the city to reach the world air quality in 
            the entire world.
        </div>
        </div>

        <div id="wrapper2">
        <div className="textbox">

            While climate change can't be stopped overnight, we can take small steps to reduce our carbon 
            footprint and educate each other about the detriments of fossil fuels. We can't do it alone, but 
            together, we can work to sustain the environment for future generations.
        </div>
        <div>
            <img src={Mascot} width="150" style={{float:"right"}}/>
        </div>
        </div>

        <div id="wrapper3">
        <div className="textbox" style={{margin:"3%"}}>
            Challenge yourself to complete these tasks and reveal the surprise!
            <button className="logout-btn" style={{padding: "8px 16px", fontSize: "20px"}}><a href="#/challenges">BEGIN</a></button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Home; 