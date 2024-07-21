import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>

    

<section class="bg-center bg-no-repeat bg-[url('src/assets/photo-1650638987536-6fbcb9bc6085.jpeg')] bg-gray-500 bg-blend-multiply mt-5">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 bg-transparent">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-300 md:text-5xl lg:text-9xl bg-transparent">स्वच्छ नगर </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-4xl sm:px-16 lg:px-48 bg-transparent">“Your waste, our responsibility. Let’s keep our city clean."</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 bg-transparent">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white lg:text-xl rounded-full bg-[#009600] hover:bg-[#55b355] focus:ring-4 focus:ring-[#009600]-500 dark:focus:ring-[#009600]-900">
                Join Us Now   </a>
            
        </div>
    </div>
</section>



{/* <section className='flex flex-row bg-[#eefffa]   '>
    <div className=''>
        <img className="h-min w-auto relative z-0  " src="src/assets/QmcJcSBJDtnbW2YFC2uhczprcEcUQFCDc4dLN91dGKyVYz.jpeg" alt="image description"/>
    </div>
    <div><img className=" h-50 absolute z-10 right-1/2 mt-20" src="src/assets/nonbiodegradable.jpg" alt="image description"/></div>

    <div className='flex flex-col max-w-2xl justify-center m-auto bg-[#eefffa] relative '>
        <p className='text-[#009600] text-2xl mb-3 bg-[#eefffa]'>OUR MISSION</p>
        <h1 className='text-5xl text-[#4b4a4a] mb-4 bg-[#eefffa]'>Our primary goal is to create a cleaner, healthier environment for everyone.</h1>
        <p className='text-xl text-[#747373] mb-4 bg-[#eefffa]'>The automated process begins as soon as waste is collected. Through innovative technology and community collaboration, we aim to ensure that every piece of waste is managed efficiently. Our efforts focus on reducing waste, promoting recycling, and maintaining a pristine cityscape. Together, we can build a sustainable future for generations to come.
        </p>
        <p className='text-3xl text-[#4b4a4a] bg-[#eefffa]'>Cleaner streets, healthier lives. </p>
    </div>
</section> */}

<section className="bg-[#eefffa] flex flex-col lg:flex-row lg:items-center">
  <div className="relative w-full lg:w-1/2">
    <img className="w-full h-auto" src="src/assets/QmcJcSBJDtnbW2YFC2uhczprcEcUQFCDc4dLN91dGKyVYz.jpeg" alt="image description"/>
    {/* <img className="hidden lg:block absolute w-1/3 h-auto top-1/2 transform -translate-y-1/2 left-30" src="src/assets/nonbiodegradable.jpg" alt="image description"/> */}
  </div>
  <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-[#eefffa]">
    <p className="text-[#009600] text-2xl mb-3 bg-[#eefffa]">OUR MISSION</p>
    <h1 className="text-3xl lg:text-5xl text-[#4b4a4a] mb-4 bg-[#eefffa]">Our primary goal is to create a cleaner, healthier environment for everyone.</h1>
    <p className="text-lg lg:text-xl text-[#747373] mb-4 bg-[#eefffa]">
      The automated process begins as soon as waste is collected. Through innovative technology and community collaboration, we aim to ensure that every piece of waste is managed efficiently. Our efforts focus on reducing waste, promoting recycling, and maintaining a pristine cityscape. Together, we can build a sustainable future for generations to come.
    </p>
    <p className="text-xl lg:text-3xl text-[#4b4a4a] bg-[#eefffa]">Cleaner streets, healthier lives.</p>
  </div>
</section>



    </div>
  )
}

export default Home
