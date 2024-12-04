import React from 'react'
import Navbar from '/src/components/Navbar.jsx';
import Header_Para from '/src/components/Header_Para.jsx'


const About = () => {
 
const about=[
{
  header:"👋 Hello Again! I'm Sri Renga, a Dedicated Backend Developer!",
  para:"As a fervent backend developer, I find my true passion in the intricate world behind the scenes of every digital innovation.Dive into my realm, and you'll discover a professional who thrives on transforming lines of code into powerful, scalable,and efficient solutions."
  
},
{
  header:"💻 Crafting Digital Foundations:",
  para:"I've found my home. Armed with a profound understanding of server-side technologies, databases, and API architecture,I embark on a journey to fortify the backbone of applications."
  
}
,
{
  header:"🚀 Driven by Dedication:",
  para:"My commitment to the craft goes beyond the confines of working hours.    I'm on a perpetual quest for excellence,constantly honing my skills and staying abreast of the latest advancements in the ever-evolving tech landscape."
},
  
{
  header:"🛠️ Tech Stack Mastery:",
  para:"Proficient in React Js,Tailwind CSS,JAVA,etc I wield a versatile toolkit to create robust solutions that stand the test of time. Whether it's optimizing database structures or architecting , I thrive in the complexity of backend development.  "

}
,
{
  header:" 🌐 Problem-Solving Philosopher:",
  para:"Every challenge is an opportunity to innovate.I approach problem-solving with an unwavering determination to find elegant and efficient solutions,  transforming complexities into streamlined and scalable backend architectures. "

}
,
{
  header:"🌟 Beyond the Code:",
  para:"Beyond the realms of syntax and algorithms,I'm a tech enthusiast who loves exploring emerging trends, contributing to open-source projects, and sharing knowledge within the developer community. "
  
},
{
  header:"🚀 The Future Awaits:",
 para:"As a backend developer, my journey is a continuous evolution. I envision a future where my skills and expertise contribute to groundbreaking projects and technological advancements,  pushing the boundaries of what's possible in the digital realm.Ready to collaborate on backend excellence? Let's connect and explore the limitless possibilities of coding brilliance!"
} 
];






  return (
    <>
   <Navbar />

<div className=" bg-[#0A1828] min-h-screen bg-cover bg-center">
  <br />
<h1 className=" text-[#D7BA99] about text-extrabold text-5xl underline ml-5"> Little About Me</h1>
<br></br>
{/*
<h2 className="about1 text-[#178582] text-bold text-3xl">👋 Hello Again! I'm Sri Renga, a Dedicated Backend Developer!</h2>   
<p className="intro text-[#BFA181] text-bold text-2xl ml-6">As a fervent backend developer, I find my true passion in the intricate world behind the scenes of every digital innovation. 
    Dive into my realm, and you'll discover a professional who thrives on transforming lines of code into powerful, scalable,
     and efficient solutions.</p>
     <h2 className="about1 text-[#178582] text-bold text-3xl">💻 Crafting Digital Foundations:</h2>   
    <p className="intro text-[#BFA181] text-bold text-2xl ml-6">
    I've found my home. Armed with a profound understanding of server-side technologies, databases, and API architecture,
     I embark on a journey to fortify the backbone of applications.</p>
     <h2 className="about1 text-[#178582] text-bold text-3xl">🚀 Driven by Dedication:</h2>   
 <p className="intro text-[#BFA181]  text-bold text-2xl ml-6">My commitment to the craft goes beyond the confines of working hours. 
       I'm on a perpetual quest for excellence,
   constantly honing my skills and staying abreast of the latest advancements in the ever-evolving tech landscape.</p>  
  <h2 className="about1  text-[#178582] text-bold text-3xl ">🛠️ Tech Stack Mastery:</h2>   
 <p className="intro text-[#BFA181] text-bold text-2xl ml-6">Proficient in React Js,Tailwind CSS,JAVA,etc 
 I wield a versatile toolkit to create robust solutions that stand the test of time. Whether it's optimizing database structures or architecting
  I thrive in the complexity of backend development</p> 
  <h2 className="about1 text-[#178582] text-bold text-3xl "> 🌐 Problem-Solving Philosopher:</h2>   
 <p className="intro text-[#BFA181] text-bold text-2xl ml-6">Every challenge is an opportunity to innovate. 
 I approach problem-solving with an unwavering determination to find elegant and efficient solutions,
  transforming complexities into streamlined and scalable backend architectures.</p> 
  <h2 className="about1 text-[#178582] text-bold text-3xl"> 🌟 Beyond the Code:</h2>   
<p className="intro text-[#BFA181] text-bold text-2xl ml-6">Beyond the realms of syntax and algorithms, 
I'm a tech enthusiast who loves exploring emerging trends, 
contributing to open-source projects, and sharing knowledge within the developer community.</p>   
<h2 className="about1 text-bold text-[#178582] text-3xl"> 🚀 The Future Awaits:</h2>   
<p className="intro text-[#BFA181] text-bold text-2xl ml-6">As a backend developer, my journey is a continuous evolution.
 I envision a future where my skills and expertise contribute to groundbreaking projects and technological advancements, 
 pushing the boundaries of what's possible in the digital realm.
Ready to collaborate on backend excellence? Let's connect and explore the limitless possibilities of coding brilliance!
</p> 
*/}
{about.map((about)=>{
  return <Header_Para about={about} />;
})}

</div>
   </>
  );
}

export default About;