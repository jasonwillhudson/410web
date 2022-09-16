import image from '../img/team-1.gif'

const WeekOne = () => {

    return <div className="blog-content">
        <h2>Week One</h2>
        <h3>2022, Sep 15th</h3>
        <p>During week 1, we brainstormed the details of our Game Proposal. We already had a rough idea of what we were
            going to make. A 2D top-down RPG and adventure-based rogue-like game that revolves around Japanese
            Mythology. The setting takes place in the nights of a Japanese village but the main character, a Samurai who
            lives near the outskirts of the village, discovers that something wrong is going on and fights the cursed
            monsters he encounters to find the root of the problem.</p>

        <p>As for game mechanics, we took inspiration from similar games such as The Binding of Isaac and Hades. Hades
            for its unique weapon mechanics where each weapon has their own special ability aside from different attack
            patterns. We also want to fuse our rogue-like with The Binding of Isaac’s mapping system where it goes from
            room to room, floor by floor. Aside from these inspirations, we figured that we needed another unique
            selling point that would differentiate us from other rogue-likes. </p>

        <p>To find a unique selling point, we looked at what we had to work with. Since the setting is in the midst of
            night, we thought of the possible light mechanics that we can implement. Thinking of all the rogue-like
            games we have all played, we didn’t really discover any games that had a mechanic where the player’s vision
            range is limited within the space around them, as pure darkness lies past the player’s vision. In addition
            to this, we thought of a combat buddy (a wisp) that the player can have to assist them with visibility in
            the dark.</p>
        <img src={image} alt="image" style={{width: "300px"}}/>
    </div>
}

export default WeekOne;