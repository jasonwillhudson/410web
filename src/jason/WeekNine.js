import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Nine</h2>
        <h3>2022, Nov 10th</h3>

        <p>This week I tried to add a reward system to the game. The first reward I thought about is the portion that helps the player to recover health points. I created a health portion prefab which has a portion spirit and a trigger collider. In the player script, I added the function of adding one health point to the player’s health point variable and place it inside the trigger enter function. The health portion game object supposes to be gone after consumption. Hence, I added another function that destroys the portion game object the player collides with after increasing the health point. </p>

        <p>Another reward I thought of is the chest which enhances the player’s attack. I implemented it similarly to the portion’s implementation. The only difference is that I added an attack damage variable in the player script which is used to decide how much enemy health points should be reduced when the player initializes the attack, and colliding with the chest will increase the value of this attack damage variable. To identify whether the object player collides with is the health portion or chest, I added two different tags on them, and check the tag name of the object when colliding to decide which function to call. </p>

        <p>After a few tests, I noticed that the game is still a little bit too challenging due to the health point drop speed. I am thinking about adding a feature that the enemy will drop the item at a certain rate when they get killed to reduce the difficulty level. Moreover, the enemy suddenly disappearing after being killed looks a little bit weird and I plan to add the visual effect when they disappear to make the experience smooth with clear feedback. </p>


    </div>
}

export default WeekThree;