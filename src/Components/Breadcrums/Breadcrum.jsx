import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {prodcut} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{prodcut.category} <img src={arrow_icon} alt="" />{prodcut.name}
      
    </div>
  )
}

export default Breadcrum
