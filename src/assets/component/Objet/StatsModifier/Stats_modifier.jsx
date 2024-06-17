import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Stats_modifier({
  stat,
  points,
  addPoint,
  subPoint,
  baseStat,
  reset,
  onResultChange,
  name,
}) {
  const [visualElements, setVisualElements] = useState([]);
  const [statPoints, setStatPoints] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddPoint = () => {
    if (statPoints < 10) {
      if (points > 0) {
        setStatPoints(statPoints + 1);
        addPoint();
        setVisualElements([
          ...visualElements,
          <div className="visual" key={visualElements.length}></div>,
        ]);
      }
    }
  };

  const handleSubPoint = () => {
    if (statPoints > 0) {
      setStatPoints(statPoints - 1);
      subPoint();
      if (visualElements.length > 0) {
        setVisualElements(visualElements.slice(0, visualElements.length - 1));
      }
    }
  };

  useEffect(() => {
    if (reset) {
      setStatPoints(0);
      setVisualElements([]);
    }
  }, [reset]);

  useEffect(() => {
    let res = 0;
    if (
      stat === "health" ||
      stat === "mana" ||
      stat === "fire_resistance" ||
      stat === "cold_resistance" ||
      stat === "electric_resistance" ||
      stat === "nature_resistance"
    ) {
       res = parseInt(baseStat) + 10 * parseInt(statPoints);
    } else {
       res = parseInt(baseStat) + parseInt(statPoints);
    }
    setResult(res);
    onResultChange(stat, res); // Appel de la fonction de rappel avec le résultat mis à jour
  }, [baseStat, statPoints]);

  return (
    <div className="Stat-bonus-container">
      <div className="Stat-point">
        <div className="Stat-pointPlusBase">
          <span>{name}</span>
          <span >{result}</span>
        </div>
        <div className="Stat-pointsButton-wrapper">
          <button type="button" id="sub-point" onClick={handleSubPoint}>
            <span className="Stat-pointsButton">-</span>
          </button>
          <button type="button" id="add-point" onClick={handleAddPoint}>
            <span className="Stat-pointsButton">+</span>
          </button>
        </div>
      </div>
      <div className="Stat-point-visual">{visualElements}</div>
    </div>
  );
}

Stats_modifier.propTypes = {
  stat: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  addPoint: PropTypes.func.isRequired,
  subPoint: PropTypes.func.isRequired,
  baseStat: PropTypes.number.isRequired,
  reset: PropTypes.bool.isRequired,
  onResultChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Stats_modifier;
