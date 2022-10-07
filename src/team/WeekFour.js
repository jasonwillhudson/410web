import image1 from '../img/team-4.png'





const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Four</h2>
        <h3>2022, Oct 6th</h3>
        <p>This week we had worked on the development of our game concepts and mechanics such as how upgrading will work in the game as well as the different types of upgrades. We have incorporated not only weapon upgrades but also wisp upgrades. Players will be presented with an option to choose either a weapon or wisp upgrade and then be further presented with three options of the player’s choice. The weapon and wisp upgrades both have options to provide either a basic upgrade or a special upgrade. Basic upgrades are just stat upgrades, while special upgrades will have special passive mechanics. We plan to make the appearance of special upgrades more rare than basic upgrades.</p>
        <p>While ideating our game concept and mechanics, we ended up discovering a mechanic we wanted to incorporate into our game for more depth. In addition to our wisp mechanics that we have already introduced into our game, we decided to allow players to command the wisp to charge forward to a given point, essentially acting as a throwing mechanic, and letting them recall it whenever the player wants. This mechanic is to provide more possible creative uses of game mechanics to players since it is one of our main environmental mechanics to fight in the darkness. The players may use this feature to attack enemies, debuff enemies, or even enhance the player’s damage while also acting as a light source.</p>
        <p>During our discovery of the mechanics we wish to bring to the game, we took a lot of inspiration from other games such as 20 Minutes Till Dawn and League of Legends. For some upgrade mechanics, 20 Minutes Till Dawn inspired how upgrading works with the presentable options and upgrade branches. As for League of Legends, we thought a lot about a champion named Orianna that controls a ball to attack enemies and we saw a lot of similarities with our wisp mechanics.</p>


        <img src={image1} alt="example"
             style={{height: "300px"}}/>


    </div>
}

export default WeekThree;