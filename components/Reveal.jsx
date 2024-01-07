
"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
            variants={{
                hidden : {opacity:0, y:75},
                visible : {opacity:1, y:25}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.8, delay: 0.7}}
        >
                {children}
        </motion.div>
        
    </div>
  );
};


