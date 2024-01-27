import React from 'react'
import './about.css'
import nk from '../../assests/nk.jpg'
import Resume from '../../assests/Resume.pdf'
// import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__nk-image'>
            <img src={nk} alt="" />
          </div>
        </div>

        <div className='about__contact'>
          <div className='about__cards'>
            {/* <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article> */}

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Zero</small>
            </article> */}

            {/* <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article> */}
          </div>

          <p>
            
          </p>
          <a href={Resume}download className='btn'>Download Resume</a>
          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>

    </section>
  )
}

export default About