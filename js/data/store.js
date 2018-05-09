import calcPoints from "./calc-points";

class GameStore {
  constructor() {
    this.initialState = {
      level: `level-1`,
      lives: 3,
      idx: 1,
      time: 300,
      maxLevel: 11,
      maxLives: 3,
      standartTime: 35,
      baseTime: 50
    };
    this.currentState = Object.assign({}, this.initialState);
    this.resultDefault = {
      success: true,
      time: this.initialState.standartTime
    };

    this.baseObject = {
      notes: this.initialState.lives,
      points: 1,
      time: this.initialState.baseTime
    };
    this.currentObject = Object.assign({}, this.baseObject);
    this.statistics = [4, 5, 8, 10, 11];
    this.stats = [];
  }

  updateStats(answer) {
    const currentResult = Object.assign({}, this.resultDefault);
    currentResult.success = answer;
    this.stats.push(currentResult);
  }

  getNextLevel() {
    this.currentState.idx += 1;
    this.currentState.level = `level-` + this.currentState.idx;
    return this.currentState;
  }

  getLives() {
    this.currentState.lives -= 1;
    return this.currentState;
  }

  resetState() {
    this.currentState.level = this.initialState.level;
    this.currentState.lives = this.initialState.lives;
    this.currentState.idx = this.initialState.idx;
    this.currentState.time = this.initialState.time;
    this.resetStats();
    return this.currentState;
  }

  resetStats() {
    this.stats.length = 0;
    return this.stats;
  }

  getPoints() {
    this.currentObject.notes = this.currentState.lives;
    this.currentObject.points = this.calculate();
    return this.currentObject;
  }

  calculate() {
    return calcPoints(this.stats, this.currentState.lives);
  }
}

const store = new GameStore();
export default store;
