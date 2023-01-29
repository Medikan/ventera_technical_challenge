const MEASUREMENT_TYPE = {
  TEMPERATURE: 0,
  VOLUME: 1,
};

export const MEASUREMENT_OPTIONS = [
  {
    name: "Kelvin",
    val: 0,
    type: MEASUREMENT_TYPE.TEMPERATURE,
  },
  {
    name: "Celcius",
    val: 1,
    type: MEASUREMENT_TYPE.TEMPERATURE,
  },
  {
    name: "Fahrenheit",
    val: 2,
    type: MEASUREMENT_TYPE.TEMPERATURE,
  },
  {
    name: "Rankine",
    val: 3,
    type: MEASUREMENT_TYPE.TEMPERATURE,
  },
  {
    name: "Liters",
    val: 4,
    type: MEASUREMENT_TYPE.VOLUME,
  },
  {
    name: "TblSpn",
    val: 5,
    type: MEASUREMENT_TYPE.VOLUME,
  },
  {
    name: "Cubic-Inches",
    val: 6,
    type: MEASUREMENT_TYPE.VOLUME,
  },
  {
    name: "Cups",
    val: 7,
    type: MEASUREMENT_TYPE.VOLUME,
  },
  {
    name: "Cubic-Feet",
    val: 8,
    type: MEASUREMENT_TYPE.VOLUME,
  },
  {
    name: "Gallons",
    val: 9,
    type: MEASUREMENT_TYPE.VOLUME,
  },
];
