import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
return (
    <div className='main'>
        <div className="nav">
            <p>Gemini 2.0</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p>
                    <span>
                        Welcome to Gemini 2.0
                    </span>
                </p>
                <p>
                    How can I help you today?
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>
                        Suggest beautiful places to visit in the upcoming road trip
                    </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                        Summarize the content briefly
                    </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                        Brainstorm ideas for a new project  
                    </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>
                        Improve the readability of the following code
                    </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="searchbox">
                    <input type="text" placeholder='Enter Prompt' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>    
            </div>
        </div>
    </div> 
    )}

export default Main