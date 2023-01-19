class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = Math.ceil((this.min + this.max) / 2);
        return this.value;
    }

    lower() {
        this.setRange(this.min, this.value);
    }

    greater() {
        this.setRange(this.value, this.max);
    }
    
}

module.exports = GuessingGame;
