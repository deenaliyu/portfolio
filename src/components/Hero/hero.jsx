import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.jpg'
import Aliyu_resume from '../../assets/Aliyu_resume.pdf'


const hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={profile_img} alt="" className='my-img' />
            <h1><span>I'm Aliyu Nurudeen</span> a Software Engineer </h1>
            <p>Empowering innovation through scalable, efficient, and reliable software solutions.</p>
        <div className="hero-action">
            <a href="#contact"><p className="connect">Connect with me</p></a>
            <a href={Aliyu_resume}><p className="resume">My resume</p></a>
        </div>
        </div>
    )
}

export default hero
