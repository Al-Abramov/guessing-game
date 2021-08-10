class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
       this.attempt = Math.ceil((this.min + this.max)/2);
       return this.attempt
    }

    lower() {
        this.max = this.attempt
    }

    greater() {
        this.min = this.attempt
    }
}

module.exports = GuessingGame;
