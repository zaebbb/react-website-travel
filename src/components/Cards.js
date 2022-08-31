import React from 'react';
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
    return (
        <div 
        className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div 
            className="cards-container">
                <div 
                class="cards-wrapper">
                    <ul 
                    class="cards-items">
                        <CardItem 
                        src="./../images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Travel"
                        path="/services"
                        />
                        <CardItem 
                        src="./../images/img-2.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                    <ul 
                    class="cards-items">
                        <CardItem 
                        src="./../images/img-6.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Travel"
                        path="/services"
                        />
                        <CardItem 
                        src="./../images/img-7.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="./../images/img-8.jpg"
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
