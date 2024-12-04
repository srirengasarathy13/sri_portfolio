import React from 'react'

const Header_Para = ({about}) => {
  return (
    <>
    <div>
    <h2 className="about1 text-[#178582] text-bold text-3xl">{about.header}</h2>
    <p className="intro text-[#BFA181] text-bold text-2xl ml-6">{about.para}</p>

    </div>
    </>
  )
}

export default Header_Para