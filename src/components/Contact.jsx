import React from 'react';

const Contact = () => {
  return (
    <footer className="bg-[#eefffa] text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left px-24 py-24" id='#contact_scroll'>
      <div className="mx-6 py-10 text-center md:text-left bg-[#eefffa]">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 bg-[#eefffa]">
          <div className="bg-[#eefffa] flex flex-col items-start">
            <p className="mb-4 flex flex-col items-center justify-center font-semibold uppercase md:justify-start bg-[#eefffa]">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4 bg-[#eefffa] text-3xl mb-3">
              <a href='#' className='bg-[#eefffa]'><span><i className="fa-solid fa-truck text-[#009600] bg-[#eefffa]"></i></span> Swachha <span className='bg-[#eefffa] text-[#009600]'>Nagar</span></a>
              </span>
              
              <span className='bg-[#eefffa] text-sm text-[#4b4a4a]'>Cleaner streets, healthier lives.</span>
            </p>

            
            
          </div>
          <div className="bg-[#eefffa] flex flex-col justify-center items-start">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start bg-[#eefffa] text-center text-[#4b4a4a]">
              Services
            </h6>
            <p className="mb-4 bg-[#eefffa] ">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Route Optimization</a>
            </p>
            <p className="mb-4 bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Fleet Management</a>
            </p>
            <p className="mb-4 bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Departure Notification</a>
            </p>
            <p className="bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Pickup Schedules</a>
            </p>
          </div>
          <div className="bg-[#eefffa] flex flex-col justify-center items-start">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start bg-[#eefffa] text-[#4b4a4a]">
              Resourses
            </h6>
            <p className="mb-4 bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Documentation</a>
            </p>
            <p className="mb-4 bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">API Reference</a>
            </p>
            <p className="mb-4 bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Case Studies</a>
            </p>
            <p className="bg-[#eefffa]">
              <a href="#!" className="bg-[#eefffa] text-[#747373]">Support</a>
            </p>
          </div>
          <div className="bg-[#eefffa]  flex flex-col justify-center items-start">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start bg-[#eefffa] text-[#4b4a4a]">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start bg-[#eefffa] text-[#747373]">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg className="bg-[#eefffa]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              Nayabazar,Kathmandu
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start bg-[#eefffa] text-[#747373]">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg className="bg-[#eefffa]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              swachhanagar@gmail.com.np
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start bg-[#eefffa] text-[#747373]">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg className="bg-[#eefffa]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </span>
              + 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start bg-[#eefffa] text-[#747373]">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg className="bg-[#eefffa]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M7.875 1.5A6.375 6.375 0 001.5 7.875v8.25a6.375 6.375 0 006.375 6.375h8.25a6.375 6.375 0 006.375-6.375v-8.25a6.375 6.375 0 00-6.375-6.375h-8.25zM3 7.875A4.875 4.875 0 017.875 3h8.25A4.875 4.875 0 0121 7.875v8.25A4.875 4.875 0 0116.125 21h-8.25A4.875 4.875 0 013 16.125v-8.25z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M7.875 1.5A6.375 6.375 0 001.5 7.875v8.25a6.375 6.375 0 006.375 6.375h8.25a6.375 6.375 0 006.375-6.375v-8.25a6.375 6.375 0 00-6.375-6.375h-8.25zM3 7.875A4.875 4.875 0 017.875 3h8.25A4.875 4.875 0 0121 7.875v8.25A4.875 4.875 0 0116.125 21h-8.25A4.875 4.875 0 013 16.125v-8.25z" clipRule="evenodd" />
                  <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM9 12a3 3 0 116 0 3 3 0 01-6 0zM17.25 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                </svg>
              </span>
              + 01 234 567 89
            </p>
          </div>
        </div>
        
      </div>
      <div class=" p-6 text-center bg-[#eefffa] space-x-2 mt-4 bottom-0">
      <i className="fa-solid fa-truck bg-[#eefffa]"></i>
    <span className='bg-[#eefffa]'>© 2024</span>
    <a class="bg-[#eefffa]" href="http://localhost:5173/#"
      >Swachha Nagar</a>
  </div>

    </footer>
  
  );
}

export default Contact;
