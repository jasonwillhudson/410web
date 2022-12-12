import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Five</h2>
        <h3>2022, Oct 13th</h3>

        <p>This week, my main contribution is creating attack animation and implementing attack functions with keyboard control.  For the attack animation, since we do not have the spirit of the weapon, I used the source that I found online to make it.  In the control, I did not want the player to spam the attack by keep clicking the mouse which makes the game way too easy and the attack animation will look crappy if the sword keeps swinging without breaking. Since we have the rotation object which will rotate based on the player’s mouse position that we implemented before. It conflicts with the sword-swinging animation, so I had an idea to disable the rotation function shortly during the sword swing and enable it after the swing animation finished. To prevent the spamming of the attack, I set a variable as a timer to count down the cooldown. When the user first clicks the attack button, the timer will be set to a value, i.e., 0.5f, and the button detection will be blocked during this period and remove the block from the cool down back to 0. </p>

        <p>Other than attack animation, I also try to set up a collider for the weapon. In the beginning, I thought about not setting it to trigger so it physically collides with the wall and will not go through the room when the character move by the wall. But later I realize that the physical collider will force us to push the character away in that situation and it is not the effect we intend to reach. And hence I set it to trigger collider instead. For the next weeks, I plan to try on set up the health function and implement the attack which will reduce the monster’s health points during the attack. </p>

    </div>
}

export default WeekThree;