import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5}}
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>  background
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ad cumque fuga alias ea excepturi rerum, corrupti unde iusto eaque velit quae, sint, deleniti consequatur inventore dolore repellendus. Maxime, iste.
          Excepturi quia delectus aliquam hic, ad recusandae harum quasi nam impedit enim? Accusantium ratione et repellendus dignissimos autem fuga unde quo, sed cupiditate eum sequi libero, iste delectus facere recusandae?
          Sunt voluptatum adipisci sint sapiente veniam ipsum necessitatibus eum distinctio perferendis perspiciatis vitae maiores officia, at quae cupiditate, id non ab a rem natus. Voluptates id ipsa dolorem amet nam!
          Numquam dignissimos voluptatibus quia aliquid modi eius unde nostrum id ipsam, eligendi ipsa. Fuga, voluptas accusamus perspiciatis dolor laborum eius nostrum autem natus voluptates officiis vero ullam omnis quaerat aspernatur.
          Temporibus impedit dolor neque iure quasi similique eligendi fuga at nobis? Voluptates odit fuga debitis quisquam, eius impedit totam. Laudantium, maiores sequi exercitationem maxime dolorum ad atque! Eligendi, perferendis? Consequatur!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
