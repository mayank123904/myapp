import React from 'react'
import "./profilecard.css"

const profilecard = (props) => {
  return (
    <>
    <div className='pccont'>
        <div className="bloodtype">
        {props.bloodtype}
        </div>
        <div className="donorname">
        {props.donorname}
        </div>
        <div className="donormobile">
        {props.donormobile}
        </div>
    </div>
    </>
  )
}
export default profilecard