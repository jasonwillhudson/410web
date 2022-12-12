import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Twelve</h2>
        <h3>2022, Dec 1st</h3>


        <p>Since this is the final week, I only have time on adding all the skills to the boss. I first implement the feature in the Boss script which switches the attack states within a certain period of time. I set a timer variable in the script which counts the skill cooldown. The skill cooldown gives the player a chance to safely attack the boss. I also set a public variable which allows the developer to input a number to indicate the number of skills at different levels. For example, 1 means 1 skill will be used and 2 means 2 skills will be used in the corresponding level. After the skill is released (skill timer count down to zero), the state variable in the script with switch the state which creates the feature of skill switching in between. Moreover, I also added the effect before the attack to hint to the user how to dodge the skill that will be released from the boss. Before the skill prefab is created inside of the Boss game object, an effect will be generated first and destroy this effect when the animation is done. Then this effect object will be destroyed and generate a skill object with a trigger collider to attack the player. To keep the basic visual feedback consistent throughout the game, I used previously added effects on the enemy game object to the boss object. </p>

        <p>Other than finishing the Boss features implementation, I spent the rest of the time debugging the project with Daniel to make sure there have the least bugs possible in the final submission. And collaborate with Daniel to polish the game UI for a better player experience. </p>


    </div>
}

export default WeekThree;