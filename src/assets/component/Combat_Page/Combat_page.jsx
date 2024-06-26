import Cards from "../Objet/Cards/Cards";
import { useState, useEffect } from "react";
import targetImg from "../../images/target.png";
import foeImg1 from "../../images/Library_Book_Master.png";
import foeImg2 from "../../images/Library_Book_Swarm.png";
import Player from "../../images/player.png";
import Background from "../../images/testbg3.png";
import BackgroundCards from "../../images/parchment_bg.png";
// import playerSprites from "../../images/playerSprites.png";
import { cardsDeck, shuffleArray } from "../../data/cards";
import Button_shuffle from "../Objet/Button_Shuffle/Button_shuffle";
import Foe from "../Objet/Foe/Foe";

function Combat_page() {
  const MAX_LIFE = 100; // Vie maximale des adversaires

  const [foeLife1, setFoeLife1] = useState(100);
  const [foeLife2, setFoeLife2] = useState(100);
  const [playerLife, setPlayerLife] = useState(100);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null); // Nouvel état pour le hover
  const [target, setTarget] = useState(null);
  const [texteCombat, setTexteCombat] = useState();
  const [hidden, setHidden] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isAttacking1, setIsAttacking1] = useState(false);
  const [isAttacking2, setIsAttacking2] = useState(false);
  const [isTakingDamage1, setIsTakingDamage1] = useState(false);
  const [isTakingDamage2, setIsTakingDamage2] = useState(false);
  // État pour stocker les cartes affichées
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    // Mélanger le tableau de cartes et sélectionner les 4 premières
    const shuffledCards = shuffleArray(cardsDeck);
    setDisplayedCards(shuffledCards.slice(0, 5));
  }, []);

  const handleCardClick = (card) => {
    console.log("Card Click");
    setSelectedCard(card);
    setTarget(null);
    setHidden(false);
  };
  // const handleFlipAction = () => {
  //   console.log("Flip");
  //   // setIsBackFlipped((prev) => !prev);
  //   setActiveCard(!activeCard);
  //   console.log(activeCard);
  // };

  const handleActionButtonClick = () => {
    console.log("Shuffle");
    setIsActive(false);
    const shuffledCards = shuffleArray(cardsDeck);
    setDisplayedCards(shuffledCards.slice(0, 5));
    // setIsBackFlipped(false);
    setSelectedCard(null);
    setTarget(null);
    setHidden(true);
    setIsActive(false);
    // console.log(target);
    // console.log(hidden);
    // console.log(selectedCard);
  };

  const handleAttack = () => {
    if (selectedCard && target) {
      let mainDamage =
        selectedCard.mainDamage === "-" ? 0 : selectedCard.mainDamage;
      let subDamage =
        selectedCard.subDamage === "-" ? 0 : selectedCard.subDamage;
      const damageInflicted = mainDamage + subDamage;
      if (target === "foe1") {
        setIsAttacking1(true);
        setIsTakingDamage1(true);
        console.log("isTakingDamage1 ?")
        setFoeLife1((prevFoeLife) => prevFoeLife - damageInflicted);
        setTexteCombat(
          `Vous avez utilisé ${selectedCard.nameCard} sur ${target}. Dégât infligé : ${damageInflicted}`
        );
      } else if (target === "foe2") {
        setIsAttacking2(true);
        setIsTakingDamage2(true);
        console.log("isTakingDamage2 ?")
        setFoeLife2((prevFoeLife) => prevFoeLife - damageInflicted);
        setTexteCombat(
          `Vous avez utilisé ${selectedCard.nameCard} sur ${target}. Dégât infligé : ${damageInflicted}`
        );
      }

      const cardsNew = displayedCards.filter(
        (cards) => cards.id != selectedCard.id
      );
      // console.log(displayedCards);
      // console.log(selectedCard);
      // console.log(cardsNew);
      setDisplayedCards(cardsNew);
      // Reset the selected card and target after the attack
      setTimeout(() => {
        setIsAttacking1(false);
        setIsAttacking2(false);
        setIsTakingDamage1(false);
        setIsTakingDamage2(false);
        setHidden(true);
      }, 300);
    }
    setSelectedCard(null);
    setTarget(null);
    setHidden(true);
    setIsActive(false);
  };
  const handleFoeClick = (foe) => {
    setTarget(foe);
    console.log("foe");
  };

  // Calculer le pourcentage de vie restante pour les barres de vie
  const foeLife1Percent = (foeLife1 / MAX_LIFE) * 100;
  const foeLife2Percent = (foeLife2 / MAX_LIFE) * 100;

  const [activeCard, setActiveCard] = useState(false);

  // const handleFlip = () => {
  //   setActiveCard(!activeCard);
  // };

  return (
    <div className="combatPage-container">
      <div className="combatPage-CombatText-container">
        <div className="CombatText-container">{texteCombat}</div>
      </div>
      <div
        className="combatPage-battleScreen-container"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="battleScreen-player-wrapper">
          <div>
            <div className="battleScreen-player-img-container">
              <div className="player-img-wrapper">
                <div className="playerLife-container">
                  <div className="playerLife"> {playerLife} / 100</div>
                </div>
                <div className="playerImg">
                  <img
                    className={`player ${isAttacking1 ? "attacking1 " : ""} ${
                      isAttacking2 ? "attacking2 " : ""
                    }`}
                    src={Player}
                    alt=""
                  />
                  <div
                    className={`${(isAttacking1 || isAttacking2) ? "playerEffects" : ""}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="battleScreen-opponent-wrapper">
          <div className="battleScreen-opponent-img-container">
            <Foe
              handleFoeClick={handleFoeClick}
              selectedCard={selectedCard}
              lifePercent={foeLife1Percent}
              foeLife1={foeLife1}
              foeImg={foeImg1}
              hidden={hidden}
              handleAttack={handleAttack}
              targetImg={targetImg}
              foe="foe1"
              isTakingDamage1={isTakingDamage1}
            />
            <Foe
              handleFoeClick={handleFoeClick}
              selectedCard={selectedCard}
              lifePercent={foeLife2Percent}
              foeLife1={foeLife2}
              foeImg={foeImg2}
              hidden={hidden}
              handleAttack={handleAttack}
              targetImg={targetImg}
              foe="foe2"
              isTakingDamage2={isTakingDamage2}
            />
          </div>
        </div>
      </div>
      <div
        className="combatPage-battleCommand-container"
        style={{ backgroundImage: `url(${BackgroundCards})` }}
      >
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
              activeCard={activeCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Combat_page;
