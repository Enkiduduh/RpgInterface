import Cards from "../Objet/Cards/Cards";
import { useState, useEffect } from "react";
import targetImg from "../../images/target.png";
import playerSprites from "../../images/playerSprites.png";

function Combat_page() {
  const MAX_LIFE = 100; // Vie maximale des adversaires

  const [foeLife1, setFoeLife1] = useState(100);
  const [foeLife2, setFoeLife2] = useState(100);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null); // Nouvel état pour le hover
  const [target, setTarget] = useState(null);
  const [texteCombat, setTexteCombat] = useState();
  const [hidden, setHidden] = useState(true);
  const [cards, setCards] = useState([
    {
      id: 1,
      nameCard: "Lance de glace",
      backgroundElement: "cold",
      element: "cold",
      attribut: "physical",
      mainDamageType: "Dégât de Froid",
      mainDamage: 3,
      subDamageType: "Dégât Physique",
      subDamage: 1,
      effect1: "Gel",
      effect2: null,
      cost: 2,
    },
    {
      id: 2,
      nameCard: "Brise-Âme",
      backgroundElement: "darkness",
      element: "darkness",
      attribut: "magical",
      mainDamageType: "Dégât de Malice",
      mainDamage: 3,
      subDamageType: "Dégât Magique",
      subDamage: 3,
      effect1: "Peur",
      effect2: null,
      cost: 2,
    },
    {
      id: 3,
      nameCard: "Entaille",
      backgroundElement: "physical",
      element: "physical",
      attribut: "physical",
      mainDamageType: "Dégât Physique",
      mainDamage: 3,
      subDamageType: "-",
      subDamage: "-",
      effect1: null,
      effect2: null,
      cost: 2,
    },
    {
      id: 4,
      nameCard: "Transper'Ciel",
      backgroundElement: "electric",
      element: "electric",
      attribut: "magical",
      mainDamageType: "Dégât de Foudre",
      mainDamage: 5,
      subDamageType: "Dégât de Feu",
      subDamage: 2,
      effect1: "Paralyse",
      effect2: "Enflamme",
      cost: 2,
    },
  ]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setHidden(false);
  };

  const handleAttack = () => {
    if (selectedCard && target) {
      let mainDamage =
        selectedCard.mainDamage === "-" ? 0 : selectedCard.mainDamage;
      let subDamage =
        selectedCard.subDamage === "-" ? 0 : selectedCard.subDamage;
      const damageInflicted = mainDamage + subDamage;

      if (target === "foe1") {
        setFoeLife1((prevFoeLife) => prevFoeLife - damageInflicted);
        setTexteCombat(
          `Vous avez utilisé ${selectedCard.nameCard} sur ${target}. Dégât infligé : ${damageInflicted}`
        );
      } else if (target === "foe2") {
        setFoeLife2((prevFoeLife) => prevFoeLife - damageInflicted);
        setTexteCombat(
          `Vous avez utilisé ${selectedCard.nameCard} sur ${target}. Dégât infligé : ${damageInflicted}`
        );
      }
      // Reset the selected card and target after the attack
      setSelectedCard(null);
      setTarget(null);
      setHidden(true);
    }
  };
  const handleFoeClick = (foe) => {
    setTarget(foe);
  };

  // Calculer le pourcentage de vie restante pour les barres de vie
  const foeLife1Percent = (foeLife1 / MAX_LIFE) * 100;
  const foeLife2Percent = (foeLife2 / MAX_LIFE) * 100;

  return (
    <div className="combatPage-container">
      <div className="combatPage-CombatText-container">
        <div className="CombatText-container">{texteCombat}</div>
      </div>
      <div className="combatPage-battleScreen-container">
        <div className="battleScreen-player-wrapper">
          <div>
            {/* <div className="battleScreen-player-infos"></div> */}
            <div className="battleScreen-player-img-container">
              <div className="player-img-wrapper">
                <div className="playerLife-container">
                  <div className="playerLife"></div>
                </div>
                <div className="playerImg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="battleScreen-opponent-wrapper">
          <div>
            {/* <div className="battleScreen-opponent-infos"></div> */}
            <div className="battleScreen-opponent-img-container">
              <div
                className="opponent-img-wrapper"
                onClick={() => handleFoeClick("foe1")}
                style={{ cursor: selectedCard ? "pointer" : "default" }}
              >
                <div className="opponentLife-container">
                  <div
                    className="opponentLife"
                    style={{ width: `${foeLife1Percent}%` }}
                  >
                    {foeLife1}
                  </div>
                </div>
                <div className="opponentImg"></div>
                {hidden ? (
                  <div className="targetFoe"></div>
                ) : (
                  <div onClick={handleAttack} className="targetFoe">
                    <img src={targetImg} alt="target" />
                  </div>
                )}
              </div>
              <div
                className="opponent-img-wrapper"
                onClick={() => handleFoeClick("foe2")}
                style={{ cursor: selectedCard ? "pointer" : "default" }}
              >
                <div className="opponentLife-container">
                  <div
                    className="opponentLife"
                    style={{ width: `${foeLife2Percent}%` }}
                  >
                    {foeLife2}
                  </div>
                </div>
                <div className="opponentImg"></div>
                {hidden ? (
                  <div className="targetFoe"></div>
                ) : (
                  <div onClick={handleAttack} className="targetFoe">
                    <img src={targetImg} alt="target" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="combatPage-battleCommand-container">
        <div className="battleCommand-wrapper-left"></div>
        <div className="battleCommand-wrapper-center">
          {cards.map((card) => (
            <Cards
              key={card.id}
              {...card}
              isHovered={hoveredCardId === card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            />
          ))}
        </div>
        <div className="battleCommand-wrapper-right"></div>
      </div>
    </div>
  );
}

export default Combat_page;
