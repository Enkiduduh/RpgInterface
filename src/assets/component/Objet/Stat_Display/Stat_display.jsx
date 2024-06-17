import PropTypes from "prop-types"

function Stat_display({name ,nameDirection,  value}) {
  return (
    <div className="stats">
      <span>{name} :</span>
      <span className={nameDirection}>
        {value || 0}
      </span>
    </div>
  );
}

Stat_display.propTypes = {
  name: PropTypes.string.isRequired,
  nameDirection: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Stat_display;




