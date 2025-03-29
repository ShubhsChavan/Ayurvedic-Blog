import React from 'react'
import './location.css'
const Location = () => {
    return (
        <div className='location-container'>
            <h1>Our <span style={{ color: 'orange' }}>Clinics</span></h1>
            <div className="locations">
                <div className="first-location">
                    <div className="location-heading">
                        <img className='location-image' src="../../../assets/Images/google-maps.png" alt="" />
                        <span className="location-name">Pune</span>
                    </div>
                    <div className="location-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.467772464085!2d73.80147617519356!3d18.598018582510612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b901f3254ca1%3A0x4c793166e229bf15!2sDr.%20Krishna%20chavan%20-%20shree%20Vishwapranaya%20Ayurved%20and%20Panchkarma%20clinic!5e0!3m2!1sen!2sin!4v1742108595455!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address">
                        <span className="location-name">Address</span>
                        <span className="location-address">Seven Star Ln, near K.E.T. public school, Mithila Nagari, Pimple Saudagar, Pimpri-Chinchwad, Pune, Maharashtra 411027</span>
                    </div>
                </div>
                <div className="second-location">
                    <div className="location-heading">
                        <img className='location-image' src="../../../assets/Images/google-maps.png" alt="" />
                        <span className="location-name">Basmath</span>
                    </div>
                    <div className="location-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.467772464085!2d73.80147617519356!3d18.598018582510612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b901f3254ca1%3A0x4c793166e229bf15!2sDr.%20Krishna%20chavan%20-%20shree%20Vishwapranaya%20Ayurved%20and%20Panchkarma%20clinic!5e0!3m2!1sen!2sin!4v1742108595455!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '100%'  }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="address">
                        <span className="location-name">Address</span>
                        <span className="location-address">Dr. Krishna Chavan Bhoripgao Road, Shri Nagar Basmath, Dist. Hingoli, Maharashtra, 4311512 </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Location
