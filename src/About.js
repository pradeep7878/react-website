import React from 'react'

const About = () => {
  return (
    <div>
      <section className='about-section'>
        <div className="about">
          <div className="container" style={{marginTop:'8rem'}}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={require('./images/about.jpg')} alt='about' />
              </div>
              <div className="col-lg-6 px-2">
                <h3 className='heading'>ABOUT US</h3>
                <h4 className='sub-heading'>The Most Trusted Web Design Company in Coimbatore for 8 Years</h4>
                <p className='paragraph'>&nbsp;&nbsp;&nbsp;ClikTech is a reputed web development company in Coimbatore, Tamilnadu that has served different businesses from different industries in India and overseas over eight years. We, at ProPlus Logics, provide a range of services that focus on a single objective: growing your business. We pride ourselves in being able to offer the most intuitive, robust, feature-rich, and creative digital solutions that are apt for both B2B and B2C businesses of all stature. From designing logos to developing complex websites and software as well as doing complete digital marketing, we do everything that can help you beat your competition and make an impact on the market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
