function Combat_page() {
  return (
    <div className="combatPage-container">
      <div className="combatPage-CombatText-container">
        <div className="CombatText-container"></div>
      </div>
      <div className="combatPage-battleScreen-container">
        <div className="battleScreen-player-wrapper">
          <div className="battleScreen-player-infos"></div>
          <div className="battleScreen-player-img">
            <div className="player-img"></div>
          </div>
        </div>
        <div className="battleScreen-opponent-wrapper">
          <div className="battleScreen-opponent-infos"></div>
          <div className="battleScreen-opponent-img">
            <div className="opponent-img"></div>
          </div>
        </div>
      </div>
      <div className="combatPage-battleCommand-container">
        <div className="battleCommand-wrapper-left"></div>
        <div className="battleCommand-wrapper-center">
          <div className="battleCommand-card"></div>
          <div className="battleCommand-card"></div>
          <div className="battleCommand-card"></div>
          <div className="battleCommand-card">
              <div className="cardTitle-symbol">
                <span className="symbol">A</span>
              <h4>Lance de glace</h4>
                <span className="symbol">T</span>
              </div>
           <div className="lineCard"></div>
            <div className="damage-mainDamage">
              <span>Main Damage Type </span>
              <span>Main Damage</span>
            </div>
            <div className="lineCard"></div>
            <div className="damage-subDamage">
              <span>Sub Damage Type </span>
              <span>Sub Damage</span>
            </div>
            <div className="lineCard"></div>
            <div className="damage-effect">
              <span>Effect 1</span>
              <span>Effect 2</span>
            </div>
          </div>
        </div>
        <div className="battleCommand-wrapper-right"></div>
      </div>
    </div>
  );
}

export default Combat_page;
