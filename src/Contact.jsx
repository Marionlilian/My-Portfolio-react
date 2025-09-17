import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5be85f3d-0cce-45f2-8a04-7dc922d1f0cf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
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
          <form action="https://api.web3forms.com/submit" method="POST"
           className="space-y-4"
          >
 
            <input type="hidden" name="access_key" value="5be85f3d-0cce-45f2-8a04-7dc922d1f0cf" />
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name='name'
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
                name='email'
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
                name='message'
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
