import React from "react";
import { motion, spring } from "framer-motion";

const RandomizeBtn = (props) => {
    return(
        <motion.button className={props.class}
            initial={{opacity: 0, y: 10, scale: 0.9}}
            animate={{opacity: 1, y: 0, scale: 1}}
            transition={{ease: "easeInOut"}}
            whileTap={{scale: 0.5}}
            onClick={props.clickHandler}
        >
            <i className="fa-solid fa-shuffle"></i>
        </motion.button>
    )
}

export default RandomizeBtn;