import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left 
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGcTgZtFgK-kg/profile-displayphoto-shrink_200_200/0/1661111418757?e=1670457600&v=beta&t=sAaZqOn-uPxkYnQ73N0Zb9CM5OKYwrdQQaXNwD7ek_U"
      />
    </div>
  );
}

export default About;
