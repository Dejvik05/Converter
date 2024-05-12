class Unit {
    constructor(name, symbol, type, toBase, fromBase) {
        this.name = name;
        this.symbol = symbol;
        this.type = type;
        this.toBase = toBase;
        this.fromBase = fromBase;
    }
    getValueFrom(other, value) {
        value = this.fromBase(other.toBase(value));
        value = this.isZero(value) ? 0 : value;
        return value.toFixed(Math.max(3, this.getFloatingPoint(value))) + this.symbol;
    }
    getFloatingPoint(value) {
        if (value === 0) return 0;
        let point = 0;
        while(Math.abs(value) < 1) {
            value *= 10;
            point++;
        }
        return point;
    }
    isZero(value) {
        return Math.abs(value) < 0.0000001;
    }
}