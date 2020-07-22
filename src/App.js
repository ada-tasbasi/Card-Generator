import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

const rarityColors = {
  common: "lightgray",
  rare: "blue",
  epic: "purple",
  legendary: "orange",
};

const App = () => {
  const percentageOfSum = (arr, num) => {
    const arrSum = arr.reduce((a, b) => Number(a) + Number(b));
    return Math.floor(num * ((100 - (arr.length - 1) * 10) / arrSum));
  };

  const generateGrad = (arr) => {
    arr.sort((a, b) => b.cost - a.cost);
    let manaStyle;
    let lastGrad = 0;
    let backgroundStyle = "";
    const costSum = [...arr.map((mana) => mana.cost)];
    if (arr.length > 1) {
      for (let i = 0; i < arr.length; i++) {
        const colorAmount = percentageOfSum(costSum, arr[i].cost);
        backgroundStyle += `${arr[i].color} ${lastGrad}% ${lastGrad + colorAmount}% `;
        lastGrad += colorAmount + 10;
        if (!(i === arr.length - 1)) {
          backgroundStyle += ", ";
        }
      }
      manaStyle = { background: `linear-gradient(90deg, ${backgroundStyle})` };
    } else {
      manaStyle = arr.length === 0 ? { background: "azure" } : { background: arr[0].color };
    }
    return manaStyle;
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (name.includes("Mana")) {
      if (value > 10) {
        value = 10;
      } else if (value < 0) {
        value = 0;
      }
    }
    switch (name) {
      case "cardName":
        setCardName(value);
        break;
      case "redMana":
        setRedMana(value);
        break;
      case "blueMana":
        setBlueMana(value);
        break;
      case "yellowMana":
        setYellowMana(value);
        break;
      case "greenMana":
        setGreenMana(value);
        break;
      case "whiteMana":
        setWhiteMana(value);
        break;
      case "blackMana":
        setBlackMana(value);
        break;
      case "imageUrl":
        setImgSrc(value);
        break;
      case "cardRarity":
        setRarity(value);
        break;
      case "compCheck":
        setComp(value);
        break;
      case "cardText":
        setCardText(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allManaValues = [
      { color: "red", cost: redMana },
      { color: "blue", cost: blueMana },
      { color: "yellow", cost: yellowMana },
      { color: "green", cost: greenMana },
      { color: "white", cost: whiteMana },
      { color: "black", cost: blackMana },
    ];
    const manaValues = allManaValues.filter((mana) => mana.cost > 0);
    const cardData = {
      mana: manaValues,
      name: cardName,
      img: imgSrc,
      rarity: rarityColors[rarity],
      componential: comp,
      text: cardText,
    };
    setCardData(cardData);
    setShowCard(true);
  };

  const [showCard, setShowCard] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardData, setCardData] = useState([]);
  const [cardText, setCardText] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [rarity, setRarity] = useState("");
  const [comp, setComp] = useState(false);
  const [redMana, setRedMana] = useState(0);
  const [blueMana, setBlueMana] = useState(0);
  const [yellowMana, setYellowMana] = useState(0);
  const [greenMana, setGreenMana] = useState(0);
  const [whiteMana, setWhiteMana] = useState(0);
  const [blackMana, setBlackMana] = useState(0);

  return (
    <div>
      {!showCard && (
        <form id="cardGenContainer" onSubmit={handleSubmit}>
          <span className="names">
            <label className="name">
              Card Name:
              <input type="text" name="cardName" onChange={handleChange} value={cardName} required />
            </label>
          </span>
          <div id="mana">
            Mana Values:
            <label className="manaLabel">
              <div id="red"></div>Red:
              <input type="number" name="redMana" value={redMana} onChange={handleChange} min="0" max="10" />
            </label>
            <label className="manaLabel">
              <div id="blue"></div> Blue:
              <input type="number" name="blueMana" value={blueMana} onChange={handleChange} min="0" max="10" />
            </label>
            <label className="manaLabel">
              <div id="yellow"></div> Yellow:
              <input type="number" name="yellowMana" value={yellowMana} onChange={handleChange} min="0" max="10" />
            </label>
            <label className="manaLabel">
              <div id="green"></div> Green
              <input type="number" name="greenMana" value={greenMana} onChange={handleChange} min="0" max="10" />
            </label>
            <label className="manaLabel">
              <div id="white"></div> White:
              <input type="number" name="whiteMana" value={whiteMana} onChange={handleChange} min="0" max="10" />
            </label>
            <label className="manaLabel">
              <div id="black"></div> Black:
              <input type="number" name="blackMana" value={blackMana} onChange={handleChange} min="0" max="10" />
            </label>
          </div>
          <label id="image">
            Image Url:
            <input type="text" name="imageUrl" onChange={handleChange} value={imgSrc} required />
          </label>
          <label>
            Card Rarity
            <select value={rarity} name="cardRarity" onChange={handleChange}>
              <option value="n/a" defaultValue>
                Select a Rarity
              </option>
              <option value="common">Common</option>
              <option value="rare">Rare</option>
              <option value="epic">Epic</option>
              <option value="legendary">Legendary</option>
            </select>
          </label>
          <div id="checkComp">
            <label>Componential</label>
            <input type="checkbox" name="compCheck" checked={comp} onChange={handleChange} />
          </div>
          <label id="cardText">
            Card Text:
            <textarea maxLength="165" id="textBox" type="text" name="cardText" onChange={handleChange} value={cardText} />
          </label>
          <button>Generate Card</button>
        </form>
      )}
      {showCard && (
        <div>
          <Card cardData={cardData} gradient={generateGrad(cardData.mana)} />
          <form>
            <button id="backButton">Back</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
