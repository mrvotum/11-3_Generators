import AttackedTeam from './AttackedTeam';

const playerOne = {
  name: 'Лучник-1',
  type: 'Bowman',
  health: 50,
  attackDistance: 8, // дальность атаки
  attack: 40,
  defence: 10,
};

const playerTwo = {
  name: 'Некромант-2',
  type: 'Necromancer',
  health: 30,
  attackDistance: 4, // дальность атаки
  attack: 50,
  defence: 15,
};

const playerThree = {
  name: 'Rick-3',
  type: 'Сucumber',
  health: 100,
  attackDistance: 4, // дальность атаки
  attack: 90,
  defence: 75,
};

const playersTeam = new AttackedTeam(playerThree, playerTwo, playerOne);
console.log(playersTeam);

const result = [];

for (const character of playersTeam) {
  result.push(character);
}

console.log(result);
