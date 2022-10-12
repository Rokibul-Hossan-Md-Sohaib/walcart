import React from 'react';
import img1 from '../../../images/images1.jpg'
import img2 from '../../../images/images2.jpg'
import './RightSide.css'
const RightSide = () => {
    return (
        <div >
       <div className='img'>
       <img src={img1} alt=""  />
            <img src={img2} alt="" className='mt-3 image' />
       </div>
        </div>
    );
};

export default RightSide;