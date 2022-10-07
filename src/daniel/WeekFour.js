import image1 from '../img/daniel-4-1.JPG'
import image2 from '../img/daniel-4-2.JPG'




const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Four</h2>
        <h3>2022, Oct 6th</h3>
        <p>We are delving deeper into our player mechanics this week and considering giving our player an upgrading
            system. Once the player has completed the objective of removing all of the emeries from the room, they are
            free to upgrade their weapons and wisp talents by following up the level tree. The player has the option of
            selecting either a upgrading a weapon or a wisp skill. Additionally, we talked about the new ability of the
            wisp to be launched into a specified cursor point by pressing the keyboard, giving the emery a stunt
            effect.</p>
        <p>In this week, I created a script and edited our game manager scripts, playerdetail script, to populate the CM
            Target Group with the player position so that the camera follows the player and will instantiate the current
            player prefab into the dungeon entrance room. I had set the aiming cursor as it targets so that when we move
            the cursor on the screen, cinemas screen is going to follow both the cursor and the player so that we can
            look around the dungeon using the curser.</p>
        <p>The thoughts and ideation of the weapon and wisp talents are workable, and the upgrading system advances our
            project's gameplay experience. However, creating an upgrade system requires more iterations, which takes
            more time to accomplish because it involves a GUI, a level system, sprites, and scripts. I'll strive as hard
            as I can to accomplish the goals, but if there isn't much time, I'll propose choosing just one fundamental
            ability to the player—either upgrading weapons or wisp skills—or developing a complete upgrade system.</p>


        <img src={image1} alt="example"
             style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image2} alt="example"
             style={{height: "300px"}}/>

    </div>
}

export default WeekThree;