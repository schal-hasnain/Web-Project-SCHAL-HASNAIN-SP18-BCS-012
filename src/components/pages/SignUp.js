import React from 'react';
import '../../components/pages/Signup.css';

function signup() {
  return(
       <div className="container-signup">
        <h1>Let's Get Started with us by filling the information below !</h1>
        <br></br>
        <br></br>
       <form className="Signup-form">
         <label className="Fname">First Name</label>
         <input className="Fname-input"></input>
         <br></br>
         <label className="Lname">Last Name</label>
         <input className="Lname-input"></input>
         <br></br>
         <label className="Email">Email</label>
         <input className="Email-input"></input>
         <br></br>
         <label className="Contact">Contact</label>
         <input className="Contact-input"></input>
         <br></br>
         <label className="Password" >Password</label>
         <input type="password" className="Password-input"></input>
         <br></br>
         <label className="Password-confirm">Confirm Password</label>
         <input type="password" className="Password-confirm-input"></input>
         <br></br>
       </form>
       <br></br>
         <button className="btn-submit2">SignUp</button>
      </div>
  );
}
export default signup;