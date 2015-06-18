var _player={
		live:30,
		aim:10,
		evasion: 10,
		attack: 12,
		defense: 10
	};
var _monster={
		live:20,
		aim:5,
		evasion: 5,
		attack: 5,
		defense: 5
	};

function attack(attacker, defender){
	if(isHit(attacker,defender)){
		console.log(hitPoints(attacker,defender));
		defender.live-=hitPoints(attacker, defender);		 	
	 }
	applyMalus(attacker);
}

function isHit(attacker, defender){
	return attacker.aim - defender.evasion>0
}

function hitPoints(attacker,defender){
		var damage=attacker.attack-defender.defense;
		damage=damage>0?damage:0;
		return ((damage>defender.live)? defender.live:damage);
}

function applyMalus(attacker){
	var malus=5;
	attacker.evasion=attacker.evasion>malus? attacker.evasion-malus:0;
	attacker.attack=attacker.attack>malus? attacker.attack-malus:0;
	console.log(attacker);
}

var FightStore={
	getState:function(){
		return {player:_player,monster:_monster}
	},
	attack:function(){
		attack(_player,_monster);
		if(this.onChange){
			this.onChange();
		}
	}
}



