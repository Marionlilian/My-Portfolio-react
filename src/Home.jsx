import React from 'react'
import { Link } from 'react-router-dom'
// import bg2 from '/bg-2.jpg'; 
import RippleWord from './RippleWord';


function Home() {
  return (
    <div id='home'>
      <section class="body-font bg-gradient-to-r from-primary to-accent my-0 mt-0">
 
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-0">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium ">Hi, my name is Marion,
        <br class="hidden lg:inline-block text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent"/>
      </h1>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent"> A
        <h1 className="text-3xl md:text-5xl font-extrabold text-purple-300">
  <RippleWord word="CREATIVE" />
</h1>
Front-End Developer
      </h1>
 
      <p class="mb-8 leading-relaxed">Contact me for all your design needs — from concept to creation. Whether you're launching a brand, building a website, or refreshing your visual identity, I offer creative solutions tailored to your vision. With a strong focus on aesthetics, usability, and innovation, I ensure each design tells a story and leaves a lasting impression.</p>
      <div class="flex justify-center mx-auto">
        <button class="inline-flex text-white bg-rose-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-300 rounded text-lg cursor-pointer">Contact Me</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg cursor-pointer"> <a href="/Marion-CV.docx"> Download CV</a></button>
      </div>
    </div>
    <div class="styledimg lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-0">
      <img
  className="styledimg object-cover object-center rounded"
  alt="hero"
  src="/bg-2.jpg"
/>
    </div>
  </div>
</section>
      
      
    </div>
  )
}

export default Home
