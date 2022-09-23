import image1 from '../img/daniel-1-1.JPG'
import image2 from '../img/daniel-1-2.JPG'

const WeekOne = () => {

    return <div className="blog-content">
        <h2>Week One</h2>
        <h3>2022, Sep 11th</h3>
        <p>The first game proposal and presentation slides was completed in week 1 when we came up with the best ideas
            and concepts for our project. I'm so glad that everyone are passionate about 2D roguelike game and dying to
            execute the game project. Everyone brings brilliant, workable ideas to enhance the gaming experience. </p>
        <p>In week1, I provided an executable game development journey of how we actually make 2d games during this
            semester and I suggested the ideas for each task from the journey, including the machines, picking system,
            health system, combat system, GUI, map settings. I also proposed the storyline for our project.</p>
        <p>We are planning to working on the combat systems, which calls for a complicated animation. Drawing each frame
            of the animation takes a lot of work and time because top-down perspective games need to support at least
            eight orientations, including up, down, left, left-up, left-down, right-up, and right-down. Meanwhile, we
            had to create different player and enemies, foe/boss states such as idle, attack, walking, jumping,
            dodging/dashing, and the ideal animation frame rate of each state will be 5 to 10 or maybe even more,
            roughly over 100 sprite sheets are required to create. Since none of us are artists, it presents
            difficulties and challenges for us. If only one person contributes to the workload, it will be too much. I
            will assist my teammate with the animation task since I’ve some experience creating the sprite sheet. The
            ideal way is using extension tools like “pixelate”, by using the 3d model, to convert 3D animation into 2d
            pixel art sprite sheets. It will be more efficiency instead of just drawing the sprite sheet one by on
            hand.</p>

        <img src={image1} alt="example" style={{display:"inline-block", height:"400px", marginRight:"50px"}}/>
        <img src={image2} alt="example" style={{height:"400px"}}/>
    </div>
}

export default WeekOne;