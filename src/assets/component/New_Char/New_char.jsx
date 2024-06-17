import { useEffect, useState } from "react";
import Objet_select_class from "../Objet/SelectClass/SelectClass";
import Objet_select_gender from "../Objet/SelectGender/SelectGender";
import Objet_select_race from "../Objet/SelectRace/SelectRace";
import Objet_stat_modifier from "../Objet/StatsModifier/Stats_modifier";
import { Char, CharFactory } from "../Char_Creator";
import {
  statsBasic,
  statsBasicSoldier,
  statsBasicScout,
  statsBasicMage,
} from "../Stats_creation";
import { rulesStats } from "../Stats_creation";
import Stat_display from "../Objet/Stat_Display/Stat_display";
// import New_Char_Stats from "../Objet/New_Char_Stats/New_char_stats";
// import Skill_page from "../Skill_Page/Skill_page";
// import Frame_stat from "../Frame_Stats/Frame_stats";

function New_char() {
  const [statsMemory, setStatsMemory] = useState({});
  const [hasClicked, setHasClicked] = useState(false);
  const [reset, setReset] = useState(false);
  const [result, setResults] = useState({});
  const [counterPoints, setCounterPoints] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [charCreated, setCharCreated] = useState(false);

  const [checkName, setCheckName] = useState(false);
  const [checkRace, setCheckRace] = useState(false);
  const [checkGender, setCheckGender] = useState(false);
  const [checkClass, setCheckClass] = useState(false);

  const factory = new CharFactory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    const myNewChar = factory.createChar(
      formData.nameNormalized,
      formData.raceChoice,
      formData.genderChoice,
      formData.level,
      formData.classJob,
      formData.tiers,
      formData.finalStats
    );
    setCharCreated(true);
    myNewChar.displayInfo();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleResultChange = (stat, result) => {
    setResults((prevResults) => ({
      ...prevResults,
      [stat]: result,
    }));
    console.log(result);
  };

  useEffect(() => {
    if (result) {
      const updatedStats = rulesStats(result); // Appelez `rulesStats` ici
      setFormData((prevFormData) => ({
        ...prevFormData,
        finalStats: updatedStats,
      }));
    }
  }, [result]);

  const displayStats = (stats) => {
    stats = {};
    if (
      formData.nameNormalized !== "" &&
      formData.raceChoice !== "" &&
      formData.genderChoice !== "" &&
      formData.classJob !== ""
    ) {
      const choice = formData.classJob;
      switch (choice) {
        case "soldier":
          stats = statsBasicSoldier;
          setStatsMemory(stats);
          setHasClicked(true);
          console.log({ ...statsMemory, stats });
          return stats;
        case "scout":
          stats = statsBasicScout;
          setStatsMemory(stats);
          setHasClicked(true);
          console.log({ ...statsMemory, stats });
          return stats;
        case "mage":
          stats = statsBasicMage;
          setStatsMemory(stats);
          setHasClicked(true);
          console.log({ ...statsMemory, stats });
          return stats;
        default:
          console.log("Erreur...");
      }
    }
  };

  const resetForm = () => {
    setHasClicked(false);
    setFormData({
      nameNormalized: "",
      raceChoice: "",
      genderChoice: "",
      classJob: "",
      level: 1,
      tiers: 1,
      stats: "",
    });
    setPoints(10);
    setPointsElem(5);
    setStatsMemory(statsBasic);
    setCounterPoints(false);
    setReset(true); // Indicate reset state
    setTimeout(() => setReset(false), 0); // Reset the reset state
  };

  const displayStatsRemove = () => {
    setHasClicked(false);
  };

  const [formData, setFormData] = useState({
    nameNormalized: "",
    raceChoice: "",
    genderChoice: "",
    classJob: "",
    level: 1,
    tiers: 1,
    finalStats: "",
  });

  const [points, setPoints] = useState(10);

  const addPoint = () => {
    setPoints(points - 1);
  };

  const subPoint = () => {
    setPoints(points + 1);
  };

  const [pointsElem, setPointsElem] = useState(5);

  const addPointElem = () => {
    setPointsElem(pointsElem - 1);
  };

  const subPointElem = () => {
    setPointsElem(pointsElem + 1);
  };

  useEffect(() => {
    if (points === 0 && pointsElem === 0) {
      setCounterPoints(true);
    } else if (points > 0 || pointsElem > 0) {
      setCounterPoints(false);
    }
  }, [points, pointsElem]);

  const data = formData.finalStats;

  useEffect(() => {
    if (formData.nameNormalized !== "") setCheckName(true);
    else setCheckName(false);
  }, [checkName, formData.nameNormalized]);

  useEffect(() => {
    if (formData.raceChoice !== "") setCheckRace(true);
    else setCheckRace(false);
  }, [checkRace, formData.raceChoice]);

  useEffect(() => {
    if (formData.genderChoice !== "") setCheckGender(true);
    else setCheckGender(false);
  }, [checkGender, formData.genderChoice]);

  useEffect(() => {
    if (formData.classJob !== "") setCheckClass(true);
    else setCheckClass(false);
  }, [checkClass, formData.classJob]);

  const checkCreatorNok =
    !(checkName && checkRace && checkGender && checkClass);

  return (
    <div>
      <button>
        <a href="/" target="_self">
          Retour
        </a>
      </button>
      <div className="charCreator-container">
        <div className="charCreator-creation">
          <h2>Création de votre personnage</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Nom de votre personnage : </label>
              <input
                id="char-name"
                name="nameNormalized"
                value={formData.nameNormalized}
                onChange={handleChange}
              ></input>
            </div>
            <Objet_select_race
              handleChange={handleChange}
              value={formData.raceChoice}
            />
            <Objet_select_gender
              handleChange={handleChange}
              value={formData.genderChoice}
            />
            <Objet_select_class
              handleChange={handleChange}
              value={formData.classJob}
            />
            <>
              {!hasClicked ? (
                <>
                  {checkCreatorNok ? (
                    <button type="button" id="buttonNextNok">
                      Suivant
                    </button>
                  ) : (
                    <button
                      type="button"
                      id="buttonNext"
                      onClick={displayStats}
                    >
                      Suivant
                    </button>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  id="buttonNext"
                  onClick={displayStatsRemove}
                >
                  Retour
                </button>
              )}
            </>
            <div className="charCreator-creation-attribution">
              <h3>Points attributs restant : {points}</h3>
              <Objet_stat_modifier
                name="Santé"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.health || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="health"
              />
              <Objet_stat_modifier
                name="Mana"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.mana || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="mana"
              />
              <Objet_stat_modifier
                name="Force"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.force || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="force"
              />
              <Objet_stat_modifier
                name="Dextérité"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.dexterity || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="dexterity"
              />
              <Objet_stat_modifier
                name="Agilité"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.agility || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="agility"
              />
              <Objet_stat_modifier
                name="Intelligence"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.intelligence || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="intelligence"
              />
              <Objet_stat_modifier
                name="Esprit"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.spirit || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="spirit"
              />
              <Objet_stat_modifier
                name="Résilience"
                points={points}
                addPoint={addPoint}
                subPoint={subPoint}
                baseStat={statsMemory.resilience || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="resilience"
              />
              <h3>Points bonus élémentaire restant : {pointsElem}</h3>
              <Objet_stat_modifier
                name="Feu"
                points={pointsElem}
                addPoint={addPointElem}
                subPoint={subPointElem}
                baseStat={statsMemory.fire_resistance || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="fire_resistance"
              />
              <Objet_stat_modifier
                name="Froid"
                points={pointsElem}
                addPoint={addPointElem}
                subPoint={subPointElem}
                baseStat={statsMemory.cold_resistance || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="cold_resistance"
              />
              <Objet_stat_modifier
                name="Foudre"
                points={pointsElem}
                addPoint={addPointElem}
                subPoint={subPointElem}
                baseStat={statsMemory.electric_resistance || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="electric_resistance"
              />
              <Objet_stat_modifier
                name="Nature"
                points={pointsElem}
                addPoint={addPointElem}
                subPoint={subPointElem}
                baseStat={statsMemory.nature_resistance || 0}
                reset={reset}
                onResultChange={handleResultChange}
                stat="nature_resistance"
              />
              <div className="buttonSubmit-container">
                <button className="buttonSubmit okReady" onClick={resetForm}>
                  Annuler
                </button>
                {!counterPoints ? (
                  <button
                    type="submit"
                    className="buttonSubmit notReady"
                    onMouseEnter={() => setHidden(false)}
                    onMouseLeave={() => setHidden(true)}
                  >
                    Créer
                  </button>
                ) : (
                  <button type="submit" className="buttonSubmit okReady">
                    Créer
                  </button>
                )}
              </div>
            </div>
            {hasClicked ? (
              <div className="charCreator-attribution-display-hidden"></div>
            ) : (
              <div className="charCreator-attribution-display">
                <div className="modal-display">
                  {!(checkName && checkRace && checkGender && checkClass) ? (
                    <span>Il reste à attribuer à votre personnage :</span>
                  ) : (
                    <span className="modal-next-ok">
                      Vous pouvez cliquer sur Suivant
                    </span>
                  )}
                  {!checkName ? (
                    <span className="modal-span">Un nom</span>
                  ) : null}
                  {!checkRace ? (
                    <span className="modal-span">Une race</span>
                  ) : null}
                  {!checkGender ? (
                    <span className="modal-span">Un genre</span>
                  ) : null}
                  {!checkClass ? (
                    <span className="modal-span">Une classe</span>
                  ) : null}
                </div>
              </div>
            )}
            {!hidden && !counterPoints ? (
              <div className="charCreator-modal-fail">
                <span>
                  Il vous reste des points à attribuer à votre personnage.
                </span>
              </div>
            ) : null}
            {!charCreated ? null : (
              <div className="charCreator-modal-succes">
                <span>{`Votre personnage ${formData.nameNormalized} a été créé avec succès.`}</span>
              </div>
            )}
          </form>
        </div>
        <div className="charCreator-creationDisplay">
          <div className="creationDisplay-container">
            <div className="creationDisplay-main-infos-wrapper">
              <div className="creationDisplay-main-infos">
                <div className="creationDisplay-main-infos-left">
                  <span>{formData.nameNormalized || "Nouveau Personnage"}</span>
                  <span>{formData.genderChoice || "-"}</span>
                  <span>{formData.raceChoice || "-"}</span>
                </div>
                <div className="creationDisplay-main-infos-middle">
                  {/* <img src={char.class_img || ""} alt="" /> */}
                </div>
                <div className="creationDisplay-main-infos-right">
                  <span>Niveau {formData.level || "1"} </span>
                  <span>{formData.classJob || "-"}</span>
                  <span>Tiers {formData.tiers || "1"}</span>
                </div>
              </div>
            </div>
            <div className="lineInterStats lineTop"></div>
            <div className="category-stats-container">
              <span className="category-stats">Statistiques Principales</span>
            </div>
            <div className="lineInterStats lineBottom"></div>

            <div className="creationDisplay-stats-infos-wrapper">
              <div className="creationDisplay-stats-infos-left">
                <Stat_display
                  name="Santé"
                  nameDirection="stats-value-left"
                  value={data.health}
                />
                <Stat_display
                  name="Force"
                  nameDirection="stats-value-left"
                  value={data.force}
                />
                <Stat_display
                  name="Dextérité"
                  nameDirection="stats-value-left"
                  value={data.dexterity}
                />
                <Stat_display
                  name="Agilité"
                  nameDirection="stats-value-left"
                  value={data.agility}
                />
              </div>
              <div className="creationDisplay-stats-infos-right">
                <Stat_display
                  name="Mana"
                  nameDirection="stats-value"
                  value={data.mana}
                />
                <Stat_display
                  name="Intelligence"
                  nameDirection="stats-value"
                  value={data.intelligence}
                />
                <Stat_display
                  name="Esprit"
                  nameDirection="stats-value"
                  value={data.spirit}
                />
                <Stat_display
                  name="Résilience"
                  nameDirection="stats-value"
                  value={data.resilience}
                />
              </div>
            </div>
            <div className="lineInterStats lineTop"></div>
            <div className="category-stats-container">
              <span className="category-stats">Statistiques Secondaires</span>
            </div>
            <div className="lineInterStats lineBottom"></div>

            <div className="creationDisplay-sub-infos-wrapper">
              <div className="creationDisplay-sub-infos-left">
                <Stat_display
                  name="Dégât"
                  nameDirection="stats-value-left"
                  value={data.damage}
                />
                <Stat_display
                  name="Précision"
                  nameDirection="stats-value-left"
                  value={data.precision}
                />
                <Stat_display
                  name="Chance Critique"
                  nameDirection="stats-value-left"
                  value={data.critical_rate}
                />
                <Stat_display
                  name="Dégât Critique"
                  nameDirection="stats-value-left"
                  value={data.critical_damage}
                />
                <Stat_display
                  name="Dégât Physique"
                  nameDirection="stats-value-left"
                  value={data.physical_damage}
                />
                <Stat_display
                  name="Dégât Magique"
                  nameDirection="stats-value-left"
                  value={data.magical_damage}
                />
                <Stat_display
                  name="Dégât Feu"
                  nameDirection="stats-value-left"
                  value={data.fire_damage}
                />
                <Stat_display
                  name="Dégât Froid"
                  nameDirection="stats-value-left"
                  value={data.cold_damage}
                />
                <Stat_display
                  name="Dégât Nature"
                  nameDirection="stats-value-left"
                  value={data.nature_damage}
                />
                <Stat_display
                  name="Dégât Foudre"
                  nameDirection="stats-value-left"
                  value={data.electric_damage}
                />
                <Stat_display
                  name="Dégât Divin"
                  nameDirection="stats-value-left"
                  value={data.divine_damage}
                />
                <Stat_display
                  name="Dégât Malice"
                  nameDirection="stats-value-left"
                  value={data.darkness_damage}
                />
              </div>
              <div className="creationDisplay-sub-infos-right">
                <Stat_display
                  name="Défense"
                  nameDirection="stats-value"
                  value={data.defense}
                />
                <Stat_display
                  name="Esquive"
                  nameDirection="stats-value"
                  value={data.flee}
                />
                <Stat_display
                  name="Parade"
                  nameDirection="stats-value"
                  value={data.parry}
                />
                <Stat_display
                  name="Résistance"
                  nameDirection="stats-value"
                  value={data.resistance}
                />
                <Stat_display
                  name="Résistance Physique"
                  nameDirection="stats-value"
                  value={data.physical_resistance}
                />
                <Stat_display
                  name="Résistance Magique"
                  nameDirection="stats-value"
                  value={data.magical_resistance}
                />
                <Stat_display
                  name="Résistance Feu"
                  nameDirection="stats-value"
                  value={data.fire_resistance}
                />
                <Stat_display
                  name="Résistance Froid"
                  nameDirection="stats-value"
                  value={data.cold_resistance}
                />
                <Stat_display
                  name="Résistance Nature"
                  nameDirection="stats-value"
                  value={data.nature_resistance}
                />
                <Stat_display
                  name="Résistance Foudre"
                  nameDirection="stats-value"
                  value={data.electric_resistance}
                />
                <Stat_display
                  name="Résistance Divin"
                  nameDirection="stats-value"
                  value={data.divine_resistance}
                />
                <Stat_display
                  name="Résistance Malice"
                  nameDirection="stats-value"
                  value={data.darkness_resistance}
                />
              </div>
            </div>
            <div className="lineInterStats lineTop"></div>
            <div className="category-stats-container">
              <span className="category-stats">Mérites</span>
            </div>
            <div className="lineInterStats lineBottom"></div>
            <div className="creationDisplay-last-infos">
              <div className="creationDisplay-last-infos-left">
                <div className="stats">
                  <span>Duel :</span>
                  <span className="stats-value-left">{formData.duel || 0}</span>
                </div>
                <div className="stats">
                  <span>Gagné :</span>
                  <span className="stats-value-left">{formData.won || 0}</span>
                </div>
                <div className="stats">
                  <span>Perdu :</span>
                  <span className="stats-value-left">{formData.lost || 0}</span>
                </div>
              </div>
              <div className="creationDisplay-last-infos-right">
                <div className="stats">
                  <span>Monstres tués :</span>
                  <span className="stats-value">
                    {formData.monsters_killed || 0}
                  </span>
                </div>
                <div className="stats">
                  <span>Nombre de mort :</span>
                  <span className="stats-value">
                    {formData.total_death || 0}
                  </span>
                </div>
                <div className="stats">
                  <span>Difficulté :</span>
                  <span className="stats-value">
                    {formData.difficulty || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button">Suivant</button>
    </div>
  );
}

export default New_char;
