import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="my-10" id='contact'>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 bg-clip-text text-transparent text-center mb-6">
        Get in Touch
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-4 px-6 md:px-10 lg:px-20">
  
        <div className="px-4 py-4 text-lg md:text-xl leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Let's Talk
          </h2>
          <p className="mt-4">
            I’m currently available and open to taking on a new project. Let’s
            work together to bring your ideas to life!
          </p>

          <div className="leading-loose mt-6 space-y-2">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact me
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +254-723-811830
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
              Remote
            </p>
          </div>
        </div>

    
        <div className="px-4 py-2 text-lg md:text-xl">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-black bg-gray-100 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full border border-black bg-gray-100 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Write Your Message Here
              </label>
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full border border-black bg-gray-100 px-4 py-2 rounded resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 text-white font-bold py-2 rounded hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
