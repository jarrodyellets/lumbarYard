import React from 'react';

const About = () => {
  return (
    <div className="aboutWrapper" aria-label="about">
      <img src="https://www.jarrodyellets.com/images/lumbar/gack.jpg" className="aboutImg" />
      <div className="aboutTitle">Todd Gack, Founder and CEO</div>
      <div>Growing up in The Netherlands, I learned early on that one of the most important things you can do for yourself is to get 
      a good night's rest.  Nowadays, sleep is taken for granted, when it should be the focal point of a healthy lifestyle.  The quality of your
      mattress plays a huge role in your quality of sleep.  Eight hours of sleep on a poorly designed mattress is not the same as eight hours on 
      a well manufactured mattress.  After moving to New York, I soon realized that I was not happy with the quality of mattresses that were available.
      I found that if I deconstructed several mattresses and combined the materials in the correct ratios, I would create a fantastic mattress.  I tried
      to sell my idea to all of the big mattress companies, but they wanted the hear nothing about it.  So I took my idea and created The Lumbar Yard.  I 
      started with the philosophy that a good mattress needs to be properly calibrated to support the back, yet feel comfortable at the same time.  The
      materials need to be painstakingly measured to insure that the mattress has the proper ratios.  Too much foam, and you will feel it the next day.
      Too much latex, and you will sweat all night.  At The Lumbar Yard, we put each mattress through years of testing before we release it to the public.
      </div>
      <br />
      <img src="https://www.jarrodyellets.com/images/lumbar/store.jpg" className="aboutStore" alt="Old Store"/>
      <div className="aboutStoreCaption">Original Store, 1997</div>
      <br />
      <div>Todd Gack started The Lumbar Yard out of his Brooklyn Studio apartment in 1997.  After being open for 3 years, he quickly realized he need a bigger
      space if he wanted to The Lumbar Yard to grow.  In 2000, he opened the current location in the Upper West side of Manhattan.   
      </div>
    </div>
    )
}

export default About;