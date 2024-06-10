import './App.css';
import { motion } from "framer-motion";
import Nav from './Components/Nav';
import Quote from './Components/Quote';
import Affirmation from './Components/Affirmation';
import RandomizeBtn from './Components/RandomizeBtn';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [quoteData, setQuoteData] = useState({quote: "", author: ""});
  const [affirmation, setAffirmation] = useState("");
  const [display, setDisplay] = useState(true);
  const [generate, setGenerate] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Function to get a quote
  const getQuote = async () => {
    try{
      const response = await axios.get("https://stoic.tekloon.net/stoic-quote");
      setQuoteData({quote: response.data.quote, author: response.data.author});
    } catch (error) {
      console.log(error);
      setQuoteData({quote: "Error at server side. Please try again.", author: ""});
    }
  };

  // Function to get an Affirmation
  const getAffirmation = async () => {
    try{
      const response = await axios.get("https://thingproxy.freeboard.io/fetch/https://www.affirmations.dev/");
      setAffirmation(response.data.affirmation);
    } catch (error) {
      console.log(error);
      setAffirmation("Error at server side. Please try again.");
    }
  };
  
  const randomBtnHandler = () => {
    setGenerate(!generate);
  }

  useEffect(() => {
    getQuote();
    getAffirmation();
}, [generate]);

  return (
      <div className="App" style={isDark ? {backgroundColor: "#080808"} : {}}>
        {isDark ?
         <motion.button
          onClick={() => {setIsDark(!isDark)}}
          whileTap={{scale: 0.8}}
          className="mode-btn moon"
        >
          <i className="fa-solid fa-moon"></i>
        </motion.button> :
        <motion.button 
          onClick={() => {setIsDark(!isDark)}}
          whileTap={{scale: 0.8}}
          className="mode-btn sun">
            <i className="fa-solid fa-sun"></i>
          </motion.button> }
        {display ? <Quote quote={quoteData.quote} author={quoteData.author} isDark={isDark} /> : <Affirmation affirmation={affirmation} isDark={isDark} />}
        {display ? <RandomizeBtn clickHandler={randomBtnHandler} class={isDark ? "quote-random-btn-dark" : "quote-random-btn"} /> : <RandomizeBtn clickHandler={randomBtnHandler} class={isDark ? "affirmation-random-btn-dark" : "affirmation-random-btn"} /> }
        <Nav
          isActive={display}
          setIsActive={setDisplay}
          isDark={isDark}
        />
      </div>
    );
}

export default App;
