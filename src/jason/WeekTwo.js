import image1 from "../img/jason-2-1.png";
import image3 from "../img/jason-2-3.png";
import image2 from "../img/jason-2-2.png";

const WeekTwo = () => {

    return <div className="blog-content">
        <h2>Week Two</h2>
        <h3>2022, Sep 22nd</h3>
        <p>This week, I mainly have the contributions on creating a character controller for our game. Since our team
            hasn’t created the set of sprites, I used some online asset instead. They are replaceable and I could switch
            them out with our own design later. I followed the tutorial on Udemy to initialize the player object, and
            then I wrote the script for player movement and idle state. Moreover, I also set up the different animations
            that will play loop of animation depending on character states such as idle, moving left, moving up, moving
            right and moving down. After setting up the animation, I created an animation controller which allows script
            to switch between different animation based on the states.
        </p>
        <p>
            Besides setting up the character controller, I also review the basic tutorial for Unity which would help my
            work later. The knowledge includes colliders, different type of component, game objects and the syntax for the C#
            script. I also help the team set up the GitHub and give my teammates a tutorial on how to push and pull the
            files from the repository.
        </p>

        <img src={image1} alt="example" style={{display: "inline-block", height: "200px", marginRight: "10px"}}/>
        <img src={image3} alt="example" style={{display: "inline-block", height: "200px", marginRight: "10px"}}/>
        <img src={image2} alt="example" style={{height: "200px"}}/>
    </div>
}

export default WeekTwo;