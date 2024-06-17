import PropTypes from 'prop-types';

function Objet_rectangle({ title_object , img}) {
  return (
    <div className="frameRectangle">
      <div className="frameRectangle-title">
        <span>{title_object}</span>
      </div>
      <div className="frameRectangle-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

Objet_rectangle.propTypes = {
  title_object: PropTypes.string.isRequired,
  img:PropTypes.string.isRequired
};

export default Objet_rectangle;
