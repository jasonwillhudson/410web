
import image2 from '../img/daniel-7-1.JPG'




const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Seven</h2>
        <h3>2022, Oct 27th</h3>

        <p>In this week, I implemented the object pool manager in our game. The functionality of pool manager is used for managing any prefabs that we want to create an object pool for.  Object pooling is a creation of a design pattern that can be used to help optimize your performance involving instances in a number of game objects known as the object pool. This is often done at the start of the game and then the game objects in the pool can be used throughout the game. So during the game, rather than creating and destroying game objects when they're needed, there are quiet game objects that are taken from the object hall and activated for use. And when it's no longer required, it's deactivated. The game objects in the objects pool are continually recycled and reused, rather than creating and destroying new game objects. Object pool is used for the range types of enemies, so the bullets are instantiated in an object's pole as the game starts. When a bullet needs to be fired, a disabled bullet is selected from the object. Pool is then enabled and fired when it hits the target or goes off screen, is disabled and returned to the object pool so that it can be reused. So rather than tens of thousands of bullet game objects being created and destroyed, only a small number of pulled objects earthy in this example are created when the game starts and are then reused. Further, I implemented the enemy fire weapon, to enable the enemies to fire their weapon at the play. I updated the enemy, detailed scripts of all objects to reference the newly created enemy weapons and configure the enemy weapon settings for each enemy. The ability for some of our enemies, to launch patsies of ammo rather than fire weapons.</p>

            <p>Difficulty should be adjusted, the gameflow should stick with ramps, provided intensity and rest. The closer monster room should only respawn a single enemy, the harder monster room should set up farther out from the initial room. Reward system should be discussed in the next room, what timing and where should the player gain the reward in order to arouse them to keep playing.</p>


        <img src={image2} alt="example"
             style={{height: "300px"}}/>

    </div>
}

export default WeekThree;