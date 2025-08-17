import React from 'react'
import './footer.css'
import user from '../../assets/user.svg'

const footer = () => {
    return (
        <div className='footer'>
            <div className="title">
                <div className="name">
                    <h1>Aliyu Nurudeen</h1>
                    <p>Where software meets passion, I design and develop solutions that inspire.</p>
                </div>
                <div className="mail">
                    <div className='mails'>
                    <img src={user}alt="" />
                <input type="email" placeholder='Enter your email' name='email' />
                </div>
                <button>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="downleft">
                <p>© 2025 Aliyu Nurudeen. All right reserved.</p>
                <div className="hey">
                    <p>Terms of services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default footer
