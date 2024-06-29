import "./Sign_up.css"
import img from "./images/sign-up.png"
import gmail from "./images/gmail.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import toast, { Toaster } from 'react-hot-toast'


function Sign_up() {
  return (<>

<div className="sign-in-container d-flex justify-content-evenly justify-content-center flex-wrap ">
    <div className="img-container">
<img src={img} className="signup-img rounded-4" />
</div>
<div className="sign-in-form-container rounded-4">

    <h1 className=" text-center">Sign Up</h1>

    <div className="icon-container d-flex align-items-center justify-content-evenly">
        <img src={gmail} className="sign-icon" />
        <img src={facebook} className="sign-icon" />
        <img src={twitter} className="sign-icon" />
    </div>

    <div className="sign-form-container">
        <form>
            <input type="text" placeholder="Name" className="input-box px-3" />
            <input type="email" placeholder="Email" className="input-box px-3" />
            <input type="password" placeholder="password" className="input-box px-3" />
        </form>
    </div>

    <div>
        <button type="submit" className="signup-btn bg-primary"
         onClick={
            () => {
              toast.success("You are  Successfully sign up!")
            }
          }>Sign up</button>
    </div>
</div>
</div>
<Toaster/> 


  </>

  )
}

export default Sign_up