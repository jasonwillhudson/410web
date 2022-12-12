import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Ten</h2>
        <h3>2022, Nov 17th</h3>

        <p>This week I mainly contributed on create the portion drop function and the enemy’s die effect. I also implemented the player dash function this week. After watching a few tutorials, I came up with an idea to implement this function, which is to create a portion object as the parent object at the dying enemy location. In this way, the enemy object destroy will not destroy the portion object to create the portion-dropping feature. For the dropping rate, I added a variable which will randomly generate an integer number before the enemy die. If the number is bigger than a set threshold, the create portion function will be called. For the enemy die effect, I used a similar way, but the effect object will be created as the parent of the enemy object and the child of the portion object (if it is created) right before the enemy object is destroyed. In this way, the destruction of the enemy object will not affect the dying effect, and the destruction of the dying effect object will not affect the portion object. </p>
        <p>To increase the fun of the game and gives the player a better chance to escape from the enemy, I added a feature of player dash this week. I used the right mouse click as the control so it is more convenient to switch between attack and dash. I also added a timer in the player control script which will be applied to block user attacks operation when dash, and block dash function when the user is attacking. In addition, a cooldown variable and function of the dash, which is similar to the player attack cooldown is added in the player control script. </p>

        <p>Since our project does not have a boss yet, I decide to work on creating the boss prefab next week. I am thinking that we can have various boss skills to fit into different levels in the dungeon. Every level will introduce a new skill which gives our game a good ramp-up as expected from the game designer’s perspective. </p>


    </div>
}

export default WeekThree;