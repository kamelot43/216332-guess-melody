import calcPoints from "./calc-points";

class GameStore {
  constructor() {
    this.initialState = {
      level: `level-1`,
      lives: 3,
      idx: 1,
      time: 300,
      MAX_LEVEL: 11,
      MAX_LIVES: 3,
      STANDART_TIME: 35,
      BASE_TIME: 50
    };
    this.currentState = Object.assign({}, this.initialState);
    this.resultDefault = {
      success: true,
      time: this.initialState.STANDART_TIME
    };
    this.currentResult = Object.assign({}, this.resultDefault);
    this.BaseObject = {
      notes: this.initialState.lives,
      points: 1,
      time: this.initialState.BASE_TIME
    };
    this.currentObject = Object.assign({}, this.baseObject);
    this.statistics = [4, 5, 8, 10, 11];
    this.stats = [];
  }

  updateStats(answer) {
    this.currentResult.success = answer;
    this.stats.push(this.currentResult);
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
