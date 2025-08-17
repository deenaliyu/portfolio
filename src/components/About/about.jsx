import React from 'react'
import './about.css'
import profile_img from '../../assets/profile_img.jpg'
const about = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>

            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" className='mypic' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        Hi, I'm Aliyu Nurudeen, a passionate Software Developer dedicated to building efficient, scalable, and user-friendly applications. With a solid foundation in computer science and a keen eye for detail, I excel in both front-end and back-end development.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>FRONTEND</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>BACKEND</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>DATABASES</p><hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>DEV OPS</p><hr style={{ width: "62%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SECURITY</p><hr style={{ width: "90%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achvs">
                <div className="about-achv">
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCCE</p>
                </div>
                <hr />
                <div className="about-achv">
                    <h1>35+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achv">
                    <h1>8+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default about
