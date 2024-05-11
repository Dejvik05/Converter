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
        return value.toFixed(Math.max(3, this.getFloatingPoint(value))) + this.symbol;
    }
    getFloatingPoint(value) {
        let point = 0;
        while(value < 1) {
            value *= 10;
            point++;
        }
        return point;
    }
}