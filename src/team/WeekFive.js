//import image1 from '../img/team-4.png'


//<img src={image1} alt="example"
//style={{height: "300px"}}/>


const WeekFive = () => {

    return <div className="blog-content">
        <h2>Week Five</h2>
        <h3>2022, Oct 13th</h3>

        <p>
            During week 5, we added attack animations with a placeholder sword. After we have our artists design a pixelated sword, we will change the sword hitbox and sprite. At the moment our sword animation looks weak and not meaningful and we are planning to make the swing much faster so it feels good to swing. We will be adding ambient effects such as music, lighting, a health system, and ways to recover health.
        </p>
        <p>
            We have made a lot of progress on the mapping, we made a few map presets that the player will navigate through. We currently lack the user interface to display these features such as a minimap but we almost have it completed.    
        </p>
        <p>
            As of now, we are lacking a lot of feedback effects that will make the game feel immersive. We are mainly looking at player and enemy feedback effects upon taking damage. With the current build, players can take damage while fighting monsters without realizing they even took damage.
        </p>
    </div>
}

export default WeekFive;