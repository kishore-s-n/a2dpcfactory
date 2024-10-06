import { useState } from "react";
import pcs from "../assets/pc1.png";
const PcBuildSection = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    processor: "",
    motherboard: "",
    ram: "",
    storage: "",
    gpu: "",
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [requestFromExpert, setRequestFromExpert] = useState(false);

  const handleComponentChange = (e) => {
    setSelectedComponents({
      ...selectedComponents,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserInfoChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      selectedComponents,
      userInfo,
    };
    // Call EmailJS or another service here
    console.log("Form Data Submitted: ", formData);
    alert("Form Submitted. Check the console for form data.");
  };

  const components = {
    processors: {
      intel: [
        "Intel Core i9-13900K",
        "Intel Core i7-13700K",
        "Intel Core i5-12600K",
        "Intel Core i9-12900KS",
        "Intel Core i9-11900K",
        "Intel Core i7-12700K",
        "Intel Core i5-11400F",
        "Intel Core i3-10105F",
        "Intel Pentium Gold G6400",
        "Intel Celeron G5925",
      ],
      amd: [
        "AMD Ryzen 9 7950X",
        "AMD Ryzen 7 7800X",
        "AMD Ryzen 5 7600X",
        "AMD Ryzen 9 5950X",
        "AMD Ryzen 7 5800X3D",
        "AMD Ryzen 5 5600X",
        "AMD Ryzen 9 5900X",
        "AMD Ryzen 7 5700G",
        "AMD Ryzen 5 4600G",
        "AMD Athlon 3000G",
      ],
    },
    motherboards: {
      intel: [
        "ASUS ROG Maximus Z790",
        "MSI Z690-A Pro",
        "Gigabyte Z790 AORUS Master",
        "ASRock Z590 Extreme",
        "ASUS Prime Z490-A",
        "MSI MPG Z490 Gaming Carbon",
        "Gigabyte Z690 AORUS Elite AX",
        "ASRock B460M Steel Legend",
        "ASUS TUF Gaming B460-Pro",
        "MSI MAG B560 Tomahawk",
      ],
      amd: [
        "ASUS ROG Crosshair X670E Hero",
        "MSI MPG B550",
        "ASRock X570 Steel Legend",
        "ASUS TUF Gaming X570-Plus",
        "Gigabyte B550 AORUS Elite",
        "MSI MAG B550 Tomahawk",
        "ASRock B450 Steel Legend",
        "ASUS Prime B450M-A",
        "MSI X470 Gaming Plus Max",
        "Gigabyte X570 AORUS Pro",
      ],
    },
    ram: [
      "Corsair Vengeance LPX 16GB DDR4-3200",
      "G.Skill Ripjaws V 32GB DDR4-3600",
      "Kingston Fury Beast 16GB DDR5-6000",
      "Corsair Dominator Platinum RGB 32GB DDR4-3200",
      "TeamGroup T-Force Xtreem ARGB 16GB DDR4-3600",
      "Crucial Ballistix MAX 32GB DDR4-4400",
      "ADATA XPG Spectrix D50 16GB DDR4-3600",
      "G.Skill Trident Z Royal 32GB DDR4-3600",
      "Patriot Viper Steel Series 16GB DDR4-3200",
      "Thermaltake TOUGHRAM RGB 32GB DDR4-4000",
    ],
    storage: [
      "Samsung 970 EVO Plus 1TB NVMe M.2",
      "WD Black SN850X 2TB NVMe SSD",
      "Seagate FireCuda 530 1TB NVMe SSD",
      "Crucial P5 Plus 2TB NVMe SSD",
      "Kingston KC3000 2TB NVMe SSD",
      "Samsung 980 PRO 1TB NVMe SSD",
      "WD Blue SN570 1TB NVMe SSD",
      "Corsair MP600 PRO XT 2TB NVMe SSD",
      "Sabrent Rocket 4 Plus 2TB NVMe SSD",
      "ADATA XPG GAMMIX S70 2TB NVMe SSD",
    ],
    gpus: [
      "NVIDIA GeForce RTX 4090",
      "NVIDIA GeForce RTX 4080",
      "NVIDIA GeForce RTX 4070 Ti",
      "NVIDIA GeForce RTX 3080 Ti",
      "NVIDIA GeForce RTX 3070",
      "NVIDIA GeForce RTX 3060 Ti",
      "AMD Radeon RX 7900 XTX",
      "AMD Radeon RX 7800 XT",
      "AMD Radeon RX 6800 XT",
      "AMD Radeon RX 6700 XT",
      "AMD Radeon RX 6600 XT",
      "AMD Radeon RX 5700 XT",
      "AMD Radeon RX 5600 XT",
      "NVIDIA GeForce GTX 1660 Super",
      "NVIDIA GeForce GTX 1650",
    ],
  };

  const expertForm = (
    <div id='buildpc'>
      <h3 className='text-2xl font-semibold my-4'>
        Tell Us About Your Requirements
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <label htmlFor='useCase' className='block mb-2'>
            What is your main use case?
          </label>
          <input
            id='useCase'
            name='useCase'
            type='text'
            placeholder='Gaming, Video Editing, etc.'
            className='w-full p-2 border rounded'
          />
        </div>
        <div>
          <label htmlFor='budget' className='block mb-2'>
            What is your budget range?
          </label>
          <input
            id='budget'
            name='budget'
            type='text'
            placeholder='e.g. $1500 - $2000'
            className='w-full p-2 border rounded'
          />
        </div>
        <div>
          <label htmlFor='preferences' className='block mb-2'>
            Do you have any specific preferences?
          </label>
          <textarea
            id='preferences'
            name='preferences'
            placeholder='Brand preferences, RGB, Air Cooling, etc.'
            className='w-full p-2 border rounded'
          />
        </div>
      </div>
    </div>
  );

  // Determine available motherboards based on selected processor
  const availableMotherboards = selectedComponents.processor.includes("Intel")
    ? components.motherboards.intel
    : selectedComponents.processor.includes("AMD")
    ? components.motherboards.amd
    : [];
  return (
    <div
      className='pc-build-section bg-white py-10 px-5 bg-slate-100'
      id='buildpc'>
      <h2 className='text-center text-2xl md:text-4xl font-clash font-semibold mb-5'>
        Build your dream PC with A2D Experts
      </h2>
      <p className='text-center text-base font-light mb-10'>
        Choose each component yourself using our intuitive interface or request
        recommendations from experts.
      </p>
      <div className='flex flex-col gap-3 md:flex-row justify-center'>
        <div className=' bg-white/70 rounded-full gap-4 mb-6 border-2 '>
          <button
            onClick={() => setRequestFromExpert(false)}
            className={`${
              !requestFromExpert ? "bg-black text-white" : "bg-white"
            } py-2 px-4 rounded-full transition duration-200 w-full md:w-auto`}>
            Select By Own
          </button>
          <button
            onClick={() => setRequestFromExpert(true)}
            className={`${
              requestFromExpert ? "bg-black text-white" : "bg-white"
            } py-2 px-4 rounded-full transition duration-200 w-full md:w-auto`}>
            Request From Expert
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6  p-4 rounded-lg border-2 border-black/60'>
        {/* Form Section */}
        <div>
          <form onSubmit={handleSubmit} className='mt-6'>
            {!requestFromExpert ? (
              <div className='grid grid-cols-1 gap-6'>
                {/* Select Processor */}
                <div>
                  <label htmlFor='processor' className='block mb-2'>
                    Select Processor
                  </label>
                  <select
                    id='processor'
                    name='processor'
                    value={selectedComponents.processor}
                    onChange={handleComponentChange}
                    className='w-full border p-2 rounded'>
                    <option value=''>Select Processor</option>
                    <optgroup label='Intel'>
                      {components.processors.intel.map((processor, index) => (
                        <option key={index} value={processor}>
                          {processor}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label='AMD'>
                      {components.processors.amd.map((processor, index) => (
                        <option key={index} value={processor}>
                          {processor}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Select Motherboard */}
                <div>
                  <label htmlFor='motherboard' className='block mb-2'>
                    Select Motherboard
                  </label>
                  <select
                    id='motherboard'
                    name='motherboard'
                    value={selectedComponents.motherboard}
                    onChange={handleComponentChange}
                    className='w-full border p-2 rounded'>
                    <option value=''>Select Motherboard</option>
                    {availableMotherboards.map((motherboard, index) => (
                      <option key={index} value={motherboard}>
                        {motherboard}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select RAM */}
                <div>
                  <label htmlFor='ram' className='block mb-2'>
                    Select RAM
                  </label>
                  <select
                    id='ram'
                    name='ram'
                    value={selectedComponents.ram}
                    onChange={handleComponentChange}
                    className='w-full border p-2 rounded'>
                    <option value=''>Select RAM</option>
                    {components.ram.map((ram, index) => (
                      <option key={index} value={ram}>
                        {ram}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Storage */}
                <div>
                  <label htmlFor='storage' className='block mb-2'>
                    Select Storage
                  </label>
                  <select
                    id='storage'
                    name='storage'
                    value={selectedComponents.storage}
                    onChange={handleComponentChange}
                    className='w-full border p-2 rounded'>
                    <option value=''>Select Storage</option>
                    {components.storage.map((storage, index) => (
                      <option key={index} value={storage}>
                        {storage}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select GPU */}
                <div>
                  <label htmlFor='gpu' className='block mb-2'>
                    Select GPU
                  </label>
                  <select
                    id='gpu'
                    name='gpu'
                    value={selectedComponents.gpu}
                    onChange={handleComponentChange}
                    className='w-full border p-2 rounded'>
                    <option value=''>Select GPU</option>
                    {components.gpus.map((gpu, index) => (
                      <option key={index} value={gpu}>
                        {gpu}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              expertForm
            )}
            {/* User Info Section */}
            <div className='mt-6'>
              <h3 className='text-lg font-semibold mb-3'>Your Info</h3>
              <div className='grid grid-cols-1 gap-4'>
                <div>
                  <label htmlFor='name' className='block mb-2'>
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={userInfo.name}
                    onChange={handleUserInfoChange}
                    className='w-full p-2 border rounded'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={userInfo.email}
                    onChange={handleUserInfoChange}
                    className='w-full p-2 border rounded'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='block mb-2'>
                    Phone
                  </label>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={userInfo.phone}
                    onChange={handleUserInfoChange}
                    className='w-full p-2 border rounded'
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='mt-6 w-full bg-black/60 backdrop-blur-lg font-bold border-black/70 border-1 text-white py-2 rounded'>
              Submit Build
            </button>
          </form>
        </div>
        {/* Summary Section */}
        <div className='bg-black p-5 rounded-lg flex flex-col justify-center items-center'>
          <h1 className='text-white text-2xl mx-auto font-light px-2 pb-5 mx-auto justify-center  font-mono'>
            Profesionally Built PC`s
          </h1>
          <img src={pcs} alt='CPU images' />
        </div>
      </div>
    </div>
  );
};

export default PcBuildSection;
