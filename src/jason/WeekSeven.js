import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Seven</h2>
        <h3>2022, Oct 27th</h3>

        <p>This week I mainly focus on improving the health-dropping functions. To make sure that the monster only drops health points during attack status instead of drop health points whenever a collide is detected with a player weapon, I set up a Boolean variable in the player class script which will be true when the player is in attack status and false when the player attack ends. Then in the enemy script, I implemented a function to get the status from the player script attach to the player game object and reduce the enemy’s health point when the enemy collided with the player weapon and the status of attack is true. </p>

        <p>After implementing the functions, I realized two problems. Firstly, the attack triggers health points as long as updating period which causes the enemy health points to keep dropping during frame updates in the game and it makes the damage incorrect. To fix this problem, added a Boolean variable in the health script which will turn to true when the enemy collides with the player's weapon and makes the reduce health points function only execute when it’s false (collided for the first time). The variable will be reset to false after the object exit the colliding area. Moreover, I also added a function in the enemy script which destroys the enemy game object whenever the health points reduce to 0. </p>

        <p>From the feedback from test sessions this week, testers gave us feedback that our game lacks visual feedback to indicate that the player is attacked or the enemy is being attacked. For next week, I plan to add some visual feedback to improve the player experience and make the fighting more exciting. </p>


    </div>
}

export default WeekThree;