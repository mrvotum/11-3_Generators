export default class AttackedTeam {
  constructor(...characters) {
    this.characters = characters.sort((a, b) => (
      b.attack + b.attackDistance - a.attack - a.attackDistance // По уровню "опасности"
    ));
  }

  * [Symbol.iterator]() {
    for (const player of this.characters) {
      yield player;
    }
  }
}
