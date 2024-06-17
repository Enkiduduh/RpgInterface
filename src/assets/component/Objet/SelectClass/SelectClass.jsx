import PropTypes from "prop-types";

function SelectClass({ handleChange, value }) {
  return (
    <div className="selectClass">
      <label htmlFor="class">Choisissez une classe : </label>
      <select id="char-class" name="classJob" onChange={handleChange} value={value}>
        <option value="">-</option>
        <option value="soldier">Soldat</option>
        <option value="scout">Eclaireur</option>
        <option value="mage">Mage</option>
      </select>
    </div>
  );
}

SelectClass.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
};

export default SelectClass;
