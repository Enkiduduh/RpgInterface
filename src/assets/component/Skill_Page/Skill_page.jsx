import Buttons_skill from "../Objet/Button_Skill/Buttons_skill";

function Skill_page() {
  return (
    <div className="skillPage-container">
      <div className="skillPage-wrapper">
        <div className="skillPage-left">
          <div className="lineSkill"></div>
          <Buttons_skill
            nameSkill="Boule de feu"
            className1="buttonSkill-container"
            className2="buttonSkillTitle"
            className3="buttonSkill"
            className4="spanSkill"
          />
          <div className="lineSkill"></div>
          <Buttons_skill
            nameSkill="Poing du Dragon"
            className1="buttonSkill-container"
            className2="buttonSkillTitle"
            className3="buttonSkill"
            className4="spanSkill"
          />
          <div className="lineSkillSub"></div>
          <Buttons_skill
            nameSkill="Enflammage"
            className1="buttonSkill-containerSub"
            className2="buttonSkillTitleSub"
            className3="buttonSkillSub"
            className4="spanSkillSub"
          />
          <div className="lineSkill"></div>
          <Buttons_skill
            nameSkill="Météorite"
            className1="buttonSkill-container"
            className2="buttonSkillTitle"
            className3="buttonSkill"
            className4="spanSkill"
          />
          <div className="lineSkillSub"></div>
          <Buttons_skill
            nameSkill="Sol brulant"
            className1="buttonSkill-containerSub"
            className2="buttonSkillTitleSub"
            className3="buttonSkillSub"
            className4="spanSkillSub"
          />
          <div className="lineSkill"></div>
        </div>

        <div className="skillPage-right">
          <div className="lineSkill"></div>
          <Buttons_skill
            nameSkill="Lance de glace"
            className1="buttonSkill-container"
            className2="buttonSkillTitle"
            className3="buttonSkill"
            className4="spanSkill"
          />
          <div className="lineSkillSub"></div>
          <Buttons_skill
            nameSkill="Ralentissement"
            className1="buttonSkill-containerSub"
            className2="buttonSkillTitleSub"
            className3="buttonSkillSub"
            className4="spanSkillSub"
          />
          <div className="lineSkill"></div>
          <Buttons_skill
            nameSkill="Prison de glace"
            className1="buttonSkill-container"
            className2="buttonSkillTitle"
            className3="buttonSkill"
            className4="spanSkill"
          />
          <div className="lineSkill"></div>
          <Buttons_skill
            nameSkill="Blizzard"
            className1="buttonSkill-container"
            className2="buttonSkillTitle"
            className3="buttonSkill"
            className4="spanSkill"
          />
          <div className="lineSkillSub"></div>
          <Buttons_skill
            nameSkill="Zone de gel"
            className1="buttonSkill-containerSub"
            className2="buttonSkillTitleSub"
            className3="buttonSkillSub"
            className4="spanSkillSub"
          />
          <div className="lineSkill"></div>
        </div>
      </div>
    </div>
  );
}

export default Skill_page;
