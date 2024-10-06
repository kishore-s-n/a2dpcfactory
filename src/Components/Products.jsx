import { HiComputerDesktop } from "react-icons/hi2";
import pc1 from "../assets/pc1.png";
import pc2 from "../assets/pc2.png";
import pc3 from "../assets/pc3.png";
import pc4 from "../assets/pc4.png";
import pc5 from "../assets/pc5.png";
import pc6 from "../assets/pc6.png";
import pc7 from "../assets/pc7.png";

const Products = () => {
  return (
    <div
      id='products'
      className='bg-black py-12 flex flex-col justify-center items-center'>
      <button className='flex font-bold font-clash text-sm items-center py-2 px-4 gap-3 hover:bg-white/60 bg-white backdrop-blur-md hover:text-black duration-300 hover:border-b-2 hover:border-yellow-500 border-transparent shadow-lg rounded-full '>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSc9yaRxtTGFMp5bHNn2Rnen8DtY595S3JpfAPasBQGLWHj6Cg/viewform'
          target='_blank'>
          Our Popular Builds
        </a>

        <HiComputerDesktop
          className='bg-yellow-600 p-1 rounded-full'
          size={25}
          color='white'
        />
      </button>
      <h1 className='font-clash font-bold text-2xl mx-auto md:text-3xl p-5 text-white'>
        A2D`s Powerful Builds
      </h1>

      {/* Grid Container with 2-2-2-1 Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 w-full max-w-7xl'>
        {/* Row 1: Two Cards */}
        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc6}
              alt='PC 7'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              AMD RYZEN 9 Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹1,90,000</p>
          </div>
        </div>

        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc1}
              alt='PC 1'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              AMD RYZEN 7 Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹1,24,000</p>
          </div>
        </div>

        {/* Row 2: Two Cards */}
        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc2}
              alt='PC 2'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              Intel Core i9 RGB Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹1,50,000</p>
          </div>
        </div>

        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc3}
              alt='PC 3'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              Intel Core i7 RGB Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹1,08,000</p>
          </div>
        </div>

        {/* Row 3: Two Cards */}
        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc4}
              alt='PC 4'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              AMD RYZEN 9 Pro Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹2,00,000</p>
          </div>
        </div>

        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc5}
              alt='PC 5'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              Intel Core i5 RGB Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹1,00,000</p>
          </div>
        </div>

        {/* Row 4: One Card */}
        <div className='relative group bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 md:col-span-2'>
          <div className='relative w-full h-0 pb-[56.25%]'>
            {" "}
            {/* Aspect Ratio 16:9 */}
            <img
              src={pc7}
              alt='PC 6'
              className='absolute inset-0 object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end'>
            <h2 className='text-lg font-bold text-white mb-2'>
              AMD RYZEN 5 Build
            </h2>
            <p className='text-sm text-yellow-400'>From ₹80,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
