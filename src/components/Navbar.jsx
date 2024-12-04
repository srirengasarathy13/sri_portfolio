import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="fixed w-screen ">
    <nav className="bg-[#0A1828] h-15 p-3">
  
  <div className="flex items-center  justify-between">
    <div className="text-[#178582]  font-bold text-6xl ml-3">Sri's Portfolio</div>
    <div className="space-x-10 mr-10">
      <a href="/" className="Home font-bold text-[#178582]  text-xl hover:text-[] hover:text-3xl ">Home</a>
      <a href="/about" className="About font-bold text-[#178582] text-xl  hover:text-[] hover:text-3xl">About</a>
      <a href="/service" className="Service font-bold text-[#178582] text-xl  hover:text-[] hover:text-3xl">Service</a>
      <a href="/contact" className="Contact font-bold text-[#178582] text-xl  hover:text-[] hover:text-3xl">Contact</a>
     
    </div>

  </div>
  

</nav>
<div className="border-b-2 border-[#BFA181] "></div>

    </div>
    </>
    
  )
}

export default Navbar