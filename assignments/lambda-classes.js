// CODE here for your Lambda Classes

class GameObject {
	constructor(data) {
		this.createdAt = data.createdAt;
		this.name = data.name;
		this.dimensions = data.dimensions;
	}
	destroy() {
		return `${this.name} was removed from the game.`;
	}
}

class CharacterStats extends GameObject {
	constructor(data) {
		super(data);
		this.healthPoints = data.healthPoints;
	}
	takeDamage() {
		return `${this.name} took damage.`;
	}
}

class Humanoid extends CharacterStats {
	constructor(data) {
		super(data);
		this.team = data.team;
		this.weapons = data.weapons;
		this.language = data.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}`;
	}
}

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: 'Bruce',
	team: 'Mage Guild',
	weapons: ['Staff of Shamalama'],
	language: 'Common Tongue'
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: ['Giant Sword', 'Shield'],
	language: 'Common Tongue'
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: ['Bow', 'Dagger'],
	language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villian extends Humanoid {
	constructor(data) {
		super(data);
	}
	forceLightning() {
		return {
			if(OmniSlash) {
				return (this.healthPoints = this.healthPoints - 10);
			}
		};
	}
	tellSecret() {
		return `I am your father`;
	}
}
class Hero extends Humanoid {
	constructor(data) {
		super(data);
	}
	omniSlash() {
		return {
			if(forceLightning) {
				return (this.healthPoints = this.healthPoints - 10);
			}
		};
	}
}

const sith = new VilliancreatedAt({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 100,
	name: 'Darth Vadar',
	team: 'Sith',
	weapons: ['Light Saber', 'Dark Side'],
	language: 'Common Tongue'
});

const jedi = new VilliancreatedAt({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 75,
	name: 'Darth Vadar',
	team: 'Sith',
	weapons: ['Light Saber', 'Force'],
	language: 'Common Tongue'
});

console.log(sith.forceLightning());
console.log(jedi.omniSlash());
console.log(sith.tellSecret());
