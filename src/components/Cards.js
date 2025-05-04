import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
             
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="images/pic3.png"
                text="Our local shops"
                label='Near by'
                path='/services'
                />
                <CardItem 
                src="images/pic4.jpg"
                text="Read about our Miluim busineses"
                label='Israeli businesses'
                path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                src="images/business.jpg"
                text="Have a busines? sign up now"
                label='Join us!'
                path='/services'
                />
                <CardItem 
                src="images/pic1.jpg"
                text="Our vision"
                label='About us'
                path='/services'
                />
                <CardItem 
                src="images/app.jpg"
                text="Download Close2Home App to your phone"
                label=''
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
