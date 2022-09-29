import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const[text, count] = useTypewriter({
        words: [
            "Hi, The Name is Dominik Gradiški",
            "Guy-who-loves-Cup-of-Tea",
            "<ProblemSolvingCoder />"],
            loop: true,
            delaySpeed: 2500,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7ABAB'/>
        </h1>
    </div>
  )
}

export default Hero