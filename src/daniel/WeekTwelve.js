const WeekTwelve = () => {

    return <div className="blog-content">
        <h2>Week Twelve</h2>
        <h3>2022, Dec 1st</h3>

        <p>
            In this week, I had implemented a new dungeon overview map that will be displayed by pressing the top key
            and the player will be able to navigate to rooms they�ve already visited by clicking on the map. I added new
            camera and send machine virtual camera to do this. The new camera will only render the minimap player and
            then you send a machine virtual camera when we want to display the Dungeon Overview map. I�ll just disable
            our main camera and enable the dungeon overview map the camera. By doing this, I'll just display the map and
            more sets a high orthographic camera size, so the mini map appears zoomed out. Further, while displaying the
            dungeon overview map by pressing the top key will allow the player to quickly teleport to rooms they've
            already visited by clicking on the room in the Dungeon Overview map. This will allow the player to quickly
            navigate between rooms. The player no longer to walk thought the rooms one by one and then that just makes
            it very easy to visit the boss room now after implement the tp function, and the player just need to click
            on the map, and then just go straight to the intended room.</p>
            <p>
                The project is almost completed but some of the bug is still occurs, I will spend the time to debug.
            </p>
    </div>
}

export default WeekTwelve;