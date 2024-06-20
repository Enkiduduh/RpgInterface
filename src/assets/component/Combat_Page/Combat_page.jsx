import Cards from "../Objet/Cards/Cards";
import { useState, useEffect } from "react";
import targetImg from "../../images/target.png";
// import playerSprites from "../../images/playerSprites.png";
import { cardsDeck, shuffleArray } from "../../data/cards";
import Button_shuffle from "../Objet/Button_Shuffle/Button_shuffle";

function Combat_page() {
  const MAX_LIFE = 100; // Vie maximale des adversaires

  const [foeLife1, setFoeLife1] = useState(100);
  const [foeLife2, setFoeLife2] = useState(100);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null); // Nouvel état pour le hover
  const [target, setTarget] = useState(null);
  const [texteCombat, setTexteCombat] = useState();
  const [hidden, setHidden] = useState(true);
  const [isActive, setIsActive] = useState(true);

  // État pour stocker les cartes affichées
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    // Mélanger le tableau de cartes et sélectionner les 4 premières
    const shuffledCards = shuffleArray(cardsDeck);
    setDisplayedCards(shuffledCards.slice(0, 4));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setTarget(null);
    setHidden(false);
  };

  const handleActionButtonClick = () => {
    setIsActive(false);
    const shuffledCards = shuffleArray(cardsDeck);
    setDisplayedCards(shuffledCards.slice(0, 4));
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
      setIsActive(false);
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
        <div className="battleCommand-wrapper-left">
          <div className="battleCommand first"> Charge: 4/4 </div>
          <Button_shuffle
            action="Shuffle"
            nameClass="second"
            onClick={handleActionButtonClick}
          />
          <div className="battleCommand third">Voir deck</div>
        </div>
        <div className="battleCommand-wrapper-center"> 
          {displayedCards.map((card, index) => (
            <Cards
              key={`${card.id}-${index}`}
              {...card}
              isHovered={hoveredCardId === card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Combat_page;
