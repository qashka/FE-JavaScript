const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength ${this.strength} XP points`;
    }
};

aurora.health -= 20;

aurora.strength += 10;

aurora.xp += 15;

console.log(aurora.describe());


const dog = {
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark: "Grrr! Grrr!"
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);