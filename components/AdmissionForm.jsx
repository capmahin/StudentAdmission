export default function AdmissionForm(){
    return(
       <>
       <form className="py- mt-4 border-t flex flex-col gap-5">
             <div>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Student name" />
             </div>
             <div>
                <label htmlFor="email">Email</label>
                <input type="text"  id="email" placeholder="@gmail.com"/>
             </div>

             <div>
                <label htmlFor="Message"></label>
                <textarea  id="message" placeholder="Type your message">

                </textarea>
             </div>
             <button type="submit">Send</button>
       </form>

       <div>
        <div>
            Error message
        </div>
       </div>
       </>
    )
}