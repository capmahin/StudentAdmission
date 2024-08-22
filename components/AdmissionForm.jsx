export default function AdmissionForm(){
    return(
       <>
       <form>
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
       </>
    )
}