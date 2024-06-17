import PropTypes from "prop-types";

function SelectRace({ handleChange, value }) {
  return (
    <div className="selectRace">
      <label htmlFor="race">Choisissez une race : </label>
      <select id="char-race" name="raceChoice" onChange={handleChange} value={value}>
        <option value="">-</option>
        <option value="human">Humain</option>
        <option value="orc">Orc</option>
        <option value="undead" >Mort-Vivant</option>
        <option value="demon">Démon</option>
      </select>
    </div>
  );
}

SelectRace.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
};

export default SelectRace;
