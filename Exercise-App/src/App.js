import './App.css';
import Timer from './Components/Timer';
import Display from './Components/Display';
import React, {useEffect, useState} from 'react';

function App() {

  const exercises = [
    {seconds: (18*10), title: "Surya namaskar", imgSrc: "Sun.svg"},
    {seconds: 15, title: "Push ups", imgSrc: "Push ups.gif"},
    {seconds: 15, title: "Push ups", imgSrc: "Push ups.gif"},
    {seconds: 15, title: "Push ups", imgSrc: "Push ups.gif"},
    {seconds: 60, title: "Planck", imgSrc: "Planck.gif"},
    {seconds: 60, title: "Planck", imgSrc: "Planck.gif"},
    {seconds: 60, title: "Planck", imgSrc: "Planck.gif"},
    {seconds: 60, title: "Hand strech", imgSrc: "Hand strech.gif"},
    {seconds: 22, title: "Push ups", imgSrc: "Push ups.gif"},
    {seconds: 15, title: "Push ups", imgSrc: "Push ups.gif"},
  ]

  const breaks = [
    {seconds: 20, title: "Break 1", imgSrc: "Break.svg"},
    {seconds: 20, title: "Break 2", imgSrc: "Break.svg"},
    {seconds: 20, title: "Break 3", imgSrc: "Break.svg"},
    {seconds: 20, title: "Break 4", imgSrc: "Break.svg"},
    {seconds: 15, title: "Break 5", imgSrc: "Break.svg"},
    {seconds: 15, title: "Break 6", imgSrc: "Break.svg"},
    {seconds: 15, title: "Break 7", imgSrc: "Break.svg"},
    {seconds: 15, title: "Break 8", imgSrc: "Break.svg"},
    {seconds: 20, title: "Break 9", imgSrc: "Break.svg"},
    {seconds: 20, title: "Break 10", imgSrc: "Break.svg"},
  ]

  const [rest, setRest] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [breakIndex, setBreakIndex] = useState(0);
  const [current, setCurrent] = useState({ ...exercises[0] });
  const [isEnd, setIsEnd] = useState(false);

  const resetTime = () => {

    setRest((prevRest) => {
      if(prevRest){
        setExerciseIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          setCurrent({ ...exercises[newIndex] });
          return newIndex;
        });
      } else {
        setBreakIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          setCurrent({ ...breaks[prevIndex] });
          return newIndex;
        });
      }
      return !prevRest;
    });

  }

  useEffect(() => {
    if(breakIndex >= breaks.length){
      setIsEnd(true);
      return;
    }
  }, [breakIndex]);

  return (
    <div className="App">
      {isEnd ? <h1 className='end-title'>Regardless of how you feel, you have to perform.</h1> :
      <>
        <Display imgSrc={current.imgSrc} title={current.title} />
        <Timer seconds={current.seconds} setSeconds={setCurrent} onEnd={resetTime} />
      </>
      }
    </div>
  );
}

export default App;
