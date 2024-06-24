

function Main_menu() {
  return (
    <div className="main-menu-container">
      <button><a href="/new" target="_self">Créer un personnage</a></button>
      <button><a href="/charsList" target="_self">Charger un personnage</a></button>
      <button>Effacer un personnage</button>
      <button><a href="/rts-screen" target="_self">Rts test</a></button>
      <button><a href="/combat" target="_self">Combattre</a></button>
    </div>
  )
}

export default Main_menu
