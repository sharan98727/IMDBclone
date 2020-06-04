import React from "react";
import card1 from './cardimages/card1.jpg';
import card2 from './cardimages/card2.jpg';
import card3 from './cardimages/card3.jpg';
import card4 from './cardimages/card4.jpeg';
import card5 from './cardimages/card5.jpg';
import card6 from './cardimages/card6.jpg';
import './favorites.css';

const Top = (Props) =>
{
    return (
    <div className="cards">
    <img src={Props.img} alt="" width={200} height={300} mode="fit" />
    <div>{Props.name}</div>
    <button onClick= "validation">WatchList</button>
    </div>
    );
}


const Card = () =>
{
    return(

        <div className="favorites">
          <Top img={card1} name="Paatal Lok" />
          <Top img={card2} name="Joker"/>
          <Top img={card3} name="Gisaengching"/>
          <Top img={card4} name="The Last Dance"/>
          <Top img={card5} name="1917"/>
          <Top img={card6} name="Knives Out"/>

          </div>

    );
}




export default Card;