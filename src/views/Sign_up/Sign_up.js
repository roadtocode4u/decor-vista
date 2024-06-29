import "./Sign_up.css"
import toast, { Toaster } from 'react-hot-toast'
import gmail from "./images/gmail.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import {Link} from "react-router-dom"


function Sign_up() {
     return (<>
          <div className=" main-container d-flex flex-wrap">
               <div className="signup-contaainer w-50 bg-secondary">
                    <h1 className="fs-1 text-center mt-4">
                         "Designs that Spark Joy"
                    </h1>
                    <h2 className="fs-2 text-center mt-5">Sign-Up Here</h2>


                    <div className=" d-flex flex-column  w-75 mx-auto position-relative " >
                         <form>
                              <div className=" my-3 ">
                                   <h4 className="fs-5  ">Enter Full Name:</h4>

                                   <input type="text" placeholder="Name" id="name" className="input-box rounded-2 px-3 py-1 w-100  fs-5 border-0" required />
                              </div>
                              <div className=" my-3" >
                                   <h4 className="fs-5 ">Enter Email:</h4>

                                   <input type="email" placeholder="Email" id="email" className="input-box rounded-2 px-3 py-1 w-100 fs-5 border-0" required />
                              </div>
                              <div className=" my-3">
                                   <h4 className="fs-5 ">Enter Password:</h4>

                                   <input type="password" placeholder="password" id="password" className="input-box rounded-2  px-3 py-1 w-100  fs-5 border-0" />
                              </div>


                              <button type="submit" class="btn btn-primary w-100 my-4 rounded-3  fs-6 " onClick={
                                   () => {
                                        toast.success("You are  Successfully sign up!")
                                   }
                              }>Create an account</button>

                              <hr/>

                              <h3 className=" heading-continue text-center bg-secondary ">Or continue with</h3>

                         </form>

                    </div>
                    <div className="icon-container w-50  d-flex justify-content-evenly mx-auto mt-4" >

                         <a href="https://mail.google.com/" target="_blank" ><img src={gmail} className="icon  " /></a>
                         <img src={twitter} className="icon" />
                         <img src={facebook} className="icon" />
                    </div>
                    <h4 className="fs-5 text-center mt-4">Already have an account?  <Link to={"/login"}>Log In </Link> </h4>
               </div>

               <div className="w-50 bg-success">
                    <h1 className="fs-1">hello</h1> 
               </div>
          </div>
          <Toaster />

     </>)
}

export default Sign_up