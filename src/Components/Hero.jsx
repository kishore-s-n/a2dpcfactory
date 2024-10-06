import soldier from "../assets/soldier.png";
const Hero = () => {
  return (
    <div className='h-screen'>
      <div className='fixed z-0 h-screen w-screen bg-gradient-radial from-yellow-700 via-black to-black translate-y-[-40%] backdrop-blur-lg rounded-full absolute z-0'></div>
      <div id='home'>
        <div className='h-32'></div>
        <div className='text-white bg-black/20 border-black/70 backdrop-blur-xl rounded-full flex gap-2 px-2 py-2 text-[13px] font-sans justify-center items-center h-max w-max mx-auto'>
          <img
            src={soldier}
            alt='soldier'
            className='size-6 bg-yellow-600 rounded-full'
          />
          <p>Hey Soldiers</p>
        </div>
        <div className='p-5 flex justify-center'>
          <h1 className='font-mono font-extrabold text-4xl z-20 text-white '>
            From Components to Masterpiece <br />
            your Ultimate PC awaits
          </h1>
        </div>
      </div>
      {/* <video src={pcvid} autoPlay={true}></video> */}
    </div>
  );
};

export default Hero;
