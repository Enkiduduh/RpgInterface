import PropTypes from "prop-types";
import { useState } from "react";

function Objet_square({ title_object, object, img, chars, id }) {
  const [hidden, setHidden] = useState(true);

  Objet_square.propTypes = {
    object: PropTypes.string.isRequired,
    char: PropTypes.object.isRequired,
  };

  const infos = chars[id][object].infos;

  return (
    <>
      <div
        className="frameSquare"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <div className="frameSquare-title">
          <span>{title_object}</span>
        </div>
        <div className="frameSquare-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="frameSquareModal">
        {hidden ? null : (
          <ul>
            <li>
              <div className="infos">{infos.name}</div>
              <div className="infos">
                {infos.health ? `Santé : +${infos.health}` : `${""}`}
              </div>
              <div className="infos">
                {infos.mana ? `Mana : +${infos.mana}` : `${""}`}
              </div>
              <div className="infos">
                {infos.force ? `Force : +${infos.force}` : `${""}`}
              </div>
              <div className="infos">
                {infos.dexterity ? `Dexterité : +${infos.dexterity}` : `${""}`}
              </div>
              <div className="infos">
                {infos.agility ? `Agilité : +${infos.agility}` : `${""}`}
              </div>
              <div className="infos">
                {infos.intelligence
                  ? `Iintelligence : +${infos.intelligence}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.spirit ? `Esprit : +${infos.spirit}` : `${""}`}
              </div>
              <div className="infos">
                {infos.resilience
                  ? `Resilience : +${infos.resilience}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.damage ? `Damage : +${infos.damage}` : `${""}`}
              </div>
              <div className="infos">
                {infos.precision ? `Precision : +${infos.precision}` : `${""}`}
              </div>
              <div className="infos">
                {infos.critical_rate
                  ? `Chance Critique : +${infos.critical_rate}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.critical_damage
                  ? `Dégât Critique : +${infos.critical_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.defense ? `Défense : +${infos?.defense}` : `${""}`}
              </div>
              <div className="infos">
                {infos.block_rate ? `Parade : +${infos.block_rate}` : `${""}`}
              </div>
              <div className="infos">
                {infos.flee ? `Esquive : +${infos.flee}` : `${""}`}
              </div>
              <div className="infos">
                {infos.physical_damage
                  ? `Dégât Physique : +${infos.physical_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.magical_damage
                  ? `Dégât Magique : +${infos.magical_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.cold_damage
                  ? `Dégât Froid : +${infos.cold_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.nature_damage
                  ? `Dégât Nature : +${infos.nature_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.electric_damage
                  ? `Dégât Foudre : +${infos.electric_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.divine_damage
                  ? `Dégât Divin : +${infos.divine_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.darkness_damage
                  ? `Dégât Malice : +${infos.darkness_damage}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.physical_resistance
                  ? `Résistance Physique : +${infos.physical_resistance}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.magical_resistance
                  ? `Résistance Magique : +${infos.magical_resistance}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.cold_resistance
                  ? `Résistance Froid : +${infos.cold_resistance}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.nature_resistance
                  ? `Résistance Nature : +${infos.nature_resistance}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.electric_resistance
                  ? `Résistance Foudre : +${infos.electric_resistance}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.divine_resistance
                  ? `Résistance Divin : +${infos.divine_resistance}`
                  : `${""}`}
              </div>
              <div className="infos">
                {infos.darkness_resistance
                  ? `Résistance Malice : +${infos.darkness_resistance}`
                  : `${""}`}
              </div>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

Objet_square.propTypes = {
  title_object: PropTypes.string.isRequired,
  object: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  chars: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
};

export default Objet_square;
