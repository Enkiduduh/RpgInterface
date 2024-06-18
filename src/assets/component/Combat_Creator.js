class Combat {
  constructor(char1, deck1, char2, deck2, battleScene, battleRules) {
    this.char1 = char1;
    this.deck1 = deck1;
    this.char2 = char2;
    this.deck2 = deck2;
    this.battleScene = battleScene;
    this.battleRules = battleRules;
  }
  displayInfo() {
    console.log(
      `Combat:
  Char1: ${this.char1},
  Char2: ${this.char2},
  Gender: ${this.gender},
  Level: ${this.level},
  Class: ${this.classJob},
  Tiers: ${this.tiers},
  Stats: ${JSON.stringify(this.stats, null, 2)}
`
    );
  }
}

class AttackTurn {
  constructor(
    // counterTurn,
    attacker,
    target,
    targetLife,
    choiceAttack,
    damageInflicted
  ) {
    // this.counterTurn = counterTurn;
    this.attacker = attacker;
    this.target = target;
    this.targetLife = targetLife;
    this.choiceAttack = choiceAttack;
    this.damageInflicted = damageInflicted;
  }
  displayInfo() {
    `AttackTurn:
    Attacker: ${this.attacker},
    Target: ${this.target},
    TargetLife: ${this.targetLife},
    AttackChoice: ${this.choiceAttack},
    DamageInflicted: ${this.damageInflicted},
  `;
  }
}

class AttackTurnFactory {
  createAttackTurnFactory( attacker, target, targetLife,  attackChoice = {}, damageInflicted) {
    let attackResult = attackChoice.damage - targetLife;
    damageInflicted = attackResult;

    targetLife = target.health;
    const player = attacker;

    return new AttackTurnFactory(
      player,
      target,
      targetLife,
      attackChoice,
      damageInflicted
    );
  }
}
export { Combat, AttackTurn, AttackTurnFactory };
