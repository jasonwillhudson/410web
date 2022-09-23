import image1 from "../img/alan-2.png";

const WeekTwo = () => {

    return <div className="blog-content">
        <h2>Week Two</h2>
        <h3>2022, Sep 22nd</h3>
        <p>There was not a lot of contribution from me this week since I am inexperienced with game development in
            Unity. My only contribution was suggestions for the game direction and learning Unity on my own through
            youtube tutorials. Aside from that I have also kept track of the process of our game development and
            recorded it onto our team journal. As for our game development ideas and features, we had amazing feedback
            from our lecture presentations that suggested the use of audio to help players keep track of monsters making
            audio a vital element to survival. There was also a suggestion to change our player model’s vision mechanic
            into a cone-like view similar to in Project Zomboid. This makes it less frustrating for players as it is
            more reliant on skill rather than luck.</p>

        <img src={image1} alt="example" style={{display: "inline-block", height: "300px"}}/>
    </div>


}

export default WeekTwo;