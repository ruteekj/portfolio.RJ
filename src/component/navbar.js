import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'

const navbar = () => {
  return (
    <>




      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="home">Rut<span>ee</span>k</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav m-auto ">

              <Link spy={true} className="nav-link active" aria-current="page" to='home'>
                <li className="nav-item">
                  Home
                </li>
              </Link>

              <Link spy={true} className="nav-link" aria-current="page" to='project'>
                <li className="nav-item">
                  Project
                </li>
              </Link>
              <Link spy={true} className="nav-link" aria-current="page" to='experience'>
              
              <li className="nav-item">
             Experience
              </li>
              </Link>
              <Link spy={true} className="nav-link" aria-current="page" to='contact'>
            
              <li className="nav-item">
               Contact
              </li>
              </Link>
            </ul>
            <a style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} href="mailto:sonuilyjivanwal1432@gmail.com" target="_blank" rel="noopener noreferrer" > <button type="button" className="btn btn-primary" >Email Me</button></a>
          </div>

        </div>

      </nav>




    </>
  )
}

export default navbar