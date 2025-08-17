import React from 'react'
import './contact.css'
import envelope_solid from '../../assets/envelope_solid.svg'
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
const contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "42ee5f46-a97e-4841-9f99-47c5bdb92402");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    }
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently available for new projects | Discuss your ideas and let's bring them to life.</p>
                <div className="contact-details">
                    <div className="contact-detail1 contact-detail">
                    <img src={envelope_solid}alt="" />
                   <p>deen.aliyu40@gmail.com</p>
                    </div>
                    <div className="contact-detail2 contact-detail">
                    <img src={phone} alt="" />
                        <p>07551113849</p>
                    </div>
                    <div className="contact-detail3 contact-detail">
                        <img src={location} alt="" />
                         <p>Bristol, United Kingdom</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='Email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" placeholder='Enter your message' rows="8"></textarea>
                <button className='button-submit' type='submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default contact
