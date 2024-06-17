import { Link } from "react-router-dom";

function Chars_list() {
  return (
    <>
    <button><a href="/" target="_self">Retour</a></button>
    <div className="wrapper-button-user-choice">
      <Link to="/char/1">
        <button className="button-user-choice">Char 1</button>
      </Link>
      <Link to="/char/2">
        <button className="button-user-choice">Char 2</button>
      </Link>
    </div>
    </>
  );
}

export default Chars_list;
