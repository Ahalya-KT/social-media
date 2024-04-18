import React from 'react'
import img1 from "/images/pic.jpg";
import img2 from "/images/pic2.jpeg"
import img3 from "/images/contact-us.webp"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Home = () => {
  return (

    <div>
      <div className=' h-screen w-full flex gap-32 '>
    <div className='py-40 px-24 '>
    <h1 className='font-extrabold text-5xl w-96  line-clamp-3 text-green-400 '>SOCIAL MEDIA LANDING PAGE</h1>
    <p className='py-4 w-96 line-height-snug'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis at quod recusandae saepe voluptate dignissimos? Quae omnis minus qui, odio dolores</p>
    <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-3 rounded-lg text-white font-extrabold'>JOIN US</button>
    </div>
    <div className='w-96 py-28'>
        <img src={img1}/>
    </div>
     {/* About-us page */}
     <div>
       
     </div>

   
    </div>
    <div className=''>
        <div className=' text-center font-bold text-xl text-green-400'>
        <h1 className='py-7'>ABOUT-US</h1>
        </div>
              
              <div className="flex justify-center">
                <img src={img2}/>
              </div>

        <div className='py-16 text-center  '>
             <h1 className='text-2xl font-extrabold'> KNow More ABOut <span className='text-green-400'>SocialHub</span></h1>
             <p className='mx-auto w-96 py-7 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ex quisquam voluptatem reprehenderit, quam, laudantium facere assumenda eligendi perspiciatis velit at eum saepe veritatis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repudiandae at officiis minima dignissimos suscipit animi maiores natus ipsa quisquam eos, nemo, dolor non aut odit, exercitationem incidunt! Quaerat, quidem!</p>
             <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded-lg text-white font-extrabold'>Learn More</button>
        </div>
    </div>
    {/* services */}
       <div className='py-20'>
       <div className=' text-center font-bold text-xl text-green-400'>
        <h1 className='py-7'>SERVICES</h1>
        </div>

        <div className='flex gap-6 py-6 px-7 text-center'>
            <div className="border border-black-300 border-solid border-2 rounded-md p-6">
                <h1 className='font-bold text-xl text-green-400 py-3'>Communication</h1>
                <p>Social media platforms allow users to communicate with each other in various ways, including:
                    Text-based messaging: Sending direct messages, comments, or replies.
                    Voice and video calls: Making audio or video calls with friends, family, or colleagues.</p>
            </div>
            <div className="border border-black-300 border-solid border-2 rounded-md p-6 text-center">
                <h1 className='font-bold text-xl text-green-400 py-3'>Content Sharing</h1>
                <p>Users can share different types of content, such as:
                    Text posts: Writing and sharing thoughts, updates, or announcements.
                    Photos and images: Uploading and sharing visual content.
                    Videos: Sharing recorded or live videos</p>
            </div>
            <div className="border border-black-300 border-solid border-2 rounded-md p-6 text-center">
                <h1 className='font-bold text-xl text-green-400 py-3'>Group Chat</h1>
                <p>Social media platforms allow users to communicate with each other in various ways, including:
                    Text-based messaging: Sending direct messages, comments, or replies.
                    Voice and video calls: Making audio or video calls with friends, family, or colleagues.</p>
            </div>

         </div>
       </div>
   

         {/* contact us */}
         <div className='py-20' >
         <div className=' text-center font-bold text-xl text-green-400'>
        <h1 className='py-7'>CONTACT-US</h1>
        </div>
           
           {/* form */}
           <div className='flex gap-10 py-32'>
           <div className='py-6 px-20'>
             <div className='py-8'>
                <h1 className='font-extrabold text-2xl'>Contact-Us For more Details</h1>
                <p className='py-3'>If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us</p>
             </div>
             <div className='flex flex-col gap-4'>
             <input placeholder='enter your Name' className='p-2 border-2 w-96 rounded-lg'/>
             <input placeholder='enter your Mail' className='p-2 border-2 w-96 rounded-lg'/>
             <textarea placeholder='enter your Text' className='p-2 border-2 w-96 rounded-lg'/>
             </div>
             
             <div className='py-8'>
             <button className='bg-gradient-to-r from-indigo-500  from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-3 rounded-lg text-white font-extrabold'>CONTACT-US</button>
             </div>
           
           
        </div>
                {/* social-media image */}
              <div className='py-9 '>
                  <img src={img3} />
              </div>
           </div>
        
           {/* footer */}
           <footer className='bg-slate-400 p-8 text-center'>
            <h1 className='text-white font-semibold text-xl'>Follow-Us</h1>
            <div className='flex gap-2 justify-center text-white py-2'>
            <FaWhatsapp />
            <FaInstagram />
            <FaFacebookSquare />
            </div>
            Thankyou
           </footer>

         </div>
    </div> 
    

    
  )
}

export default Home