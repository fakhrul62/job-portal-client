import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content grid grid-cols-2">
          
          <div className="">
            <motion.h1
            initial={{
                y: 10,
                transition: { duration: 2 },
              }}
              animate={{
                y: 0,
                transition: { duration: 2,repeat: Infinity, },
              }}
              
              
              
              className="text-5xl font-bold"
            >
              Box <motion.span animate={{color: '#346356'}}>Office</motion.span> News!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="">
            <motion.img animate={{y: [50, 100, 50]}} transition={{duration: 10, repeat: Infinity}}
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <motion.img animate={{x: [100, 150, 100]}} transition={{duration: 10, repeat: Infinity}}
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
