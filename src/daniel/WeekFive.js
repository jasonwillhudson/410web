import image1 from '../img/daniel-6-1.JPG'
import image2 from '../img/daniel-6-2.JPG'
import image3 from '../img/daniel-6-3.JPG'




const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Five</h2>
        <h3>2022, Oct 13th</h3>
        <p>We're concentrating more on interior design this week. I had installed prefab dungeon doors in each room, including doors facing east and west and north and south. For each room, the door is supposed to be locked. The room doors will first be closed and then open once the player has defeated all of the adversaries. Furthermore, until every room in the level has been cleared of foes, the doors to the boss rooms will remain locked. The door prefabs all have their own animator controllers that handle the open and closing animation. In order to trigger certain behaviours, such as being locked off when players enter, being open when they enter, or eliminating all opponents, Collison's detraction is implemented on the door prefabs. Additionally, I added this week that the dungeon lights in the dungeon rooms would gradually become apparent when the player first enters the room, highlighting the game's mythological tone and preventing any details from being revealed while the player is passing through the corridor.The dungeon rooms are not all visible from the start, and players only reveal dungeon rooms as they progress through the dungeon in order to create a unique challenge for the player when they enter into each randomness.</p>
        <p>Randomness gameplay is successfully built up on the room generator. However, Randomness may cause a bad gameplay experience if the player can't achieve a certain objective from the gameplay. We should consider the size of the map. We need to have an iteration process to gain feedback from the player to know if the map is too big to explore or not in order to have an adjustment for the map.</p>


        <img src={image1} alt="example"
             style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image2} alt="example"
             style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image3} alt="example"
             style={{height: "300px"}}/>

    </div>
}

export default WeekThree;