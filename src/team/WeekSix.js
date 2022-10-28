

const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Six</h2>
        <h3>2022, Oct 20th</h3>

        <p>This week our team added the mechanism of the dungeon's lighting system, health system, and basic monster generation system. The player can switch the angle of the light by changing the mouse's direction. We chose to use the red colour of the light which makes the atmosphere creepier and matches the theme of our game. We did not have much time this week so we only added the basic health system which has max health of 6 and the player starts with 3 health points. The player and monsters have a collider to detect if the monster hits the player; if so, the player will get one health deducted. We haven’t implemented the death and game-over interface yet. We plan to go to a UI showing that the player died and the game is over when the player’s health points are deducted to 0. We also implemented a monster generation system, for test purposes, it now only generates monsters randomly on the map if the player presses the T key. Monsters will follow the player with an AI path system that we also implemented this week. </p>
        <p>Other than adding new functions to our game, we also invited people to test our game in three different sessions. After they tried on the game, we gained some useful feedback. With the feedback we gathered, we can improve the user experience based on the playtest feedback. This week we also wrote the GDD which helps us to conclude the works we have done so far and gives us a view of the next steps we will work on in the following weeks.
        </p>




    </div>
}

export default WeekThree;