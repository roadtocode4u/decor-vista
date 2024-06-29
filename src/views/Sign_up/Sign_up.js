import "./Sign_up.css"
import img from "./images/sign-up.png"
import gmail from "./images/gmail.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import toast, { Toaster } from 'react-hot-toast'
function Sign_up() {
  return (<>

<div className="sign-in-container">

<img src={img} className="signup-img" />

<div className="sign-in-form-container">

    <h1 className="sign-in-text">Sign Up</h1>

    <div className="sign-in-logo-img-container">
        <img src={gmail} className="sign-logo-img" />
        <img src={facebook} className="sign-logo-img" />
        <img src={twitter} className="sign-logo-img" />
    </div>

    <div className="sign-form-container">
        <form>
            <input type="text" placeholder="Name" className="input-box" />
            <input type="email" placeholder="Email" className="input-box" />
            <input type="password" placeholder="password" className="input-box" />
        </form>
    </div>

    <div>
        <button type="submit" className="signup-btn"
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