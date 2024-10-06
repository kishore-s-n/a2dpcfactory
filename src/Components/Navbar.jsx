import { useState } from "react";
import { BsArrowUpRightCircleFill, BsList, BsX } from "react-icons/bs"; // Icons for mobile menu
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-between items-center px-10 py-2 z-10 fixed w-screen text-white md:bg-transparent bg-black/20`}>
      <img src={logo} alt='Logo' className='h-12' />

      {/* Mobile Hamburger Icon */}
      <div className='md:hidden' onClick={toggleMenu}>
        {isOpen ? (
          <BsX size={30} className='cursor-pointer' />
        ) : (
          <BsList size={30} className='cursor-pointer' />
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex bg-black/20 border-black/70 backdrop-blur-xl rounded-full px-8 gap-8 py-3 font-sans justify-center text-base font-light items-center ml-16'>
        <a
          className='hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent'
          href='#home'>
          Home
        </a>
        <a
          className='hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent'
          href='#whyus'>
          Why Us
        </a>
        <a
          className='hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent'
          href='#products'>
          Products
        </a>
        <a
          className='hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent'
          href='#testimonials'>
          Testimonials
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } md:hidden`}>
        <nav className='flex flex-col gap-8'>
          <a
            className='text-white text-2xl hover:text-yellow-500 duration-300'
            href='#home'
            onClick={toggleMenu}>
            Home
          </a>
          <a
            className='text-white text-2xl hover:text-yellow-500 duration-300'
            href='#whyus'
            onClick={toggleMenu}>
            Why Us
          </a>
          <a
            className='text-white text-2xl hover:text-yellow-500 duration-300'
            href='#products'
            onClick={toggleMenu}>
            Products
          </a>
          <a
            className='text-white text-2xl hover:text-yellow-500 duration-300'
            href='#testimonials'
            onClick={toggleMenu}>
            Testimonials
          </a>
        </nav>

        {/* Contact Us Button in Mobile Menu */}
        <button className='flex items-center p-2 gap-3 hover:bg-white/60 bg-black/20 backdrop-blur-md hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent shadow-lg rounded-full mt-10'>
          Contact Us
          <BsArrowUpRightCircleFill
            className='bg-black rounded-full'
            size={25}
            color='#ffc40c'
          />
        </button>
      </div>

      {/* Desktop Contact Button */}
      <button className='hidden md:flex items-center p-2 gap-3 hover:bg-white/60 bg-black/20 backdrop-blur-md hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent shadow-lg rounded-full'>
        Contact Us
        <BsArrowUpRightCircleFill
          className='bg-black rounded-full'
          size={25}
          color='#ffc40c'
        />
      </button>
    </div>
  );
};

export default Navbar;
