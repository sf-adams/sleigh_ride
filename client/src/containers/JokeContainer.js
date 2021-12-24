import React, {useState, useEffect} from "react";
import useSound from "use-sound";

import Joke from "../components/Joke";
import { getJokes } from '../services/SleighRideService';
import '../css/JokeContainer.css'
import cracker_exit from '../assets/images/christmas_cracker_exit.svg';
import santa from '../assets/images/santa_happy.svg';
import hohoho from "../assets/sounds/hohoho.mp3";

const JokeContainer = ({setOpenModal}) => {

    const [jokes,setJokes] = useState([]);
    const [randomJoke, setRandomJoke] = useState(null);
    const [toggleJoke, setToggleJoke] = useState(true);
    const [jokeTally, setJokeTally] = useState(0);


    useEffect(() => {
      getJokes()
      .then(data => {
          setJokes(data)
      })
  }, [toggleJoke,jokeTally])

   

    const shuffleArray = (array) => {
      let currentIndex = array.length, randomIndex;

      while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
      }

    const shuffledJokes = shuffleArray(jokes).splice(-1);

    const handleClick = (event) => {
      const sel = document.getElementById("joke-punchline-id"); 
      console.log(sel)
      sel.classList.remove("punchline-animation")
      setTimeout(function() {
        sel.classList.add("punchline-animation")
      }, 1);
      
      // sel.classList.add("")
      setToggleJoke(false)
      setToggleJoke(true)
      setJokeTally(jokeTally + 1);
    }

  const nodeItems = shuffledJokes.map(joke => {
          return (
              <Joke joke={joke} toggleJoke = {toggleJoke}/>
          )
  })


  return (
      <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">Joke Generator</h1>
            <div className="modal-body">
              {nodeItems}
                <img src={santa} alt="next joke" className="joke-santa" onClick={handleClick}/>
            </div>
            <div className="modal-footer">
              <img src={cracker_exit} alt="Exit" className="exit-button" onClick={() => {
            setOpenModal(false);
          }}/>
            </div>
          </div>
        </div>
      </div>

      </>
  )
}

export default JokeContainer;
