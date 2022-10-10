import image1 from '../img/william-4-1.gif'
import image2 from '../img/william-4-2.gif'




const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Four</h2>
        <h3>2022, Oct 6th</h3>
        <p>In week 4, we as a group ideated on the skills, mechanics, and monsters that will be implemented into the game. We wanted to focus on our original goal which was a rogue-like game where the player can obtain upgrades, stacking the effects, and becoming stronger by combining different upgrades. From Alan and I’s past experience with various games, we were able to bring unique mechanic ideas into our game. One of my favorite mechanics is where the player can throw and recall the combat buddy wisp. This originated from the idea that we wanted to implement more lighting mechanics, and make both weapon upgrades and wisp upgrades viable for the gameplay. We plan to add many more skills to make the gameplay more dynamic and challenging at the same time.</p>
        <p>In addition to last week’s sprites, I created sprites for basic character animations such as idle and running. This took some time since I had to create each animation for all 8 directions. However, since the base sprite of the character is done, I believe creating animations and adding effects will be a smoother process.
        </p>


        <img src={image1} alt="example"
             style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image2} alt="example"
             style={{height: "300px"}}/>

    </div>
}

export default WeekThree;