const WeekEight = () => {

    return <div className="blog-content">
        <h2>Week Eight</h2>
        <h3>2022, Nov 3rd</h3>

        <p>
            In this week, I had implemented the overview map function in the project. In recent project, we created the ability for the player to explore a battle through the whole dungeon level by level, It's at the moment after we've built a dungeon level, every room in the level is set to active by default. The only thing we currently do is fade out the dungeon rooms that we haven't visited. Jets have been all the dungeon rooms. Active all the time could cause excessive processing, especially if there are hundreds of environment game objects in each room that require ongoing updates to address this. Therefore, I made the changes to only activate dungeon rooms that are visible within the minimal. This will make the dungeon process more efficient by only having the render and process the currently visible dungeon rooms, rather than having to process all the rooms in the whole dungeon level all the time This becomes more of a significant efficiency gain when we have a very large dungeon level and lots of game of chance the required processing in each dungeon room.
        </p>
        <p>
            Battle gameplay feedback is required for the feedback from the initial player test with peers. It alerts the player when they are being attacked by an enemy or themself. The initial concept for improving our gameplay was to include a visual aspect for the player, which would entail adding a visual feedback element that would appear when the player was hit by an enemy and activated coillder2d.
        </p>
    </div>
}

export default WeekEight;