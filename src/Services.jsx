import React from 'react'

function Services() {
  return (
    <div className="my-10" id='services'>
      <div className="py-6 px-4 mx-6">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-green-400 to-blue-500 bg-clip-text text-transparent text-center">
          My Services
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white mx-6 md:mx-12 lg:mx-20">
        
        <div className="p-6 border border-gray-200 bg-black rounded-xl shadow-md transform transition-transform duration-200 ease-out hover:scale-105">
          <h1 className="text-lg font-bold">01</h1>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Web Design
          </h2>
          <p className="text-lg mt-3">
            Modern, responsive, and user-friendly websites designed to deliver great user experiences.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-black rounded-xl shadow-md transform transition-transform duration-200 ease-out hover:scale-105">
          <h1 className="text-lg font-bold">02</h1>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            App Design
          </h2>
          <p className="text-lg mt-3">
            Intuitive mobile and web app interfaces focused on usability and sleek design.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-black rounded-xl shadow-md transform transition-transform duration-200 ease-out hover:scale-105">
          <h1 className="text-lg font-bold">03</h1>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Graphic Design
          </h2>
          <p className="text-lg mt-3">
            Eye-catching visuals, from logos to marketing materials, that bring brands to life.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-black rounded-xl shadow-md transform transition-transform duration-200 ease-out hover:scale-105">
          <h1 className="text-lg font-bold">04</h1>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Content Writing
          </h2>
          <p className="text-lg mt-3">
            Engaging, well-researched content that communicates clearly and connects with your audience.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-black rounded-xl shadow-md transform transition-transform duration-200 ease-out hover:scale-105">
          <h1 className="text-lg font-bold">05</h1>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Social Media Management
          </h2>
          <p className="text-lg mt-3">
            Creative strategies and content to grow your online presence and engagement.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-black rounded-xl shadow-md transform transition-transform duration-200 ease-out hover:scale-105">
          <h1 className="text-lg font-bold">06</h1>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
            Digital Marketing
          </h2>
          <p className="text-lg mt-3">
            Data-driven campaigns that boost visibility, attract customers, and drive results.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Services
