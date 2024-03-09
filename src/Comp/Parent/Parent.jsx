import React, { useState } from 'react';
import Child from '../Child/Child.jsx'

import user_icon from '../Assest/person.png'
import email_icon from '../Assest/email.png'
import password_icon from '../Assest/password.png'

import './Parent.css'
const Parent = () => {
    
    const [action,setAction] = useState("Sign Up")

 
     
        return <>

<div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email"placeholder='Enter Email'  />
                </div>}
                
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='username'/>
                </div>
               

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forget-password">Forget Password? <span>Click Here</span> </div>
}
                
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

            </div>
        </div>
        
        <child/>

        </>
           }


export default Parent;