import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact-section" style={{height:'100%',marginTop:'6rem'}}>
        <div className="container-fluid">
          <div className="contact reveal">
            <h1>CONTACT US</h1>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.121167750774!2d76.9674075!3d11.0175843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1694714532311!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <form>
                  <input className="form-control" type="text" placeholder="Enter Your Name" />
                  <input className="form-control" type="email" placeholder="Enter your Email" />
                  <textarea rows="3" placeholder="Enter Your Message" class="form-control"></textarea>
                  <button className="btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
