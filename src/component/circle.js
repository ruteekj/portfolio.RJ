import React from 'react'
import "./circle.css"

const circle = () => {
    return (
        <>

            <div className="container citcu ">
                <div className="row ">
                    <div className="col circle--media">
                        <div className="box text-center m-3">
                            <div className="circle--radi text-center"> 3+</div>
                            <span style={{   fontSize: '20px', fontFamily: "  cursive",
                                color: '#f5c32c' }}>Month
                            </span><br />
                            <span style={{   fontSize: '20px', fontFamily: "  cursive",
                                color: '#f5c32c'}}>
                             Experience
                            </span>


                        </div>
                        <div className="box text-center m-3">
                            <div className="circle--radi text-center">10+</div>
                            <span style={{
                                fontSize: '20px', fontFamily: "  cursive",
                                color: '#f5c32c'
                            }}>
                                Completed
                            </span><br />
                            <span style={{   fontSize: '20px', fontFamily: "  cursive",
                                color: '#f5c32c'}}>
                                Project
                            </span>


                        </div>
                        <div className="box text-center m-3">
                            <div className="circle--radi text-center">2+</div>
                            <span style={{   fontSize: '20px', fontFamily: "  cursive",
                                color: '#f5c32c' }}>
                                Companies
                            </span><br />
                            <span style={{   fontSize: '20px', fontFamily: "  cursive",
                                color: '#f5c32c' }}>
                                Work
                            </span>


                        </div>
                    </div>


                </div>

            </div >





        </>
    )
}

export default circle