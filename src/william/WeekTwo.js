import image1 from '../img/william-2-1.png'
import image2 from '../img/william-2-2.png'
import image3 from '../img/william-2-3.png'


const WeekTwo = () => {

    return <div className="blog-content">
        <h2>Week Two</h2>
        <h3>2022, Sep 22nd</h3>
        <p>This week, I started off by creating concept characters on photoshop. By using pixel methods (64x64), I
            created 3 versions of the character. This included detailed, simple, and chibi versions. Chibi in this case
            refers to a character with a large head, and smaller limbs. Detailed sprite allows us to have in-depth
            detail and aesthetically pleasing images. Simple one the other hand allows us to focus on smoother and
            detailed animations. Despite these advantages, our team has agreed on the chibi style of the character. It
            was because it was more fitting for our top-down view style, and animations for it would be simple, allowing
            us to cover more animation frames efficiently. After deciding on the style, I realized that animating on
            Photoshop isn’t very intuitive and very hard to make it look smooth. This is why I started to learn a
            software called “Aseprite”. Aseprite is a dedicated 2D sprite creating software, which contains all the
            features that I would need for our sprites, including easier shading, and animation. The software was rather
            very intuitive to use, and I have been practicing and learning from online resources. One of the best
            sources I found was a YouTube channel called “AdamCYounis” (https://www.youtube.com/c/AdamCYounis), who
            creates very useful contents on pixel art design principles, tutorials and implementing those into unity
            which was very useful for our project. Starting from this week, I plan to settle down on a character concept
            and style, and create animations. Also, I plan to ideate on NPCs and possible in-game assets like lightings,
            buildings, and environments using similar strategies.</p>


        <img src={image1} alt="example" style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image2} alt="example" style={{display: "inline-block", height: "300px", marginRight: "50px"}}/>
        <img src={image3} alt="example" style={{height: "300px"}}/>


    </div>
}

export default WeekTwo;