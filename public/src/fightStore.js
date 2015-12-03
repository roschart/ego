var _player = {
  live: 30,
  aim: 10,
  evasion: 10,
  attack: 12,
  defense: 10
};
var _monster = {
  live: 20,
  aim: 20,
  evasion: 5,
  attack: 2,
  defense: 13
};

function attack(attacker, defender) {
  if (isHit(attacker, defender)) {
    defender.live -= hitPoints(attacker, defender);
  }
  applyMalus(attacker);
}

function defend(attacker) {
  attacker.evasion += 10;
  attacker.aim = attacker.aim > 5 ? attacker.aim - 5 : 0;
}

function aim(attacker) {
  attacker.aim += 10;
  attacker.evasion = attacker.evasion > 5 ? attacker.evasion - 5 : 0;
}

function isHit(attacker, defender) {
  return attacker.aim > defender.evasion
}

function hitPoints(attacker, defender) {
  var damage = attacker.attack - defender.defense;
  damage = damage > 0 ? damage : 0;
  return ((damage > defender.live) ? defender.live : damage);
}

function applyMalus(attacker) {
  var malus = 5;
  attacker.evasion = attacker.evasion > malus ? attacker.evasion - malus : 0;
  attacker.aim = attacker.aim > malus ? attacker.aim - malus : 0;
}

var FightStore = {
  getState: function() {
    return {
      player: _player,
      monster: _monster
    }
  },
  attack: function() {
    attack(_player, _monster);
    attack(_monster, _player);
    this.onChange();
  },
  defend: function() {
    defend(_player);
    attack(_monster, _player);
    this.onChange();
  },
  aim: function() {
    aim(_player);
    attack(_monster, _player);
    this.onChange();
  }
}
