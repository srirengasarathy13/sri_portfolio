import React from 'react'
import Navbar from '/src/components/Navbar.jsx';


const Contact = () => (
    <>
        <div className=" bg-[#0A1828] min-h-screen bg-cover bg-center">
      <Navbar/>
      <br></br>
            <h1 className="about text-[#D7BA99] text-extrabold text-5xl underline ml-5">Contact Me</h1>
            <br></br>
            <h2 className="about1 text-[#178582] text-bold text-3xl ">Let's Start a Conversation</h2>
                <p className="intro text-[#BFA181] text-bold text-2xl ml-6">Thank you for considering reaching out! I'm excited to hear about your project or any collaboration opportunities. Feel free to get in touch through any of the following channels:</p>
                <br></br>
                <br></br>
 <h2 className="about1 text-[#178582] text-bold text-3xl ">📧 Email</h2>
 <p className="intro text-[#BFA181] text-bold text-2xl ml-6">For detailed inquiries or project proposals, drop me an email at sri.rengasarathy.007@gmail.com .I strive to respond promptly and look forward to discussing how I can contribute to your goals.</p>
    <br></br>   
    <h2 className="about1 text-[#178582] text-bold text-3xl ">📱 LinkedIn</h2>
<p className="intro text-[#BFA181] text-bold text-2xl ml-6">Visit my LinkedIn profile R Sri Rengasarathy to explore my professional journey. Connect with me to stay updated on my latest projects and industry insights.</p> 
<br></br>
{/*<h2 className="about1 text-bold text-3xl ">📝 Contact Form</h2>
<p className="intro text-bold text-2xl ml-6">Prefer a quick and convenient way to send a message? Fill out the contact form below, and I'll get back to you as soon as possible.</p>
<br></br>*/}
</div>


    </>
);


export default Contact