import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function New_Char_Stats({ id }) {
  const chars = useSelector((state) => state.chars);

  if (!chars || chars.length === 0) {
    return (
      <div>
        <span>En cours de chargement...</span>
      </div>
    );
  }

  const char = chars[id - 1];
  console.log(char);

  if (!char) {
    return (
      <div>
        <span>Personnage non trouvé...</span>
      </div>
    );
  }

  return (
    <div className="frameStats-container">
      <div className="frameStats-main-infos-wrapper">
        <div className="frameStats-main-infos">
          <div className="frameStats-main-infos-left">
            <span>{char.name}</span>
            <span>Niveau {char.level}</span>
          </div>
          <div className="frameStats-main-infos-middle">
            <img src={char.class_img || ""} alt="" />
          </div>
          <div className="frameStats-main-infos-right">
            <span>{char.class}</span>
            <span>Tiers {char.tiers}</span>
          </div>
        </div>
      </div>
      <div className="frameStats-stats-infos-wrapper">
        <div className="frameStats-stats-infos-left">
          <div className="stats">
            <span>Santé :</span>
            <span className="stats-value-left">{char.health || 0}</span>
          </div>
          <div className="stats">
            <span>Force :</span>
            <span className="stats-value-left">{char.force || 0}</span>
          </div>
          <div className="stats">
            <span>Dexterité :</span>
            <span className="stats-value-left">{char.dexterity || 0}</span>
          </div>
          <div className="stats">
            <span>Agilité :</span>
            <span className="stats-value-left">{char.agility || 0}</span>
          </div>
        </div>
        <div className="frameStats-stats-infos-right">
          <div className="stats">
            <span>Mana :</span>
            <span className="stats-value">{char.mana || 0}</span>
          </div>
          <div className="stats">
            <span>Intelligence :</span>
            <span className="stats-value">{char.intelligence || 0}</span>
          </div>
          <div className="stats">
            <span>Esprit :</span>
            <span className="stats-value">{char.spirit || 0}</span>
          </div>
          <div className="stats">
            <span>Résilience :</span>
            <span className="stats-value">{char.resilience || 0}</span>
          </div>
        </div>
      </div>
      <div className="frameStats-sub-infos-wrapper">
        <div className="frameStats-sub-infos-left">
          <div className="stats">
            <span>Dégât :</span>
            <span className="stats-value-left">{char.damage || 0}</span>
          </div>
          <div className="stats">
            <span>Précision :</span>
            <span className="stats-value-left">{char.precision || 0}</span>
          </div>
          <div className="stats">
            <span>Chance critique :</span>
            <span className="stats-value-left">{char.critical_rate || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât Critique :</span>
            <span className="stats-value-left">{char.critical_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât physique :</span>
            <span className="stats-value-left">{char.physical_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât magique :</span>
            <span className="stats-value-left">{char.magical_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât feu :</span>
            <span className="stats-value-left">{char.fire_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât froid :</span>
            <span className="stats-value-left">{char.cold_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât nature :</span>
            <span className="stats-value-left">{char.nature_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât foudre :</span>
            <span className="stats-value-left">{char.electric_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât divin :</span>
            <span className="stats-value-left">{char.divine_damage || 0}</span>
          </div>
          <div className="stats">
            <span>Dégât malice :</span>
            <span className="stats-value-left">{char.darkness_damage || 0}</span>
          </div>
        </div>
        <div className="frameStats-sub-infos-right">
          <div className="stats">
            <span>Défense :</span>
            <span className="stats-value">{char.defense || 0}</span>
          </div>
          <div className="stats">
            <span>Esquive :</span>
            <span className="stats-value">{char.flee || 0}</span>
          </div>
          <div className="stats">
            <span>Parade :</span>
            <span className="stats-value">{char.block_rate || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance :</span>
            <span className="stats-value">{char.resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance physique :</span>
            <span className="stats-value">{char.physical_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance magique :</span>
            <span className="stats-value">{char.magical_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance feu :</span>
            <span className="stats-value">{char.fire_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance froid :</span>
            <span className="stats-value">{char.cold_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance nature :</span>
            <span className="stats-value">{char.nature_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance foudre :</span>
            <span className="stats-value">{char.electric_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance divin :</span>
            <span className="stats-value">{char.divine_resistance || 0}</span>
          </div>
          <div className="stats">
            <span>Résistance malice :</span>
            <span className="stats-value">{char.darkness_resistance || 0}</span>
          </div>
        </div>
      </div>
      <div className="frameStats-last-infos">
        <div className="frameStats-last-infos-left">
          <div className="stats">
            <span>Duel :</span>
            <span className="stats-value-left">{char.duel || 0}</span>
          </div>
          <div className="stats">
            <span>Gagné :</span>
            <span className="stats-value-left">{char.won || 0}</span>
          </div>
          <div className="stats">
            <span>Perdu :</span>
            <span className="stats-value-left">{char.lost || 0}</span>
          </div>
        </div>
        <div className="frameStats-last-infos-right">
          <div className="stats">
            <span>Monstres tués :</span>
            <span className="stats-value">{char.monsters_killed || 0}</span>
          </div>
          <div className="stats">
            <span>Nombre de mort :</span>
            <span className="stats-value">{char.total_death || 0}</span>
          </div>
          <div className="stats">
            <span>Difficulté :</span>
            <span className="stats-value">{char.difficulty || 0}</span>
          </div>
        </div>
      </div>
      <div className="line-abs-top"></div>
      <div className="line-abs-bottom"></div>
    </div>
  );
}

New_Char_Stats.propTypes = {
  id: PropTypes.number.isRequired,
};

export default New_Char_Stats;
