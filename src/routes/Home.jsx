import React from "react";
import "../style/Home.css"

const Home = () => {

    return (
        <div className="titleContainer">
            <div>
                <p>Hey! I'm Marcus, a Web Developer.</p>
                <div className="cursor" id='cursor1'></div>
            </div>
            <div>
                <p>Welcome to my portfolio!</p>
                <div className="cursor" id='cursor2'></div>
            </div>
        </div>
    )
}

export default Home