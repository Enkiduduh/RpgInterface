import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import CardBack from "../../../images/cardBack.png";
// import "./Cards.scss";

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
  isBackFlipped,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      let elRect = card.getBoundingClientRect();

      let x = e.clientX - elRect.x;
      let y = e.clientY - elRect.y;

      let midCardWidth = elRect.width / 2;
      let midCardHeight = elRect.height / 2;

      let angleY = -(x - midCardWidth) / 4;
      let angleX = -(y - midCardHeight) / 4;

      let glowX = (x / elRect.width) * 100;
      let glowY = (y / elRect.height) * 100;

      card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      card.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      card.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(184, 196, 211), transparent)`;
    };

    const handleMouseLeave = () => {
      card.children[0].style.transform = "rotateX(0) rotateY(0)";
      card.children[1].style.transform = "rotateX(0) rotateY(0)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (mainDamage == "-") {
    mainDamage = 0;
  } else if (subDamage == "-") {
    subDamage = 0;
  }
  damageInflicted = mainDamage + subDamage;

  return (
    <>
      <div className="battleCommand-card-container" ref={cardRef}>
        {isBackFlipped ? (
          <>
            <div
              className={`battleCommand-card ${backgroundElement} ${
                isHovered ? "hovered" : ""
              }`}
              key={id}
              value={nameCard}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="cardTitle-symbol">
                <span className="symbol">
                  <img
                    src={`./images/Attributs/${attribut}.png`}
                    alt={attribut}
                  />
                </span>
                <h4>{nameCard}</h4>
                <span className="symbol">
                  <img
                    src={`./images/Elemental_Cards/${element}.png`}
                    alt={element}
                  />
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
                <div className={`damage ${backgroundElement}`}>
                  {damageInflicted}
                </div>
                <div className="effect">
                  <span>{effect1 || "-"}</span>
                  <span>{effect2 || "-"}</span>
                </div>
                <div className={`cost ${backgroundElement}`}>{cost}</div>
              </div>
            </div>
            <div className="glow"></div>
          </>
        ) : (
          <>
            <div
              className={`battleCommand-card-flipped ${backgroundElement} ${
                isHovered ? "hovered" : ""
              }`}
              key={id}
              value={nameCard}
              onClick={onClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              style={{ backgroundImage: `url(${CardBack})` }}
            ></div>
            <div className="glow"></div>
          </>
        )}
      </div>
    </>
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
