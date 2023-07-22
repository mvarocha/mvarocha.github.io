import React from 'react';
import "../style/Home.css"
import Typical from 'react-typical'

const Home = () => {

  return (
    <div className="titleContainer">
      <Typical
        steps={["Hey! I'm Marcus", 1500, "Hey! I'm  a Web Developer.", 3000, "Welcome to my portfolio!", 4500]}
        loop={Infinity}
      />
    </div>
  )
}

export default Home