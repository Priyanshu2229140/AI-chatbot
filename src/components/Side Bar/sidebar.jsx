import React,{useState} from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setIsOpen(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {isOpen?<p>New Chat</p>:null}
            </div>
            {isOpen?<div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react...</p>
                </div>
            </div>
            :null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {isOpen?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {isOpen?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {isOpen?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar