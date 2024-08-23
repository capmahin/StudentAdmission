'use client';

import { useState } from "react"

export default function AdmissionForm(){
   const [fullname, setFullname] = useState('');
   const [fathername, setFathername] = useState('');
   const [mothername, setMothername] = useState('');
   const [email, setEmail]= useState('');
   const [message, setMessage]= useState('');
   const [messagep, setMessagep]= useState('');
   const [error, setError] = useState([]);
   const [success, setSuccess] = useState(false)



    const handleSubmit=async (e)=>{
     e.preventDefault();

     console.log("Full name:", fullname);
     console.log("Email name:", email);
     console.log("Message:", message);

     const res = await fetch('api/admission',{
      method:"POST",
      headers:{
         "Content-type":"application/json",
      },
      body:JSON.stringify({
         fullname,
         fathername,
         mothername,
         email,
         message,
         messagep,
      }),
     });

     const {msg, success} = await res.json();
     setError(msg);
     setSuccess(success)
      if(success){
         setFullname("");
         setFathername("");
         setMothername("");
         setEmail("");
         setMessage("");
         setMessagep("");
        
      }
    }

    return(
       <>
       <form 
       onSubmit={handleSubmit}
       className="py- mt-4 border-t flex flex-col gap-5">
             <div>
                <label htmlFor="fullname">Students Full Name</label>
                <input
                onChange={(e)=> setFullname(e.target.value)}
                value={fullname}
                type="text" id="fullname" placeholder="Student name" />
             </div>
             <div>
                <label htmlFor="fathername">Students Father Name</label>
                <input
                onChange={(e)=> setFathername(e.target.value)}
                value={fathername}
                type="text" id="fathername" placeholder="Students Father name" />
             </div>
             <div>
                <label htmlFor="mothername">Students Mother Name</label>
                <input
                onChange={(e)=> setMothername(e.target.value)}
                value={mothername}
                type="text" id="mothername" placeholder="Students Mother name" />
             </div>
             <div>
                <label htmlFor="email">Email</label>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                type="text"  id="email" placeholder="@gmail.com"/>
             </div>

             <div>
                <label htmlFor="Message">present Address</label>
                <textarea  
                onChange={(e)=> setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message" placeholder="Type your Address">

                </textarea>
             </div>
             <div>
                <label htmlFor="Message">permanent Address</label>
                <textarea  
                onChange={(e)=> setMessagep(e.target.value)}
                value={messagep}
                className="h-32"
                id="message" placeholder="Type your Address">

                </textarea>
             </div>
             <button 
             className="bg-green-700 p-3 text-white font-bold"
             type="submit">Submit</button>
       </form>

       <div className="bg-slate-100 flex flex-col">

         {
            error && error.map((e)=> (
               // eslint-disable-next-line react/jsx-key
               <div 
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
            ))
         }
        
       </div>
       </>
    )
}