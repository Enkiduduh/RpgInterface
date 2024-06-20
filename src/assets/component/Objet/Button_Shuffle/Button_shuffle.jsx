import React from "react";
import gemActive from "../../../images/gemActive.png";
import gemInactive from "../../../images/gemInactive.png";

function Button_shuffle({ action, onClick, nameClass, isActive }) {
  return (
    <div className={`battleCommand ${nameClass}`} onClick={onClick}>
      <div className="battleCommand-action">
        <span>{action}</span>
      </div>

      <div className="battleCommand-counter">
        {isActive ? (
          <img src={gemInactive} alt="active" />
        ) : (
          <img src={gemActive} alt="active" />
        )}
      </div>
    </div>
  );
}

export default Button_shuffle;
