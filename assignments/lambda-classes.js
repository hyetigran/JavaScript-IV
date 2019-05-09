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

class CharacterStats {
	constructor(data) {
		super(data);
		this.healthPoints = data.healthPoints;
	}
	takeDamage() {
		return `${this.name} took damage.`;
	}
}
