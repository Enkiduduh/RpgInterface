import Cards from "../Objet/Cards/Cards";



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
          <Cards
          nameCard="Lance de glace"
          backgroundElement="cold"
          element="cold"
          attribut="physical"
          mainDamageType="Dégât de Froid"
          mainDamage={3}
          subDamageType="Dégât Physique"
          subDamage={1}
          effect1="Gel"
          effect2={null}
          />
          <Cards
          nameCard="Brise-Âme"
          backgroundElement="darkness"
          element="darkness"
          attribut="magical"
          mainDamageType="Dégât de Malice"
          mainDamage={3}
          subDamageType="Dégât Magique"
          subDamage={3}
          effect1="Peur"
          effect2={null}
          />
          <Cards
          nameCard="Entaille"
          backgroundElement="physical"
          element="physical"
          attribut="physical"
          mainDamageType="Dégât Physique"
          mainDamage={3}
          subDamageType="-"
          subDamage="-"
          effect1="-"
          effect2={null}
          />
         <Cards
          nameCard="Transper'Ciel"
          backgroundElement="electric"
          element="electric"
          attribut="magical"
          mainDamageType="Dégât de Foudre"
          mainDamage={5}
          subDamageType="Dégât de Feu"
          subDamage={2}
          effect1="Paralyse"
          effect2="Enflamme"
          />
        </div>
        <div className="battleCommand-wrapper-right"></div>
      </div>
    </div>
  );
}

export default Combat_page;
