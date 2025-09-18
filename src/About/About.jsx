import React from 'react'
import './About.css'
// import photo from '../assets/images/My-potrait.jpg';

function About() {
  return (
    <div className='about' id='about'>
      <section className="body-font mt-0">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img 
              className="styledimg object-cover object-center rounded" 
              alt="My portrait" 
              src='/My-potrait.jpg'
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a passionate front-end developer and designer who thrives on bringing ideas to life through beautiful, functional interfaces. 
              With a strong eye for design and a love for clean, responsive code, I turn concepts into engaging digital experiences. 
              From crafting sleek user interfaces to building intuitive web layouts, I’m dedicated to creating seamless, user-friendly solutions 
              that leave a lasting impression.
            </p>

            <div className="p-4 w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="space-y-4">

                <div>
                  <p className="font-semibold">HTML & CSS</p>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="w-[95%] h-full bg-gradient-to-r from-purple-500 to-green-400 rounded"></div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">JavaScript</p>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="w-[70%] h-full bg-gradient-to-r from-yellow-400 to-red-400 rounded"></div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">React JS</p>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="w-[90%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Figma</p>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="w-[50%] h-full bg-gradient-to-r from-pink-400 to-violet-500 rounded"></div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Canva</p>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="w-[70%] h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About
