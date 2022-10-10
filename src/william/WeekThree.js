
import image2 from '../img/william-3.gif'



const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Three</h2>
        <h3>2022, Sep 29th</h3>

        <p>In week 3, I focused on working on the GDD with the team. I worked on refining the gameplay modes and core gameplay, and fabricating a flowboard for it. We clarified what the game progression would be like, and how it would reflect the gameplay and the experience for the users. During the process, we also thought it would be a good idea to change the theme of the stage every level while implementing a light mechanic. For example, the game will start in the village, where there are lights around generously and monsters are more human-like to represent the villagers. When the player moves to the next stage, it will be in an underground cave, limiting the light source which will increase the difficulty. This would allow the players to be eased into lack of light, and learn how to combat in those environments.</p>
        <p>Also, I worked on creating a 8-direction sprite for the main character. I decided to make a chibi character with a big head and small body to better represent a top-down perspective. In addition, this character’s arm is not drawn. This is because it would be drawn on the weapon the character is wielding. This makes the creation of sprites simpler as we can keep the weapon and character animation separate, removing the need of creating new sprites for every animation for each weapon. Finally, this will make implementing new weapons to the game down the road much easier for us.</p>

        <img src={image2} alt="example"
             style={{height: "300px"}}/>

    </div>
}

export default WeekThree;