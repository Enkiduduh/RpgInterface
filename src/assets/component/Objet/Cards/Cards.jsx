import PropTypes from "prop-types";
// import { useState } from "react";

function Cards({
  nameCard,
  backgroundElement,
  element,
  attribut,
  mainDamageType,
  mainDamage,
  subDamageType,
  subDamage,
  effect1,
  effect2,
  damageInflicted,
  cost,
  id,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) {

  if (mainDamage == "-") {
    mainDamage = 0;
  } else if (subDamage == "-") {
    subDamage = 0;
  }
  damageInflicted = mainDamage + subDamage;

  // const handleClick = () => {
  //   const target = prompt("Choose target: foe1 or foe2"); // Vous pouvez utiliser une méthode plus élégante pour sélectionner la cible
  //   onClick(target);
  // };

  return (
    <div
      className={`battleCommand-card ${backgroundElement} ${isHovered ? "hovered" : ""}`}
      key={id}
      value={nameCard}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="cardTitle-symbol">
        <span className="symbol">
          <img src={`./images/Attributs/${attribut}.png`} alt={attribut} />
        </span>
        <h4>{nameCard}</h4>
        <span className="symbol">
          <img src={`./images/Elemental_Cards/${element}.png`} alt={element} />
        </span>
      </div>
      <div className="lineCard"></div>
      <div className="damage-mainDamage">
        <span>{mainDamageType}</span>
        <span>{mainDamage}</span>
      </div>
      <div className="lineCard"></div>
      <div className="damage-subDamage">
        <span>{subDamageType || "-"}</span>
        <span>{subDamage || "-"}</span>
      </div>
      <div className="lineCard"></div>
      <div className="cardResume">
        <div className={`damage ${backgroundElement}`}>{damageInflicted}</div>
        <div className="effect">
          <span>{effect1 || "-"}</span>
          <span>{effect2 || "-"}</span>
        </div>
        <div className={`cost ${backgroundElement}`}>{cost}</div>
      </div>
    </div>
  );
}

// Cards.propTypes = {
  // nameCard: PropTypes.string.isRequired,
  // element: PropTypes.string.isRequired,
  // backgroundElement: PropTypes.string.isRequired,
  // attribut: PropTypes.string.isRequired,
  // mainDamageType: PropTypes.string.isRequired,
  // mainDamage: PropTypes.number.isRequired,
  // subDamageType: PropTypes.string.isRequired,
  // subDamage: PropTypes.number.isRequired,
  // effect1: PropTypes.string.isRequired,
  // effect2: PropTypes.string.isRequired,
//   damageInflicted: PropTypes.number.isRequired,
//   cost: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
//   onMouseEnter: PropTypes.func.isRequired,
//   onMouseLeave: PropTypes.func.isRequired,
//   isHovered: PropTypes.func.isRequired,
// };

export default Cards;
