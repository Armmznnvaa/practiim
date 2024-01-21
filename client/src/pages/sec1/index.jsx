import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./sec1.scss"

const Sec1 = () => {
  return (
    
    <div className='section1'>
        <div className='container'>
        <div className='row'>
            <div className='col-xl-6 col-12'>
               <div className='images'> <img src='https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp'></img></div>
            </div>
            <div className='col-xl-6 col-12'>
               <div className='context' >
               <h4>ABOUT TASTY</h4>
                <h2>Our chef cooks the most delicious food for you</h2>
                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
                <br />
                <br />
                <span>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</span>
               </div>
            </div>
        </div>

    </div>
    </div>
    
  )
}

export default Sec1