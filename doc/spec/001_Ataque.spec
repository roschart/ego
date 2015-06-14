Given:
  Un Host con 
		* Parámetros:
			* Sangre: 90
			* Condición física: 100
			* Condición mental: 60
			* Habilidad puntería: 10
			* Habilidad evasión: 10
			* Habilidad ataque: 10
			* Habilidad defensa: 10
		* Armadura con:
			* Defensa: 10
			* Confección: Alcolchada
			* Material: Prótonico 
			* Maniobrabilidad: 2
			* Peso: 10
		* Arma:
			* Daño: 15
			* Tipo: Perforante
			* Elemento: Eléctrico
			* Manejo: 10
			* Peso: 5
	Un rival con:
		* Parámetros:
			* Sangre: 100
			* Condición física: 70
			* Condición mental: 80
			* Habilidad puntería: 5
			* Habilidad evasión: 5
			* Habilidad ataque: 5
			* Habilidad defensa: 5
		* Armadura con:
			* Defensa: 5
			* Confección: Alcolchada
			* Material: Prótonico 
			* Maniobrabilidad: 1
			* Peso: 10
		* Arma:
			* Daño: 20
			* Tipo: Choque
			* Elemento: Físico
			* Manejo: 15
			* Peso: 10
When:
	Host ataca al rival. [botón atacar]
Then:
	* Cálculo de precisión [manejo del arma + Habilidad de puntería+Bonus]
	* Cálculo por
	* Tirada enfrenteada. [Punteria de host-Evasión rival]
  
