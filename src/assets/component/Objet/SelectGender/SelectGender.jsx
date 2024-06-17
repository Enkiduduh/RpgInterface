import PropTypes from "prop-types"

function SelectGender({ handleChange, value }) {
  return (
    <div className="selectGender">
      <label htmlFor="gender">Choisissez un genre : </label>
      <select id="char-gender" name="genderChoice" onChange={handleChange} value={value}>
        <option value="">-</option>
        <option value="male">Homme</option>
        <option value="female">Femme</option>
        <option value="nogender">Non genré</option>
      </select>
    </div>
  );
}

SelectGender.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectGender;
