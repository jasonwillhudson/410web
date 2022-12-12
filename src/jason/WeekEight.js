import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Eight</h2>
        <h3>2022, Nov 3rd</h3>

        <p>This week I focused on adding the visual effect and implementing the enemy attack functions. Since we don’t have any visual effects designed yet, I decide to find some assets in the unity store to fit into our project. After browsing through all the visual effects in the free section, I picked a few effects that catch my eye. I put the effects game object inside of the enemy game object and the player game object and name them according to the associated visual feedback. In the script, I activate them when the event happened and deactivate them when the event end to create the feedback that corresponds to the interaction. For example, when the enemy gets attacked, the blood effect will be activated to indicate the enemy is being attacked. To prevent the mixture of the player’s feedback and enemies’ feedback, I intend to use different visual effects for them when they are in the same state. For example, when a player loses health points I used a heart slash effect, and when the enemy loses health points the blood spill effect is applied instead of a heart slash. </p>
        <p>Other than adding visual feedback, I also implemented the enemy attack function. Before this week, the enemy keeps chasing players until they collide with each other. To add an attack on the monster, I added the function to make the monster stop chasing the player and use a skill to attack when the player is detected in the view (a trigger collider on the enemy with attack range).  And then the enemy will keep chasing the player after the attack if the player is outside of the attack range. For the attack of the enemy, I also attach a visual effect to indicate the attack range and the duration of the attack. </p>


    </div>
}

export default WeekThree;