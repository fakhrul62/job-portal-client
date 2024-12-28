import React from "react";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <div className="relative hero bg-[url('https://i.ibb.co.com/F4VG93q/pexels-laura-tancredi-7078666.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="hero-content w-10/12 mx-auto relative py-32">
          <div className="text-center">
            {/* <motion.h1
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
            </motion.h1> */}
            <h1 className="text-5xl text-white font-bold font-head">Empower Your Career Journey</h1>
            <p className="py-6 font-body text-white">
              Discover Your Dream Job, Connect with Top Employers, and Start
              Building Your Future Today.
            </p>
            <button className="btn w-40 rounded-full active:bg-blue-500 active:text-white active:border-blue-500">Get Started</button>
          </div>
          {/* <div className="">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
