import React from 'react';
import './brand.css'
import { fullstack, quote, random, coding } from './imports';

const brand = () => {
    return (
        <div className="feature-container">
            <div className="feature-content">
                <div className="main-info">
                    <h2 className='main-title'>Our services</h2>
                    <p className='main-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque harum provident culpa facilis incidunt inventore, modi quasi necessitatibus accusantium sunt possimus repudiandae suscipit sit tenetur deleniti similique expedita? Quaerat!</p>
                </div>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="icon">
                            <img className='imgg' src={random} alt="" />
                        </div>
                        <div className="feature-info">
                            <div className="feature-title">Hey Coders</div>
                            <div className="feature-desc">
                                hey coders wanna join us in thuis community ti work for the advancements
                            </div>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon">
                            <img className='imgg' src={coding} alt="" />
                        </div>
                        <div className="feature-info">
                            <div className="feature-title">Hey Coders</div>
                            <div className="feature-desc">
                                hey coders wanna join us in thuis community ti work for the advancements
                            </div>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon">
                            <img src={quote} className='imgg' alt="" />
                        </div>
                        <div className="feature-info">
                            <div className="feature-title">Hey Coders</div>
                            <div className="feature-desc">
                                hey coders wanna join us in thuis community ti work for the advancements
                            </div>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon">
                            <img src={fullstack} className='imgg' alt="" />
                        </div>
                        <div className="feature-info">
                            <div className="feature-title">Hey Coders</div>
                            <div className="feature-desc">
                                hey coders wanna join us in thuis community ti work for the advancements
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default brand