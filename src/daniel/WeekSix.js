import image1 from '../img/daniel-6-4.JPG'
import image2 from '../img/daniel-6-5.JPG'




const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Six</h2>
        <h3>2022, Oct 20th</h3>

        <p>This week, I finished implementing the prefabs for the enemies, including setting up various boss kinds and foes using the same base. Prefab variants are relatively different enemy and boss characters, and both assets for each enemy carry the configuration data they require. I also created a basic enemy class and script for objects, enemy detail class. Additionally, I provide path-finding AI for the enemies so that they may avoid fixed obstacles and pursue the player until they are killed. I introduced preferred paths to the game in order to implement this behaviour for path finding. These paths are displayed for the adversary in each dungeon level, allowing it to navigate all known obstacle areas. I also implemented the functionality that is able to define how enemies are spawned in different rooms and use of material effect when we spawn them. In the level design, I first define which enemies should be spawned in different dungeon rooms in order to create ramps, the intensity and rest of the game, I also added the template and variation in the spawning, in order to create some randomness. Each templates will define which enemies are to be spawned for different levels and the spawn parameters. A key concept in rogue like games is randomness, both for dungeon generation and for enemy spawn in.</p>
        <p>We only brainstorm a  few types of enemies built with simple machines, which are near, walk toward the player, and far, shot from long range. In the enemies design, we can go deeper in order to create more dynamic gameplay, for example, a mini boss that can have the abilities that respawn a mini enemy when it gets killed. Apply more complex mechanics to signal enemies.</p>

        <img src={image1} alt="example"
             style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image2} alt="example"
             style={{height: "300px"}}/>

    </div>
}

export default WeekThree;