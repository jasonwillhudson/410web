const WeekNine = () => {

    return <div className="blog-content">
        <h2>Week Nine</h2>
        <h3>2022, Nov 10th</h3>

        <p>
            In this week, I had implentment narrative element into our project, i had added the screen transitions and UI messages. I had implemented proper game messages in the UI. We're going to feed the screen out before we display a message. Then we'll display messages in the UI relating to engage in the boss, the level being completed, the game being lost or the game being one of the displaying the message will fade the screen back in again. So to do this, we're going to create a new UI game object in our hierarchy. So this UI game objects will have two key components. First of all, it will have an image that's set to a very dark color that we can fade in and out and control the alpha of so that we can gradually fade in anything that's contained within that UI hierarchy and will also add a text object to the UI hierarchy that we can use to display our messages in.
        </p>
        <p>
            After some inter-testing, we discovered that the difficulty varies somewhat depending on the size of the rooms and the frequency with which attackers reappear. In addition, players are more prone to die due to the darker environments and the sheer number of opponents they must contend with. We might scale back the level's size and enemy density to lessen the complexity and challenge. In order to make the game easier to master, we may also improve the player's movement, attack speed, and attack damage.        </p>
        <p>
            Looking back, we can see that it took longer than we anticipated to make headway on these features. Features like the wisp, weapon upgrades, and weapon kinds will need to be eliminated.        </p>
    </div>
}

export default WeekNine;