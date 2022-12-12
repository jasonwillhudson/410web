import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Six</h2>
        <h3>2022, Oct 20th</h3>
        <p>This week I am trying to implement the health point-dropping function and combine it with the player attack. At the beginning of the few tests, there has a problem with the collider that it won't detect the enemy object. Firstly, I look up that most of the tutorials used the canvas function in Unity. But after several tries, I noticed that Canvas UI does not compatible very well with 2D and is hard to modify to the style we want, which is to display the health points as hearts. So, I decided to design and implement the UI by using the game objects of hearts. We plan to make the player has max 8 health points, which creates challenges for the player during the fights with the monsters but is not too difficult at the same time. I wrote the functions that activate a certain number of hearts based on the health points that the player has right now and deactivate the rest of them. </p>

        <p>For the health points storage, I create a class in a script which has the variable holding the initial health points and increases or decreases the variable in the class with public functions. In this way, the health script can be reused for both players and monsters to make the development organized and clean. To test the function, I haven’t added any attack or skill for the monster but with a trigger collider which will reduce the player’s health when colliding with the character, and use the collider on the weapon from last week to test the function which reduces enemies’ health points when the weapon collider collides with the enemy collider. For next week, I plan to work on improving the attack and health point reduction system, i.e., the enemy only drops health points when the player is on attack status and the player only gets damaged when the monster use attack.</p>


    </div>
}

export default WeekThree;