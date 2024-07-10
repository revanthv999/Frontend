import React from "react";
import { motion } from 'framer-motion';



const Display = (props) => {

    const backgroundStyle = {
            background: `url("./Images/${props.imgSrc}") center center / cover no-repeat`,
        }

    return (
        <div className="Display">
            <motion.div initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.4, type: "spring", stiffness: 150}} className="image" style={backgroundStyle}></motion.div>
            <motion.h1 initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.4, type: "spring", stiffness: 150}} className="title">{props.title}</motion.h1>
        </div>
    );
};

export default Display;