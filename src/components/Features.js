import React from "react";
import Database from "../images/database-icon.svg"
import Email from "../images/email-icon.svg";
import Chat from "../images/chat-icon.svg";
import Terminal from "../images/terminal-icon.svg";




const Features = () => {
  return (
    <div className="font-poppins">

    <div className="w-full min-h-screen bg-white-50 p-6">

        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Check out the <span class="text-red-500">Features</span> of our App</h1>



        <div className="flex flex-wrap justify-center">

            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src={Database} alt="" class="h-20 m-6" />

                <h2 className="text-center px-2 pb-5">Database Support</h2>  
                
                <a href="#" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</a>

            </div>



            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src={Email} alt="" class="h-20 m-6" />

                <h2 className="text-center px-2 pb-5">Email Support</h2>  
                
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</a>

            </div>



            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src={Chat} alt="" class="h-20 m-6" />

                <h2 className="text-center px-2 pb-5">Chat Support</h2>  
                
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</a>

            </div>



            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src={Terminal} alt="" class="h-20 m-6" />

                <h2 className="text-center px-2 pb-5">Terminal Commands</h2>  
                
                <a href="#" className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</a>
            </div>
            
        </div>
    </div>
  </div>
  )
}

export default Features;
