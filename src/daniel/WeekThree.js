import image1 from '../img/daniel-3-1.png'
import image2 from '../img/daniel-3-2.png'
import image3 from '../img/daniel-3-3.png'
import image4 from '../img/daniel-3-4.png'
import image5 from '../img/daniel-3-5.jpg'


const WeekThree = () => {

    return <div className="blog-content">
        <h2>Week Three</h2>
        <h3>2022, Sep 29th</h3>
        <p>The first GDD, which addresses the fundamental gameplay mechanics, gameplay mode, and player challenges, was
            completed this week. Additionally, we created a github account and went through the project uploading
            procedure.</p>
        <p>This week, I'm following the lesson for the Udemy course I took over the summer. It enables me to develop a
            working room note graph editor in Unity, storing several level layouts and enabling random map generation
            after a player dies. The functions in the room note graph editor which included create a room nodes in
            editor window(corridor, small, middle, chest, boss rooms), dragging room nodes in the editor, connecting
            lines between room nodes, generate entrance node and selected node style, a room node connections validation
            , selecting all room nodes, deleting rooms and connections, drag canvas, draw canvas grid, and crate dungeon
            layout room graph.</p>
        <p>The game will ultimately have three levels, and we plan to build different room note layouts for each of
            them. For the prototype, I now have five different room note layouts for each level, as seen in the photo.
            In the future, I'll develop a dungeon algorithm that will employ a room note layout that is chosen at random
            for the level to arrange the dungeon rooms.</p>
        <p>We discovered that our combat system requires too many sprites to draw in its initial design. Based on the
            difficulty and time commitment, we chose to employ a different combat system that only requires the player
            body sprite and weapon. This combat system does not require any animation; instead, it simply features a
            player holding a weapon while the curser is visible during gameplay.</p>


        <img src={image1} alt="example"
             style={{display: "inline-block", height: "300px", marginRight: "50px", marginBottom: "30px"}}/>
        <img src={image2} alt="example" style={{marginRight: "50px",display: "inline-block",height: "300px", marginBottom: "30px"}}/>
        <img src={image3} alt="example" style={{display: "inline-block", height: "300px", marginBottom: "30px"}}/>
        <img src={image4} alt="example" style={{marginRight: "50px",height: "150px",display: "inline-block"}}/>
        <img src={image5} alt="example" style={{height: "150px"}}/>
    </div>
}

export default WeekThree;