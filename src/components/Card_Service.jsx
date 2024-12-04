import React from 'react'


const Card_Service = ({service}) => {
  return (
    <>

    <div className="max-w-md flex flex-col mx-auto bg-[#0A1828] rounded-xl overflow-hidden shadow-md p-4 mb-4">
      <img className="w-full h-32 object-cover" src={service.img} alt="image" />
      <div className="p-4">
        <h2 className="font-bold text-[#178582] font-text-xl mb-2">{service.header}</h2>
        <p className="text-[#BFA181]">{service.para}</p>


     </div>
    </div>
    </>
  )
}

export default Card_Service;