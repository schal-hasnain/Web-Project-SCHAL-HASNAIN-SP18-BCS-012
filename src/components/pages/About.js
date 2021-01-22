import React from 'react';
import '../../App.css';
import '../pages/About.css';
import { Button } from "../Button"
import { Link } from "react-router-dom";
import Image2 from "../../images/image-2.jpg"



function About() {
return(
  <>  
<div className="main-container">
<div className="ptags">
<img src={Image2} className="image2"></img>
<p className="line1">
  We are providing you an oppertunity to Learn</p>
 <p className="line2">
 in this Qurrantine (as per COVID-19)
</p>
<a className="line3">
Get your self register and start learning
</a>
<div className="btnStarted">
<Link to="/sign-up" className=""></Link>
{<Button buttonStyle="btn--outline">Get Started</Button>}
</div>
</div>
</div>
</>
)}

export default About;