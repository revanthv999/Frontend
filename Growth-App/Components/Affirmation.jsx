import React from "react";
import { motion } from "framer-motion";

const Affirmation = (props) => {

    const textRevealAnimation = {
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: -50,
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.125
            }
        }
    };

    let affirmationArray = props.affirmation.split(' ').map((word) => word += ' ');
    
    const returnData = props.affirmation ? (
    <motion.div className="Affirmation">
        <motion.h1 className={"affirmation-text" + (props.isDark ? "-dark" : "")} variants={textRevealAnimation} initial="hidden" animate="show">
            {affirmationArray.map((word, idx) => {
                return (<motion.span variants={textRevealAnimation} key={idx}>{word}</motion.span>)
            })}
        </motion.h1>
    </motion.div>) : "";

    return (
        returnData
    );
};

export default Affirmation;