import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills I Have</h2>
      {/* <h2>My Experience</h2> */}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Bootstarp</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React.js</h4>
              {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className="text-light">Beginner</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node.JS</h4>
              {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Express.JS</h4>
              {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              {/* <small className="text-light">Beginner</small> */}
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4></h4>
              <small className="text-light">Beginner</small>
            </article> */}
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Experience