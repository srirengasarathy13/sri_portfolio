import React from 'react'
import Navbar from '/src/components/Navbar.jsx';
import Card_Service from '/src/components/Card_Service.jsx'


const Service = () => {
 const service = [
  {
    header:"🚀 Robust API Development:",
    img:"src/assets/api.jpg",
    para:"Building powerful and scalable APIs that serve as the backbone of your applications. Seamlessly connect databases, authentication systems, and external services.",
  },
  {
    header:"🌐 Server Architecture:",
    img:"src/assets/server_architect.jpg",
    para:"Crafting server architectures that ensure optimal performance, scalability, and security. From cloud deployments to serverless solutions, I've got you covered.",
  },
  {
    header:"🛠️ Data Management:",
    img:"src/assets/Data_Management.jpg",
    para:"Efficiently handle and manipulate data. Whether it's relational or NoSQL databases, I ensure your data is organized, accessible, and ready to empower your applications.",
  },
  {
    header:"✨ Responsive Web Design:",
    img:"src/assets/web_design.jpg",
    para:"Creating visually stunning and responsive interfaces that captivate users on any device. Your website will not only function flawlessly but look fantastic too.",
  },
  {
    header:"🎨 User Interface (UI) Development:",
    img:"src/assets/User_Interface.webp",
    para:"Designing pixel-perfect user interfaces with a keen eye for detail. I focus on user interactions and intuitive design to enhance the overall user experience.",
  },
  {
    header:"🚀 Performance Optimization:",
    img:"src/assets/performance_optimization.webp",
    para:"Utilizing the latest frontend technologies to optimize load times and enhance the overall performance of your web applications. Your users won't have to wait – speed is the name of the game.",
  }
 ]

  return (
    <>
  
   
  <Navbar/>
    
    <div className="bg-[#0A1828] min-h-screen bg-cover bg-center pt-20 overflow-hidden">
    
{service.map((service)=>{
  return <Card_Service service={service} />;
})}
</div>
    
    </>

   
  );
}

export default Service;