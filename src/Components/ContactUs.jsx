export default function ConatctUs() {
  return (
    <footer className='bg-black text-white py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          {/* Contact Details */}
          <div className='flex-1'>
            <h3 className='text-2xl font-semibold mb-4 text-yellow-400'>
              Contact Us
            </h3>
            <ul className='space-y-3'>
              <li className='text-lg'>
                <span className='font-semibold'>Phone 1: </span>
                <a href='tel:+919445747768' className='hover:underline'>
                  +91 94457 47768
                </a>
              </li>
              <li className='text-lg'>
                <span className='font-semibold'>Phone 2: </span>
                <a href='tel:+919025380083' className='hover:underline'>
                  +91 90253 80083
                </a>
              </li>
              <li className='text-lg'>
                <span className='font-semibold'>Email: </span>
                <a
                  href='mailto:support@a2dpcfactory.com'
                  className='hover:underline'>
                  support@a2dpcfactory.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className='flex-1'>
            <h3 className='text-2xl font-semibold mb-4 text-yellow-400'>
              Opening Hours
            </h3>
            <ul className='space-y-3 text-lg'>
              <li>
                <span className='font-semibold'>Monday - Saturday: </span>
                09:00AM - 7:30PM
              </li>
              <li>
                <span className='font-semibold'>Sunday: </span>
                09:00AM - 06:00PM
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-10 border-t border-gray-700 pt-6 text-center text-sm'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} A2D PC Factory. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
