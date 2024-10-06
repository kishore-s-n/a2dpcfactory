import { HiComputerDesktop } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import pcvid from "../assets/PCvid.mp4";
import soldier from "../assets/soldier.png";
const Hero = () => {
  return (
    <div className='h-[120vh]'>
      <div className='fixed z-0 h-screen w-screen bg-gradient-radial from-yellow-700 via-black to-black translate-y-[-40%] backdrop-blur-lg rounded-full absolute z-0'></div>
      <div id='home'>
        <div className='h-20 md:h-32'></div>
        <div className='text-white bg-black/20 border-black/70 backdrop-blur-xl rounded-full flex gap-2 px-2 py-2 text-[13px] font-sans justify-center items-center h-max w-max mx-auto'>
          <img
            src={soldier}
            alt='soldier'
            className='size-6 bg-yellow-600 rounded-full'
          />
          <p>Hey Soldiers</p>
        </div>
        <div className='p-10 flex flex-col items-center justify-center z-20'>
          <h1 className='font-mono font-extrabold text-xl md:text-6xl z-20 text-white text-center'>
            From Components to Masterpiece <br />
          </h1>
          <h1 className='font-mono font-extrabold text-xl md:text-6xl z-20 text-white text-center'>
            Your{" "}
            <span className='bg-gradient-to-l from-yellow-400 to-yellow-800 bg-clip-text text-transparent'>
              Ultimate PC
            </span>{" "}
            awaits
          </h1>
          <h2 className='text-white text-sm font-light p-4 absolute mt-64 md:mt-36'>
            Transforming handpicked components into computing powerhouses, We
            build the PC you`ve always wanted, tailored to your needs and budget
          </h2>
        </div>
        <div className='flex flex-col md:flex-row w-screen md:mt-5 mt-24 items-center justify-center md:gap-10 gap-4 '>
          <button className='flex font-bold text-sm items-center py-2 px-4 gap-3 hover:bg-white/60 bg-white backdrop-blur-md hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent shadow-lg rounded-full '>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSc9yaRxtTGFMp5bHNn2Rnen8DtY595S3JpfAPasBQGLWHj6Cg/viewform'
              target='_blank'>
              Build Your PC
            </a>

            <HiComputerDesktop
              className='bg-yellow-600 p-1 rounded-full'
              size={25}
              color='white'
            />
          </button>{" "}
          <button className='flex items-center py-2 px-4 gap-3 text-sm font-bold text-white hover:bg-white/30 bg-white/20 backdrop-blur-md hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent shadow-lg rounded-full '>
            <a href='tel:+919445747768' className='hover:underline'>
              Book a Demo
            </a>
            <IoCall className='rounded-full' size={25} color='white' />
          </button>
        </div>
        <div className='flex justify-center md:translate-y-10 size-30'>
          {/* <img src={pc} alt=''  />
           */}
          <video
            src={pcvid}
            className='size-96'
            autoPlay
            playsInline
            loop
            muted></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
