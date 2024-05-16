let units = [
    //length units
    new Unit("m", "m", "Délka", (value) => {return value}, (value) => {return value}),
    new Unit("mm", "mm", "Délka", (value) => {return value / 1000}, (value) => {return value * 1000}),
    new Unit("km", "km", "Délka", (value) => {return value * 1000}, (value) => {return value / 1000}),
    new Unit("dm", "dm", "Délka", (value) => {return value / 10}, (value) => {return value * 10}),
    new Unit("cm", "cm", "Délka", (value) => {return value / 100}, (value) => {return value * 100}),
    //temperature units
    new Unit("°C", "°C", "Teplota", (value) => {return value + 273.15}, (value) => {return value - 273.15}),
    new Unit("°F", "°F", "Teplota", (value) => {return (value + 459.67) * 5 / 9}, (value) => {return value * 9 / 5 - 459.67}),
    new Unit("K", "K", "Teplota", (value) => {return value}, (value) => {return value}),
    //area units
    new Unit("ha", "ha", "Obsah", (value) => {return value * 10000}, (value) => {return value / 10000}),
    new Unit("a", "a", "Obsah", (value) => {return value * 100}, (value) => {return value / 100}),
    new Unit("m²", "m²", "Obsah", (value) => {return value}, (value) => {return value}),
    new Unit("km²", "km²", "Obsah", (value) => {return value * 1000000}, (value) => {return value / 1000000}),
    new Unit("mm²", "mm²", "Obsah", (value) => {return value / 1000000}, (value) => {return value * 1000000}),
    new Unit("cm²", "cm²", "Obsah", (value) => {return value / 10000}, (value) => {return value * 10000}),
    new Unit("dm²", "dm²", "Obsah", (value) => {return value / 100}, (value) => {return value * 100}),
    //volume units
    new Unit("l", "l", "Objem", (value) => {return value}, (value) => {return value}),
    new Unit("m³", "m³", "Objem", (value) => {return value * 1000}, (value) => {return value / 1000}),
    new Unit("mm³", "mm³", "Objem", (value) => {return value / 1000000}, (value) => {return value * 1000000}),
    new Unit("dm³", "dm³", "Objem", (value) => {return value}, (value) => {return value}),
    new Unit("cm³", "cm³", "Objem", (value) => {return value / 1000}, (value) => {return value * 1000}),
    new Unit("hl", "hl", "Objem", (value) => {return value * 100}, (value) => {return value / 100}),
    new Unit("ml", "ml", "Objem", (value) => {return value / 1000}, (value) => {return value * 1000}),
    new Unit("cl", "cl", "Objem", (value) => {return value / 100}, (value) => {return value * 100}),
    new Unit("dl", "dl", "Objem", (value) => {return value / 10}, (value) => {return value * 10}),
    //weight units
    new Unit("kg", "kg", "Hmotnost", (value) => {return value}, (value) => {return value}),
    new Unit("g", "g", "Hmotnost", (value) => {return value / 1000}, (value) => {return value * 1000}),
    new Unit("mg", "mg", "Hmotnost", (value) => {return value / 1000000}, (value) => {return value * 1000000}),
    new Unit("dkg", "dkg", "Hmotnost", (value) => {return value / 100}, (value) => {return value * 100}),
    new Unit("t", "t", "Hmotnost", (value) => {return value * 1000}, (value) => {return value / 1000}),
    new Unit("kt", "kt", "Hmotnost", (value) => {return value * 1000000}, (value) => {return value / 1000000}),
    new Unit("q", "q", "Hmotnost", (value) => {return value * 100}, (value) => {return value / 100}),
    //time units
    new Unit("s", "s", "Čas", (value) => {return value}, (value) => {return value}),
    new Unit("min", "min", "Čas", (value) => {return value * 60}, (value) => {return value / 60}),
    new Unit("h", "h", "Čas", (value) => {return value * 3600}, (value) => {return value / 3600}),
    new Unit("den", "den", "Čas", (value) => {return value * 86400}, (value) => {return value / 86400}),
    //I units
    new Unit("A", "A", "Elektrický proud", (value) => {return value}, (value) => {return value}),
    new Unit("mA", "mA", "Elektrický proud", (value) => {return value / 1000}, (value) => {return value * 1000}),
    //U resistance 
    new Unit("Ω", "Ω", "Elektrický odpor", (value) => {return value}, (value) => {return value}),
    new Unit("mΩ", "mΩ", "Elektrický odpor", (value) => {return value / 1000}, (value) => {return value * 1000}),
    new Unit("kΩ", "kΩ", "Elektrický odpor", (value) => {return value * 1000}, (value) => {return value / 1000}),
    new Unit("MΩ", "MΩ", "Elektrický odpor", (value) => {return value * 1000000}, (value) => {return value / 1000000}),
    //U units
    new Unit("V", "V", "Elektrické napětí", (value) => {return value}, (value) => {return value}),
    new Unit("mV", "mV", "Elektrické napětí", (value) => {return value / 1000}, (value) => {return value * 1000}),
    new Unit("kV", "kV", "Elektrické napětí", (value) => {return value * 1000}, (value) => {return value / 1000}),
    new Unit("MV", "MV", "Elektrické napětí", (value) => {return value * 1000000}, (value) => {return value / 1000000}) 
]

let unitsSelect = document.getElementById("units");
let inputUnitSelect = document.getElementById("input_unit");
let outputUnitSelect = document.getElementById("output_unit");
let result = document.getElementById("result");
let valueInput = document.getElementById("value_input");
let unitType;
let inputUnitIndex = -1;
let outputUnitIndex = -1;
let hashSet = new Set();
for (let i = 0; i < units.length; i++) {
    if (hashSet.has(units[i].type)) continue;
    hashSet.add(units[i].type);
    let option = document.createElement("option");
    option.onmousemove = () => {
        console.log(option.value);
    }
    option.value = units[i].type;
    option.innerHTML = units[i].type;
    unitsSelect.appendChild(option);
}
unitsSelect.onchange = populateSelects;
populateSelects();

function populateSelects() {
    unitType = unitsSelect.value;
    inputUnitSelect.innerHTML = "";
    outputUnitSelect.innerHTML = "";
    inputUnitIndex = -1;
    outputUnitIndex = -1;
    populateSelect(inputUnitSelect, unitType);
    populateSelect(outputUnitSelect, unitType);
    inputUnitSelect.onchange = () => {inputUnitIndex = Number(inputUnitSelect.value)};
    outputUnitSelect.onchange = () => {outputUnitIndex = Number(outputUnitSelect.value)};
    inputUnitSelect.onchange();
    outputUnitSelect.onchange();
}

function populateSelect(select, unitType) {
    for (let i = 0; i < units.length; i++) {
        if (units[i].type != unitType) continue;
        let option = document.createElement("option");
        option.innerHTML = units[i].name;
        option.value = i;
        select.appendChild(option);
    }
}

function showDiv(){
    document.getElementById("result_div").style.display = "inline-block";
}

function calculate() {
    if (inputUnitIndex == -1) return;
    let value = Number(valueInput.value);
    if (value < 0) {
        if (unitType!="Teplota") {
            alert("Neplatná hodnota vstupu.");
            document.getElementById("result_div").style.display = "none";  
            return;  
        } else {
            if (units[inputUnitIndex].toBase(value) < 0) {
                alert("Teplota nemůže být pod absolutní nulou.");
                document.getElementById("result_div").style.display = "none";
                return;
            }

        }
    }
    result.innerHTML = units[outputUnitIndex].getValueFrom(units[inputUnitIndex], value);
}
