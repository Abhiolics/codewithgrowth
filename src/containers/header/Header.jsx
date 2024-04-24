import React from 'react';
import './header.css'
import  people from '../../assets/people.png';
import Navim from '../../assets/Navim.png';

const Header = () => {
    return (
        <div className='cwg__header section__padding' id='home' >
            <div className='cwg__header-content'>
                <h1 className='gradient__text'>What is code with growth!</h1>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt neque possimus exercitationem perferendis recusandae eos consequuntur debitis, cupiditate non mollitia similique eveniet? Unde esse sapiente molestias optio qui itaque praesentium!</p>

               
                <div className=' cwg__header-content__input'>
                <input type="null" placeholder="Join Our Learner's Community!" id="" />
                <button type='button'> Get Started
                </button>
            </div>
            <div className='cwg__header-content-people'>
                <img src={people} alt='people'/>
              
                <p> 197 Peoples visit in last 24 hours</p>
            </div>
            </div>
<div className='cwg__header-image'>
<img src={Navim} alt="img" />
            </div>
            </div>
         
            
    )
}

export default Header