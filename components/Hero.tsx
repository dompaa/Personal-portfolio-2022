import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
    <div>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7ABAB'/>
        </h1>
    </div>
  )
}

export default Hero