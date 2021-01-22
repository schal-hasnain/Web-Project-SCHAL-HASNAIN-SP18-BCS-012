import {React, button} from 'react';
import '../../components/pages/Contact.css';


function Contact() {
  return(
    <>
    <div className="Contact-Container">
      <div className="form-container">
        <form className="form">
          <label>Full Name</label>
          <input className="Name" placeholder="Enter your name"></input>
          <label>Email</label>
          <input className="Email" placeholder="Enter your Email"></input>
          <label>Contact</label>
          <input className="Contact" placeholder="Enter your contact"></input>
          <label>Message</label>
          <input className="Message" style={{height: "10vw"}}></input>
        </form>
        <div className="btn-container">
        <button className="btn-submit">Submit</button>
      </div>
      </div>
  </div>
</>
);
}


export default Contact;