import PropTypes from "prop-types";

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
}) {
  return (
    <div className={`battleCommand-card ${backgroundElement}`}>
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
        <span>{subDamageType}</span>
        <span>{subDamage}</span>
      </div>
      <div className="lineCard"></div>
      <div className="damage-effect">
        <span>{effect1}</span>
        <span>{effect2}</span>
      </div>
    </div>
  );
}

Cards.propTypes = {
  nameCard: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  backgroundElement: PropTypes.string.isRequired,
  attribut: PropTypes.string.isRequired,
  mainDamageType: PropTypes.string.isRequired,
  mainDamage: PropTypes.number.isRequired,
  subDamageType: PropTypes.string.isRequired,
  subDamage: PropTypes.number.isRequired,
  effect1: PropTypes.string.isRequired,
  effect2: PropTypes.string.isRequired,
};

export default Cards;
