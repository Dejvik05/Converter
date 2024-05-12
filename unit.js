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
        return value.toFixed(this.getFloatingPoint(value)) + this.symbol;
    }
    getFloatingPoint(value) {
        value = Math.abs(value);
        if (value === 0) return 3;
        let point = 0;
        while(value < 1) {
            value *= 10;
            point++;
        }
        value = value.toString();
        return point + Math.min(value.length - value.indexOf('.') - 1, 3);
    }
    isZero(value) {
        return Math.abs(value) < 0.000000000001;
    }
}