import React from 'react'

const Whyjoin = () => {
  return (
<section className="flex flex-col lg:flex-row lg:items-center mt-10" id='#whatwedo_scroll'>
  
  <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 mb-24">
    <p className="text-[#009600] text-xl mb-3 ">WHY YOU SHOULD JOIN US</p>
    <h1 className="text-3xl lg:text-4xl text-[#4b4a4a] mb-4 font-thin">Be a part of creating cleaner, healthier, and more sustainable communities.</h1>
    <p className="text-lg lg:text-lg text-[#747373] mb-4 font-thin">
    Become a part of our mission to revolutionize waste management through cutting-edge solutions and community engagement, creating cleaner, healthier environments and paving the way for a more sustainable future.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 bg-transparent">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#009600] lg:text-xl rounded-full bg-white hover:bg-[#55b355] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 border-1 border-[#009600] rounded-">
                Join Us Now   </a>
            
        </div>
  </div>

  <div className="relative w-full lg:w-1/2">
    <img className="w-full h-auto" src="https://www.newbusinessage.com/img/issues/20230915042953_2023-09-15%2016.29.41.jpg" alt="image description"/>
    {/* <img className="hidden lg:block absolute w-1/3 h-auto top-1/2 transform -translate-y-1/2 left-30" src="src/assets/nonbiodegradable.jpg" alt="image description"/> */}
  </div>
</section>  )
}

export default Whyjoin