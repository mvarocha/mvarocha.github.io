import React, { useEffect } from 'react';
import "../style/Home.css"

const Home = () => {
  const showText = () => {
    const firstLineElement = document.querySelector("#textFirstLine");
    // const secondLineElement = document.querySelector("#textSecondLine");
    const firstText = "Hey! I'm Marcus, a Web Developer.";
    // const secondText = "Welcome to my portfolio!";

    const char1 = firstText.split("").reverse();
    // const char2 = secondText.split("").reverse();

    console.log(char1)

    const typer = setInterval(() => {
      if (!char1.length) {
        return clearInterval(typer);
      }
      const next = char1.pop();
      firstLineElement.innerHTML += next;
    }, 500)
  };

  useEffect(() => {
    showText(); // Agora a função showText() é chamada apenas uma vez
  }, []);

  return (
    <div className="titleContainer">
      <div>
        <p id="textFirstLine"></p>
        <div className="cursor" id='cursor1'></div>
      </div>
      <div>
        <p id="textSecondLine"></p>
        <div className="cursor" id='cursor2'></div>
      </div>
    </div>
  )
}

export default Home