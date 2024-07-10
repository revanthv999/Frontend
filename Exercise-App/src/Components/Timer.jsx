import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Timer = (props) => {
    
    useEffect(() => {
        if(props.seconds <= 0){
            props.onEnd();
            return;
        }
        const timer = setInterval(() => {
            props.setSeconds(preObj => {
                return { ...preObj, seconds: preObj.seconds - 1}
            });
        }, 1000);

        return () => clearInterval(timer);

    },[props.seconds]);

    return(
        <div className="Timer">
            <motion.h1  initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.4, type: "spring", stiffness: 150}} >{props.seconds} seconds</motion.h1>
        </div>
    )
}

export default Timer;