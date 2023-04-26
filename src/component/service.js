import React from 'react'
import "./servise.css"
import Resume from "../img/resume.pdf"

const service = () => {
    return (
        <>
            <div className="section " id='experience'>
                <div className="container experi">
                    <div className="row">
                        <div className="col-lg-6 p-3 text-center text-sm-start">
                            <h1>My Awesome <br /> <span>Experience</span><span className='dot'>.</span></h1>
                            <p>3 month training program at furation tech pvt ltd.(mumbai). worked on real-life project using react js.optimized code for improved functionality and performance
                                collaborated with team members to ensure project completion within deadline.
                            </p>
                           <a href={Resume} target="_blank" rel="noopener noreferrer"> <button type="button" className="btn btn-primary mt-4">Download CV</button></a>

                        </div>
                        <div className="col-lg-6 p-3 text-center text-sm-start  ">
                            <div className="card--component d-flex ">
                            <div className="card m-1" style={{width:'18rem',}}>
                                <div className="card-body  text-center">
                                    <h5 className="card-title">Devloper</h5>
                                    <p className="card-text">html5,css3,java-script,<br/>react,bootstrap</p>
                                    <a href="#project" className="btn btn-primary">Learn More..</a>
                                </div>
                            </div>
                            <div className="card m-1" style={{width:'18rem',}}>
                                <div className="card-body  text-center">
                                    <h5 className="card-title">managed project source code</h5>
                                    <p className="card-text">git & github, Slack, Asana</p>
                                    <a href="http://github.com/"target="_blank"rel="noopener noreferrer" className="btn btn-primary">Learn More..</a>
                                </div>
                            </div>
                            </div>
                            <div className="card--compo2 d-flex justify-content-center">
                            <div className="card m-1 " style={{width:'18rem',}}>
                                <div className="card-body text-center">
                                    <h5 className="card-title">UI/UX</h5>
                                    <p className="card-text">lorem ipsum dummy text<br/>are usally use in section where  we need some random text</p>
                                    <a href="https://www.lipsum.com/"target="_blank"rel="noopener noreferrer" className="btn btn-primary ">Learn More.. </a>
                                </div>
                            </div>
                            </div>
                            


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default service