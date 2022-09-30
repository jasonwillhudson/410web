const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Three</h2>
        <h3>2022, Sep 29th</h3>

        <p>This Week I continued working on the player controller. Last week the player is able to be controlled by the
            keyboard but the animation did not play correctly. I fixed the problem by debugging the animation controller
            and fix the problem by correcting the status it matches. Moreover, I also added a weapon to the character
            and implemented the function that the weapon and character will change direction based on the mouse position
            on the screen. In addition to that, I completed all the prototype animations for the character moving and
            idle using the asset from the image source online since we haven’t had our own sprites yet.</p>
        <p>During the weekend, I will work on implementing the attack animation on the character. For now, my plan is to
            make the weapon rotate along the center point of the hand or stab towards the front to simulate the attack.
            Moreover, I will test the character movement in the dungeon to make sure it is working for the
            prototype.</p>


    </div>
}

export default WeekThree;