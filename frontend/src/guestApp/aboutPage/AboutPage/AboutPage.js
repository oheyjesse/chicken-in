import React from 'react'
import './AboutPage.scss'
import about1 from '../../../img/about-assets/about_img_1.svg'
import about2 from '../../../img/about-assets/about_img_2.svg'
import about3 from '../../../img/about-assets/about_img_3.svg'
import about4 from '../../../img/about-assets/about_img_4.svg'

const AboutPage = () => (
  <div className="AboutPage">
    <section className="about-sect">
      <div className='about-img'>
        <img className='about-img' src={about1} alt='about1' />
      </div>
      <h1>What the Cluck is Chicken-In?</h1>
      <p>
        In short, Chicken-In is a light-weight shift management system, created to help you quickly and efficiently log, track and manage your daily shifts.
      </p>
    </section>
    <section className="about-sect">
      <div className='about-img'>
        <img src={about2} alt='about1' />
      </div>
      <h1>Just Chick-In and Chick-Out</h1>
      <p>
        Designed with clean and easy-to-use interface - sign in, log your hours, and the app will automatically track and calculate your hours for that week, include standard, double and overtime rates.
      </p>
    </section>
    <section className="about-sect">
      <div className='about-img'>
        <img className='about-img' src={about3} alt='about1' />
      </div>
      <h1>The Results Are In...</h1>
      <p>
        Once your shifts have been submitted, your manager can then log on and check your timesheets for approval. If there's been a hiccup, you'll be notified in the app and asked to resubmitt your shift.
      </p>
    </section>
    <section className="about-sect">
      <div className='about-img'>
        <img src={about4} alt='about1' />
      </div>
      <h1>Help Is only a Cluck Away</h1>
      <p>
        Need some help? Head over to the contact section and send us your burning queries.
      </p>
    </section>
  </div>
)

export { AboutPage }