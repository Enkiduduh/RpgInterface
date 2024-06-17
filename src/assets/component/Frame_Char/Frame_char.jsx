import Objet_square from "../Objet/Square/Objet_square";
import Objet_rectangle from "../Objet/Rectangle/Objet_rectangle";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function Frame_char({ id }) {
  const chars = useSelector((state) => state.chars);

  if (!chars || chars.length === 0) {
    return (
      <div>
        <span>En cours de chargement...</span>
      </div>
    );
  }

  const char = chars.find(c => c.id === parseInt(id));
  console.log(chars);


  if (!char) {
    return (
      <div>
        <span>Personnage non trouvé...</span>
      </div>
    );
  }
  return (
    <>
      <div className="frameChar-container">
        <div className="frameChar-wrapper-left">
          <Objet_square id={parseInt(id) - 1} chars={chars} object="helmet" title_object="Casque" img={char.helmet?.img || ""}/>
          <Objet_square id={parseInt(id) - 1} chars={chars} object="armor" title_object="Armure" img={char.armor?.img || ""} />
          <Objet_square id={parseInt(id) - 1} chars={chars} object="shoulder" title_object="Epaulière" img={char.shoulder?.img || ""} />
          <Objet_square id={parseInt(id) - 1} chars={chars} object="pants" title_object="Pantalon" img={char.pants?.img || ""}/>
          <Objet_square id={parseInt(id) - 1} chars={chars} object="boots" title_object="Bottes" img={char.boots?.img || ""}/>
        </div>
        <div className="frameChar-wrapper-middle">
          <div className="frameChar-gear">
            <img src="" alt="" />
          </div>
          <div className="frameChar-char">
            <img src={char.img || ""} alt="" />
          </div>
          <div className="frameChar-weapons">
            <Objet_rectangle title_object="Arme 1" img={char.weapon1?.img || ""}/>
            <Objet_rectangle title_object="Arme 2" img={char.weapon2?.img || ""} />
          </div>
        </div>
        <div className="frameChar-wrapper-right">
          <Objet_square id={parseInt(id) - 1} chars={chars} object="belt" title_object="Ceinture" img={char.belt?.img || ""} />
          <Objet_square id={parseInt(id) - 1} chars={chars} object="gloves" title_object="Gants" img={char.gloves?.img || ""}/>
          <Objet_square id={parseInt(id) - 1} chars={chars} object="ring1" title_object="Bague 1" img={char.ring1?.img || ""}/>
          <Objet_square id={parseInt(id) - 1} chars={chars} object="ring2" title_object="Bague 2" img={char.ring2?.img || ""}/>
          <Objet_square id={parseInt(id) - 1} chars={chars} object="amulet" title_object="Amulette" img={char.amulet?.img || ""}/>
        </div>
        <div className="line-abs-top"></div>
        <div className="line-abs-bottom"></div>
      </div>
    </>
  );
}

Frame_char.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Frame_char;
