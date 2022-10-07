import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Four</h2>
        <h3>2022, Oct 6th</h3>

        <p>This week I contributed to the ideation of special skills and the buffs that the character might have in the game. For example, some special effect such as a chained attack causes damage to the enemies around the enemy the player currently attacks. I also applied the sprites our team currently has into the game. I replaced the sprites I used before but the position is a little off during the animation. So I also adjusted all the frames of the moving and idle animation for the character. Moreover, I also implemented the attack animation and the map of the mouse click input for the character's attack on Unity. </p>
        <p>We met some technique issues when merging the character and the map. I decide to help on solving the issues. After a series of debugging and testing, I notice it was a problem with the order that the script executed. A script for a moving event has a class claimed inside, and the script initializes the class and is executed after the moving event script causes the null pointer error. With the tutorial online, I rearranged the scripts' execution order and solved the problem. </p>
        <p>Moving to the next step, I am planning on improving the attack skills and implementing the buffs or debuffs to the character. I would also implement the light effect around the character if time is allowed. If I have extra time, I might help on creating the monster and their scripts. By the next iteration, we plan to have the monster on the map moving around and damaging the player if the character collides with them, or doing damage if the player clicks the mouse for attack and the monster is in the skill range.</p>

    </div>
}

export default WeekThree;