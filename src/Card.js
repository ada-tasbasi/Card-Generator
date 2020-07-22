import React from "react";
import "./Card.css";

const Card = ({ cardData, gradient }) => {
  return (
    <div className="cardContainer" style={gradient}>
      <div className="topRow">
        <div id="manaCostTray">
          {cardData.mana.map((mana) => {
            return (
              <div id="manaCost" key={mana.color}>
                {mana.cost}
                <div className="manaSymbol" style={{ backgroundColor: mana.color }}></div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="cardTopInfo">
        <div className="cardName" style={{ fontSize: cardData.name.length > 22 ? "20px" : "30px" }}>
          {cardData.name}
        </div>
        <div className="cardRarity" style={{ backgroundColor: cardData.rarity }}></div>
      </div>
      <div className="midRow">
        <img id="cardImg" src={cardData.img} alt="Card Art" width="300px" height="200px"></img>
      </div>
      <div id="bottomRow">
        <div id="cardText">{cardData.text}</div>
        <img id="type" src={cardData.componential ? "breakable.svg" : "unique.svg"} alt="type" width="35px" height="35px"></img>
      </div>
    </div>
  );
};

export default Card;
