import { useState } from "react";
import hht from "../assets/hiphoptamizha.jpg"; // Your image paths
import itsme from "../assets/itskishore.jpeg";
import mg from "../assets/madangowri.jpg"; // Your image paths
const testimonials = [
  {
    name: "Madan Gowri - MG",
    title: "YouTube Content Creator - Chennai",
    text: "I recently built a new PC for my YouTube channel, and I can’t express how much it has transformed my content creation process. Rendering times have been cut in half, allowing me to produce videos faster than ever.",
    image: mg, // Replace with actual image
  },
  {
    name: "Kishore SN",
    title: "Web Developer Full Stack Enthusiast",
    text: "My next new custom-built PC will be from PC-Doc, waiting for my time to get one and hoping to get a banger from commander.Eagerly waiting for the time to come and i would be financially stable to buy one myself.",
    image: itsme, // Replace with actual image
  },
  {
    name: "Aadhi - Hip Hop Tamizha",
    title: "Rapper, Music Director, Actor, Content Creator - Chennai",
    text: "I got a new dual GPU PC for my movie editing purposes, and I can’t express how good it is. It now plays a major role in my movie Kadaisi Ulaga Por where most CGI scenes were rendered by that PC. It has great performance as Assured.",
    image: hht, // Replace with actual image
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className='relative flex flex-col items-center justify-center py-16 bg-yellow-600 px-4 md:px-20'
      id='testimonials'>
      <h2 className='text-3xl md:text-5xl font-bold font-clash text-white mb-12'>
        A Valuable Testimonial!
      </h2>
      <div className='h-52'></div>

      <div className='relative w-full max-w-3xl flex justify-center items-center'>
        {/* Current Testimonial Card */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full bg-white flex flex-col md:flex-row shadow-lg rounded-lg p-6 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-20 transform translate-y-0"
                : "opacity-0 z-10 transform translate-y-4"
            }`}
            style={{
              visibility: index === currentIndex ? "visible" : "hidden",
            }}>
            {/* Testimonial Image */}
            <div className='flex flex-col md:flex-row'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='absolute top-[-50px] object-cover left-4 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-500'
              />
              {/* Testimonial Content */}
              <div className='flex flex-col items-start md:pt-16 pt-10 md:ml-24'>
                <h3 className='text-xl font-semibold text-yellow-600'>
                  {testimonial.name}
                </h3>
                <p className='text-gray-500'>{testimonial.title}</p>
                <p className='text-gray-700'>{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className='flex justify-between w-full max-w-3xl mt-4'>
        <button
          onClick={handlePrev}
          className='p-4 bg-white rounded-full md:-translate-x-16 z-30 transform md:translate-y-0 translate-y-44 hover:bg-yellow-500 hover:text-white transition duration-300'>
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className='p-4 bg-white rounded-full md:translate-x-16 z-30 transform md:translate-y-0 translate-y-44 hover:bg-yellow-500 hover:text-white transition duration-300'>
          &#10095;
        </button>
      </div>
      <div className='md:h-24 h-36'></div>
    </div>
  );
};

export default TestimonialSlider;
