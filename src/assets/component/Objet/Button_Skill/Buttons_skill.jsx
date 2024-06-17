import { useState } from "react";
import PropTypes from "prop-types";

function Buttons_skill({ nameSkill, className1, className2, className3, className4 }) {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={className1}>
      <div className={className2}>{nameSkill}</div>
      <button type="button" onClick={handleClick} className={className3}>
        <span>+</span>
      </button>
      <span className={className4}>Niveau : {counter}</span>
    </div>
  );
}

Buttons_skill.propTypes = {
  nameSkill: PropTypes.string.isRequired,
  className1: PropTypes.string.isRequired,
  className2: PropTypes.string.isRequired,
  className3: PropTypes.string.isRequired,
  className4: PropTypes.string.isRequired,
};

export default Buttons_skill;
