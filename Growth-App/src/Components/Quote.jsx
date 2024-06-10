import React from "react";
import { motion } from "framer-motion";

const Quote = (props) => {

    const textRevealAnimation = {
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.125
            }
        }
    };

    const returnData = props.quote ? (<motion.div className="Quote" variants={textRevealAnimation} initial="hidden" animate="show">
        <motion.i className="fa-solid fa-quote-left" style={props.isDark ? {color: "#1D1D1D"} : {}}></motion.i>
        <motion.h1 className="quote-text" style={props.isDark ? {color: "#EAEAEA"} : {}} variants={textRevealAnimation}>
            {props.quote}
        </motion.h1>
        <motion.p className="quote-author" style={props.isDark && {color: "#EAEAEA"}} variants={textRevealAnimation}>-{props.author}</motion.p>
    </motion.div>) : "";

    return (
        returnData
    );
};

export default Quote;