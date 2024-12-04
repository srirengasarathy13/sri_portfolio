import React from 'react'
import profilepic from '/src/assets/radom_pic1.jpeg'
import Navbar from '/src/components/Navbar.jsx'

const Home = () => {
  return (
    <>
<Navbar/>

<div className=" bg-[#0A1828] min-h-screen bg-cover bg-center pt-20">


<div className="container mx-auto flex items-center space-x-6 mt-20 ">
      
        <div className="w-3/4 h-3/4 overflow-hidden mb-4 ml-6 ">
          <img src={profilepic} alt="Your Name" className="w-40 sm:w-60 md:w-80" />
        </div>

  
        <div >
          <h2 className="text-7xl font-bold px-2 text-[#178582]">Hi, I m </h2> 
          <h2 className="text-7xl font-mono px-2 font-bold text-[#178582]">Sri Rengasarathy!</h2>
          <h3 className="text-[#D7BA99] font-bold px-2 text-5xl  space-y-2">Backend Developer</h3>
           <p className="text-[#BFA181] text-3xl px-2 text-mono space-x-4">Myself a passionate backend developer with a knack for 
                                crafting robust and scalable solutions that power the digital world.
                                Armed with a strong foundation in server-side technologies, databases,
                                and API development,I specialize in bringing the magic behind the scenes.</p>
        </div>
      </div>
      </div>
      
    
    </>
    
  );
}

export default Home;