var _player={
		live:30,
		aim:10,
		evasion: 10,
		attack: 10,
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
		defender.live-=hitPoints(attacker, defender);		 	
	 }
}

function isHit(attaquer, defender){
	return attaquer.aim - defender.evasion>0
}

function hitPoints(attaquer,defender){
		var damage=attaquer.attack-defender.defense;
		return ((damage>defender.live)? defender.live:damage);
}

//Test
console.log(_player,_monster);
console.log(hitPoints(_player,_monster));
attack(_player,_monster);
console.log(_player,_monster);



