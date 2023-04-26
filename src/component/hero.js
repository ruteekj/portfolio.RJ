import React from 'react'
import "./hero.css";
import photo from '../img/photo.png'




const hero = () => {
  return (
    <section id='home'>
      <div className="container pt-5">
        <div className="row py-5">
          <div className="col-lg-6 p-3 text-center text-sm-start">
            <h1>Hello I'm <span>Ruteek J</span><span className='dot'>.</span></h1>
            <p>front-end devloper</p>
            <p>     Hi, I'm  a passionate front-end developer with training experience creating highly optimized, beautiful, and functional websites and applications. My skills include expertise in HTML, CSS, JavaScript, Bootstrap and other front-end technologies, as well as experience with popular frameworks like React js.

         

             
            </p>
            <a href="tel:7769071381" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary mt-4">Contact Me</button></a>
            <div className="d-flex social justify-content-center justify-content-sm-start">
            <a href="https://instagram.com/sonuhrithik1432?igshid=ZDdkNTZiNTM="rel="noopener noreferrer" target="_blank" > <i className="bi bi-instagram"></i></a> 
            <a href="https://www.linkedin.com/in/ruteek-jivanwal-74a072175"target="_blank"rel="noopener noreferrer" > <i className="bi bi-linkedin"></i></a> 
            <a href="https://github.com/ruteekj"> <i className="bi bi-github"target="_blank" ></i></a> 
            </div>
          </div>
          <div className="col-lg-6 p-3">
            <div className="img-fluid  circle ">
              <img className="img-fluid animated" src={photo} alt="" />
            </div>



          </div>
        </div>
      </div>
    </section>


  )
}

export default hero