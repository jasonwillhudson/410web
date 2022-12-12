import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Eleven</h2>
        <h3>2022, Nov 24th</h3>

        <p>This week, I created different boss attack prefabs and test them with the player to ensure they work properly on attacking the player. The first attack I created is the area explosion attack. In the beginning, I was going to make an area attack with lighting from the sky, but the visual effect I found does not work and hence I decide to switch it to the explosion. I created a trigger collider in the explosion which detects if the player is inside the affected area at the beginning of the explosion. The second attack I created is the bullet rain, which has multiple bullets generated and spread randomly forward. For this skill, I added the trigger collider on the bullet, and in addition, I added a script which destroys the bullet when it collides with an object in the scene and disappears after 5 seconds if no collision in between. The bullet is generated every 0.2s and the direction that they will move forward to is randomly generated when the bullet game object is initialized. For the third attack, I used the sword spirits we found before. The boss will rotate the sword and a circle collider is added to this skill to detect if the player is inside of the rotation area. After creating all the skill prefabs, I wrote a script and attached them to detect if their trigger collider collided with the player, if so, the player will drop one health point. </p>

        <p>For next week, I decided to finish the Boss game object with the skill prefabs I created this week. For every attack, I also want to add a period of effect before they are created to show players what attack is going to be released so they can have time to dodge the skill. </p>


    </div>
}

export default WeekThree;