import image from '../img/william-1.png'

const WeekOne = () => {

    return <div className="blog-content">
        <h2>Week One</h2>
        <h3>2022, Sep 15th</h3>
        <p>In week one, our team worked on ideating and refining game concepts. As an initial member of the team, I
            helped teammates who joined afterward catch up on our ideas and possible methods that we can use. Using my
            knowledge from previous games, I suggested interesting mechanics such as character growth system and combat
            buddy (wisp) system. At the moment, we have not done extensive research on Japanese mythology. For next
            week, our team will start researching the types of demons and curses in traditional Japanese myth that might
            be fitting in our game. With the gathered information, we plan to design NPC (enemies) and their behaviours.
            Since we mostly had programmers and game designers, I volunteered to be the character designer and artist of
            the team. As an artist, I created a concept art cover page consisting of the theme of Japanese samurais,
            Wisp, Demons, and low lighting. Starting from this week, I will be working on researching Japanese myth and
            creatures within it, and creating sprites/animations from them. </p>
        <p>Currently, the unique selling point of the game, ambient lighting and combat buddy system is very rough. We
            need to branch out the ideas on the use of the system and increase the effects that will have on the
            gameplay.
        </p>

        <img src={image} alt="image" style={{width: "500px"}}/>

    </div>
}

export default WeekOne;