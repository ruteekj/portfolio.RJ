
import "./contact.css"
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';




const Contact = () => {
  const form = useRef();
  const [done,setdone] =useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_omysr4y', 'template_i66idsq', form.current, 'rUAhnTMGMKkNGXys3')
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });
  };







 



  return (
    <>

      <div className="section " id='contact'>
        <div className="container " style={{ marginTop: '50px', marginBottom: '50px', paddingTop: '100px' }}>
          <div className="row">
            <div className=" col-md-6 text-center text-md-start">
              <h1>Get in Touch</h1>
              <h1><span>Contact Me</span></h1>
            </div>
            <div className=" col-md-6  text-center text-md-start">
              <form ref={form} onSubmit={sendEmail} >
               
                <input type="text" className='user' name='username' placeholder='name' /><br />
                <input type="email" placeholder='Email' name='email' className='user' /><br />
                <textarea id="" className='user'name='text' placeholder='message' /><br />
                <input type="submit" value="send" className='btn btn-primary mt-4' />
                
              </form>
              <h1><span style={{fontSize:"30px"}}>{done && "thanks for contacting me!"}</span></h1>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact