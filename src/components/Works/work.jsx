import React from 'react'
import './work.css'
import mywork_data from '../../assets/mywork_data'

const work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1> 
      </div>
      <div className="mywork-cont">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
    </div>
  )
}

export default work
