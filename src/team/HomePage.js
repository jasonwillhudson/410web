const Home = () => {

    return (<div className="home">
        <h4>&copy;IAT 410 FALL 2022</h4>
        <h1>GAME NAME</h1>
        <h2>Blog</h2>
        <div style={{display: "flex", textAlign: "left"}}>
            <div style={{margin:"30px"}}>
                <a href="/410web/team">Group's</a>
                <a href="/410web/daniel">Daniel's</a>
                <a href="/410web/william">William's</a>
            </div>
            <div style={{margin:"30px"}}>
                <a href="/410web/jason">Jason's</a>
                <a href="/410web/alan">Alan's</a>
                <a href="/410web/wasee">Wasee's</a>
            </div>
        </div>
    </div>);
}

export default Home;
