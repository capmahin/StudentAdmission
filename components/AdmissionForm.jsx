'use client';

import { useState } from "react"

export default function AdmissionForm(){
   const [fullname, setFullname] = useState('');
   const [email, setEmail]= useState('');
   const [message, setMessage]= useState('');



    const handleSubmit=(e)=>{
     e.preventDefault();
    }

    return(
       <>
       <form 
       onSubmit={handleSubmit}
       className="py- mt-4 border-t flex flex-col gap-5">
             <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                onChange={(e)=> setFullname(e.target.value)}
                value={fullname}
                type="text" id="fullname" placeholder="Student name" />
             </div>
             <div>
                <label htmlFor="email">Email</label>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                type="text"  id="email" placeholder="@gmail.com"/>
             </div>

             <div>
                <label htmlFor="Message"></label>
                <textarea  
                onChange={(e)=> setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message" placeholder="Type your message">

                </textarea>
             </div>
             <button 
             className="bg-green-700 p-3 text-white font-bold"
             type="submit">Send</button>
       </form>

       <div className="bg-slate-100 flex flex-col">
        <div className="text-red-600 px-5 py-2">
            Error message
        </div>
       </div>
       </>
    )
}