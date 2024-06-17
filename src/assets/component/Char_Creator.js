import { rulesStats } from "./Stats_creation";

class Char {
  constructor(name, race, gender, level, classJob, tiers, stats) {
    this.name = name;
    this.race = race;
    this.gender = gender;
    this.level = level;
    this.classJob = classJob;
    this.tiers = tiers;
    this.stats = stats;
  }
  displayInfo() {
    console.log(
      `Char:
  Name: ${this.name},
  Race: ${this.race},
  Gender: ${this.gender},
  Level: ${this.level},
  Class: ${this.classJob},
  Tiers: ${this.tiers},
  Stats: ${JSON.stringify(this.stats, null, 2)}
`
    );
  }
}

class CharFactory {
  createChar(name, race, gender, level = 1, classJob, tiers = 1, stats = {}) {
    // Valeurs par défaut pour stats
    let defaultStats = {};
    if (classJob == "soldier") {
      defaultStats = {
        health: 300,
        mana: 50,
        force: 5,
        dexterity: 3,
        agility: 1,
        intelligence: 1,
        spirit: 1,
        resilience: 4,
        damage: 10,
        precision: 20,
        critical_rate: 5,
        critical_damage: 100,
        block_rate: 20,
        physical_damage: 10,
        magical_damage: 0,
        fire_damage: 0,
        cold_damage: 0,
        nature_damage: 0,
        electric_damage: 0,
        divine_damage: 0,
        darkness_damage: 0,
        defense: 20,
        flee: 5,
        resistance: 10,
        magical_resistance: 0,
        fire_resistance: 0,
        cold_resistance: 0,
        nature_resistance: 0,
        electric_resistance: 0,
        divine_resistance: 0,
        darkness_resistance: 0,
      };
    } else if (classJob == "scout") {
      defaultStats = {
        health: 250,
        mana: 80,
        force: 2,
        dexterity: 4,
        agility: 4,
        intelligence: 1,
        spirit: 2,
        resilience: 2,
        damage: 10,
        precision: 40,
        critical_rate: 10,
        critical_damage: 110,
        block_rate: 0,
        physical_damage: 5,
        magical_damage: 0,
        fire_damage: 0,
        cold_damage: 0,
        nature_damage: 5,
        electric_damage: 0,
        divine_damage: 0,
        darkness_damage: 0,
        defense: 10,
        flee: 15,
        resistance: 0,
        magical_resistance: 0,
        fire_resistance: 0,
        cold_resistance: 0,
        nature_resistance: 10,
        electric_resistance: 0,
        divine_resistance: 0,
        darkness_resistance: 0,
      };
    } else {
      defaultStats = {
        health: 200,
        mana: 130,
        force: 1,
        dexterity: 2,
        agility: 1,
        intelligence: 5,
        spirit: 5,
        resilience: 1,
        damage: 10,
        precision: 20,
        critical_rate: 5,
        critical_damage: 100,
        block_rate: 0,
        physical_damage: 0,
        magical_damage: 10,
        fire_damage: 0,
        cold_damage: 0,
        nature_damage: 0,
        electric_damage: 0,
        divine_damage: 0,
        darkness_damage: 0,
        defense: 30,
        flee: 0,
        resistance: 0,
        magical_resistance: 10,
        fire_resistance: 5,
        cold_resistance: 5,
        nature_resistance: 5,
        electric_resistance: 5,
        divine_resistance: 0,
        darkness_resistance: 0,
      };
    }

    const raceChoice = race;
    switch (raceChoice) {
      case "human":
        defaultStats.dexterity += 2;
        defaultStats.intelligence += 1;
        defaultStats.agility += 1;
        defaultStats.precision += 30;
        defaultStats.critical_rate += 10;
        defaultStats.fire_resistance += 10;
        break;
      case "orc":
        defaultStats.force += 2;
        defaultStats.health += 100;
        defaultStats.resilience += 1;
        defaultStats.block_rate += 5;
        defaultStats.nature_resistance += 5;
        defaultStats.agility += 1;
        break;
      case "undead":
        defaultStats.health += 150;
        defaultStats.dexterity += 2;
        defaultStats.spirit += 50;
        defaultStats.flee += 5;
        defaultStats.cold_damage += 5;
        defaultStats.cold_resistance += 10;
        break;
      case "demon":
        defaultStats.intelligence += 2;
        defaultStats.force += 1;
        defaultStats.resilience += 2;
        defaultStats.critical_damage += 20;
        defaultStats.magical_damage += 10;
        defaultStats.magical_resistance += 10;
        break;
      default:
        console.log("Vous devez choisir une race...");
    }

    const genderChoice = gender;
    switch (genderChoice) {
      case "male":
        defaultStats.force += 2;
        defaultStats.health += 100;
        defaultStats.agility -= 1;
        break;
      case "female":
        defaultStats.intelligence += 1;
        defaultStats.agility += 1;
        defaultStats.resilience += 1;
        break;
      case "nogender":
        defaultStats.health += 150;
        defaultStats.mana += 50;
        defaultStats.resilience -= 2;
        break;
      default:
        console.log("Vous devez choisir une appartenance...");
    }

    // Fusionner les valeurs par défaut avec celles fournies
    const finalStats = { ...defaultStats, ...stats };
    const statsFinal = rulesStats(finalStats);
    const nameNormalized = name.charAt(0).toUpperCase() + name.substring(1);
    return new Char(
      nameNormalized,
      raceChoice,
      genderChoice,
      level,
      classJob,
      tiers,
      statsFinal
    );
  }
}

export { Char, CharFactory };
