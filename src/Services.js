import React from 'react';
import Card from './Card.js';
import Data from './Data.js';

const Services = () => {
  return (
    <div>
              <section className='services-section'>
        <div className="services">
          <div className="container">
            <h3 className='heading'>SERVICES</h3>
            <div className="row text-center">
              {Data.map(data => {
                return (
                  <>
                    <div className="col-lg-4">
                      <Card
                        img={data.img}
                        title={data.title}
                        text={data.text}
                      />
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
