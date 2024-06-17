const statsBasic = {
  health: 0,
  mana: 0,
  force: 0,
  dexterity: 0,
  agility: 0,
  intelligence: 0,
  spirit: 0,
  resilience: 0,
  damage: 0,
  precision: 0,
  critical_rate: 0,
  critical_damage: 0,
  block_rate: 0,
  physical_damage: 0,
  magical_damage: 0,
  fire_damage: 0,
  cold_damage: 0,
  nature_damage: 0,
  electric_damage: 0,
  divine_damage: 0,
  darkness_damage: 0,
  defense: 0,
  flee: 0,
  resistance: 0,
  magical_resistance: 0,
  fire_resistance: 0,
  cold_resistance: 0,
  nature_resistance: 0,
  electric_resistance: 0,
  divine_resistance: 0,
  darkness_resistance: 0,
};

const statsBasicSoldier = {
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

const statsBasicScout = {
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

const statsBasicMage = {
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
  physical_resistance: 0,
  magical_resistance: 10,
  fire_resistance: 10,
  cold_resistance: 10,
  nature_resistance: 10,
  electric_resistance: 10,
  divine_resistance: 0,
  darkness_resistance: 0,
};

function rulesStats(statsToAdd) {
  const calcPhysicalDamage = statsToAdd.force * 4 + statsToAdd.dexterity * 2;
  const calcMagicalDamage = statsToAdd.intelligence * 4;
  const calcDamage =
    calcPhysicalDamage +
    calcMagicalDamage +
    (statsToAdd.fire_damage || 0) +
    (statsToAdd.cold_damage || 0) +
    (statsToAdd.electric_damage || 0) +
    (statsToAdd.nature_damage || 0) +
    (statsToAdd.divine_damage || 0) +
    (statsToAdd.darkness_damage || 0);
  const calcPrecision = statsToAdd.dexterity * 3;
  Math.round(statsToAdd.intelligence / 2);
  const calcCriticalRate = Math.round(
    statsToAdd.agility * 2 +
      Math.round(statsToAdd.dexterity / 2) +
      Math.round(statsToAdd.force / 3) +
      Math.round(statsToAdd.intelligence / 3)
  );
  const calcCriticalDamage =
    statsToAdd.agility * 2 +
    Math.round(statsToAdd.dexterity / 2) +
    Math.round(statsToAdd.force / 2) +
    Math.round(statsToAdd.intelligence / 2);
  const calcDefense =
    Math.round(statsToAdd.force * 1 + statsToAdd.dexterity * 0.5) +
    Math.round(statsToAdd.health / 15);
  const calcFlee = Math.round(
    (statsToAdd.agility * 4 + statsToAdd.dexterity * 0.5) / 10
  );
  const calcParry = Math.round(
    (statsToAdd.dexterity * 4 + statsToAdd.force * 1) / 5
  );

  const calcFireRes = statsToAdd.resilience + statsToAdd.fire_resistance;
  const calcColdRes = statsToAdd.resilience + statsToAdd.cold_resistance;
  const calcElectricRes =
    statsToAdd.resilience + statsToAdd.electric_resistance;
  const calcNatureRes = statsToAdd.resilience + statsToAdd.nature_resistance;

  const calcResistance = Math.round((statsToAdd.health + calcDefense) / 10);
  const calcResistanceMagic = Math.round(
    (statsToAdd.resilience + statsToAdd.spirit) / 5
  );

  const stats = {
    damage: calcDamage,
    precision: calcPrecision,
    critical_rate: calcCriticalRate,
    magical_damage: calcMagicalDamage,
    critical_damage: calcCriticalDamage,
    physical_damage: calcPhysicalDamage,
    defense: calcDefense,
    flee: calcFlee,
    block_rate: calcParry,
    resistance: calcResistance,
    fire_resistance: calcFireRes,
    cold_resistance: calcColdRes,
    electric_resistance: calcElectricRes,
    nature_resistance: calcNatureRes,
    magical_resistance: calcResistanceMagic,
  };

  const updatedStats = { ...statsToAdd, ...stats };
  return updatedStats;
}

export {
  statsBasic,
  statsBasicSoldier,
  statsBasicScout,
  statsBasicMage,
  rulesStats,
};
