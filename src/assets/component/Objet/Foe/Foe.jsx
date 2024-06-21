import React from "react";

function Foe({
  handleFoeClick,
  selectedCard,
  lifePercent,
  foeLife1,
  foeImg,
  hidden,
  handleAttack,
  targetImg,
  foe,
  isTakingDamage1,
  isTakingDamage2,
}) {
  return (
    <div
      className="opponent-img-wrapper"
      onClick={() => handleFoeClick(`${foe}`)}
      style={{ cursor: selectedCard ? "pointer" : "default" }}
    >
      <div className="opponentLife-container">
        <div
          className="opponentLife"
          style={{ width: `${lifePercent}%` }}
        ></div>
        <div className="opponentLife-value">{foeLife1} / 100</div>
      </div>
      <div className="opponentImg">
        {!(isTakingDamage1 || isTakingDamage2) ? (

          <img src={foeImg} alt=""  className="imgNormal"/>
        ) : (
          <>
          <img src={foeImg} alt="" className="glowHit" />
          <div className="glow"></div>
          </>
        )}

        <div
          className={` ${
            isTakingDamage1 || isTakingDamage2 ? "foeEffectsDamage" : ""
          }`}
        ></div>
        <div
          className={` ${
            isTakingDamage1 || isTakingDamage2 ? "foeEffectsThrust" : ""
          }`}
        ></div>
      </div>
      {hidden ? (
        <div className="targetFoe"></div>
      ) : (
        <div onClick={handleAttack} className="targetFoe">
          <img src={targetImg} alt="target" />
        </div>
      )}
    </div>
  );
}

export default Foe;
