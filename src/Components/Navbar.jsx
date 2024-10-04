import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div className='flex justify-between px-10 py-6 z-10 fixed w-screen text-white'>
        <img src={logo} alt='' className='h-12' />
        <nav className='bg-white/20 border-black/70 backdrop-blur-xl h-max rounded-full flex px-7 gap-5 py-3 font-sans items-center '>
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
        <button className='bg-white/30 backdrop-blur-md border-white/30 shadow-lg p-5 rounded-full h-max'>
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Navbar;
