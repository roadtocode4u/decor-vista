import "./Sign_up.css"
import toast, { Toaster } from 'react-hot-toast'

function Sign_up() {
     return (<>
          <div className=" main-container d-flex flex-wrap">
          <div className="signup-contaainer w-50 bg-secondary">
               <h1 className="fs-1 text-center mt-4">
                    "Designs that Spark Joy"
               </h1>
               <h2 className="fs-2 text-center mt-5">Sign-Up Here</h2>

               
         <div className=" d-flex flex-column  w-75 mx-auto " >
           <form>
               <div className=" my-3 ">
                 <h4 className="fs-5  ">Enter Full Name:</h4>   
        
             <input type="text" placeholder="Name" id="name" className="input-box rounded-2 px-3 py-1 w-100  fs-5 border-0" required/>
             </div>
             <div className=" my-3" >
             <h4 className="fs-5 ">Enter Email:</h4> 
            
             <input type="email" placeholder="Email" id="email" className="input-box rounded-2 px-3 py-1 w-100 fs-5 border-0"required />
             </div> 
             <div className=" my-3">
             <h4 className="fs-5 ">Enter Password:</h4> 
            
             <input type="password" placeholder="password" id="password" className="input-box rounded-2  px-3 py-1 w-100  fs-5 border-0"  />
             </div>

           
            
             </form>
             
         </div>
          </div>



          <div className="w-50 bg-success">
               <h1 className="fs-1">hello</h1>
          </div>
          </div>
          <Toaster />

     </>)
}

export default Sign_up