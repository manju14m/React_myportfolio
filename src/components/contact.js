import React from 'react'
import mobile from '../media/mobile.png'
import mail from '../media/mail.jpg'

export default function Contact (){
    return(
        <div id="contact">
            <div className="contact-me">
                <h4 className="heading">Contact Me..</h4> 
                <br/>
                <div>
                    <img className="contact-image" src={mobile} alt="mobile" />: +91 74065 64001
                </div>
                <br/>
                <div>
                    <img className="contact-image" src={mail} alt="mail" />: manju14m@hotmail.com
                </div>
            </div>
            <div className="contact-form">
                <form method="POST" className="form">
                    <input type="text" placeholder="Name *" id="name" className="text1" required/>
                    <input type="email" placeholder="Email *" id="email" required/>
                    <p className="err-email">please enter valid email</p>
                    <textarea style={{height:"80px"}} type="text" placeholder="Please enter your message here *" id="message" required></textarea><br/>
                    <button type="submit" style={{color:"rgb(37, 27, 27)"}}><i className="fa fa-paper-plane"></i> Send Message</button>
                </form>
                <div className="response">
                    <div>
                        <strong style={{color:"green"}}>Thank you!</strong>
                        <p style={{color:"rgb(67, 67, 73)",fontWeight: "100"}}>Your message has been sent successfully.</p>
                        <p style={{color:"rgb(55, 94, 5)"}}>I will contact you very soon!</p> */}
                        <a  style={{fontSize: "20px",cursor:"pointer",color:"blue"}} >Go to Contact Form</a>
                    </div>
                </div>
            </div>
        </div>
    )
}




        