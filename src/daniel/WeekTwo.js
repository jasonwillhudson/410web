import image1 from '../img/daniel-2-1.JPG'
import image2 from '../img/daniel-2-2.JPG'
import image3 from '../img/daniel-2-3.JPG'
import image4 from '../img/daniel-2-4.JPG'

const WeekTwo = () => {

    return <div className="blog-content">
        <h2>Week Two</h2>
        <h3>2022, Sep 22nd</h3>
        <p>We have the concept to create a 2D Top-down view game after the initial brainstorming and presentation. Each
            team member received a separate portion of the task, such as the graphic, narrative, and development
            portions.
            The creation of a game mapping was under my purview. The game mapping, dungeon rooms will be included an
            entry, which the player starting point as well as the responding point: a corridors which is connecting
            different types of rooms; A small room, has a small amount of foes; A middle room, has moveable objects to
            break, player can pick up items after destroy the objects; A boss room, has a Boss.
            I was trying to create a map by using the tile palette. I was trying to create a map using layers and
            sorting layers, by creating different layers to distinguish different types of tiles into a certain layer
            such as ground layers, front layers, and collision layers</p>
        <p>For the level design, a lot of things should be adjust such as, how many foes and what types of foes(melee
            and ranged) should be assign in the rooms. What breakable objects should we put in the room? How dark will
            be the room looks like and how many rooms will be in level1 to 3? So, in the next week, we will figured out
            those questions during the meetings.
            Further, for our initial idea, once the player is dead, the map layer will be generated randomly as part of
            our game. Therefore, it is necessary to create Room templates that store different levels so that the
            mappings are randomly generated. I'm going to dig into online tutorials and try to create an editor to have
            the ability to generate random maps.</p>


        <img src={image1} alt="example" style={{display: "inline-block", height: "300px", marginRight: "50px", marginBottom:"30px"}}/>
        <img src={image2} alt="example" style={{height: "300px", marginBottom:"30px"}}/>
        <img src={image3} alt="example" style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image4} alt="example" style={{height: "300px"}}/>
    </div>
}

export default WeekTwo;