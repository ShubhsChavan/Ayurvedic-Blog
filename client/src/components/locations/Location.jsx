import React from 'react'
import './location.css'
const Location = () => {
    return (
        <div className='location-container'>
            <h1>Our <span style={{ color: 'orange' }}>Clinics</span></h1>
            <div className="locations">
                <div className="first-location">
                    <div className="location-heading">
                        {/* <span>icon</span> */}
                        <span className="location-name">Basmath</span>
                    </div>
                    <div className="location-image">
                        <img src="../../../assets/Images/shambhajinagar.png" alt="" />
                    </div>
                    <div className="address">
                        <span className="location-name">Address</span>
                        <span className="location-address">Spacia, Near Cafe coffee day,Beside, Bhumkar Chowk, Wakad, Pune, Maharashtra 411057</span>
                    </div>
                </div>
                <div className="second-location">
                    <div className="location-heading">
                        {/* <span>icon</span> */}
                        <span className="location-name">Sambhajinagar</span>
                    </div>
                    <div className="location-image">
                        <img src="../../../assets/Images/shambhajinagar.png" alt="" />
                    </div>
                    <div className="address">
                        <span className="location-name">Address</span>
                        <span className="location-address">Spacia, Near Cafe coffee day,Beside, Bhumkar Chowk, Wakad, Pune, Maharashtra 411057</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Location
