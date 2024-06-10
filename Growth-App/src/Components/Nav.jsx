import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = (props) => {

    const buttonClickHandler = () => props.setIsActive(!props.isActive);

    return (
        <motion.div className="Nav"
         initial={{opacity: 0, y: 10, scale: 0.9}}
         animate={{opacity: 1, y: 0, scale: 1}}
        >
            <motion.button
                whileTap={{scale: 0.9}}
                onClick={buttonClickHandler}
                className={(props.isActive ? "nav-btn quote-btn-active" : "nav-btn") + (props.isDark ? "-dark" : "")}
            >
                    <i className="fa-solid fa-quote-right"></i>Quote
            </motion.button>
            <motion.button
                whileTap={{scale: 0.9}}
                onClick={buttonClickHandler}
                className={(!props.isActive ? "nav-btn affirmation-btn-active" : "nav-btn") + (props.isDark ? "-dark" : "")}
            >
                    <i className="fa-solid fa-font" ></i>Affirmation
            </motion.button>
        </motion.div>
    );
};

export default Nav;