import { MEASUREMENT_OPTIONS } from "../shared/consts.mjs";
import {
  CelciusToFahrenheit,
  CelciusToKelvin,
  CelciusToRankine,
  FahrenheitToCelcius,
  FahrenheitToKelvin,
  FahrenheitToRankine,
  KelvinToCelcius,
  KelvinToFahrenheit,
  KelvinToRankine,
  RankineToCelcius,
  RankineToFahrenheit,
  RankineToKelvin,
} from "./conversionHelper.temperature.mjs";
import {
  CubicFeetToCubicInches,
  CubicFeetToCups,
  CubicFeetToGallons,
  CubicFeetToLiters,
  CubicFeetToTablespoons,
  CubicInchesToCubicFeet,
  CubicInchesToCups,
  CubicInchesToGallons,
  CubicInchesToLiters,
  CubicInchesToTablespoons,
  CupsToCubicFeet,
  CupsToCubicInches,
  CupsToGallons,
  CupsToLiters,
  CupsToTablespoons,
  GallonsToCubicFeet,
  GallonsToCubicInches,
  GallonsToCups,
  GallonsToLiters,
  GallonsToTablespoons,
  LitersToCubicFeet,
  LitersToCubicInches,
  LitersToCups,
  LitersToGallons,
  LitersToTablespoons,
  TablespoonsToCubicFeet,
  TablespoonsToCubicInches,
  TablespoonsToCups,
  TablespoonsToGallons,
  TablespoonsToLiters,
} from "./conversionHelper.volume.mjs";

/**
 *
 * TODO: Error Checking
 *
 * @param {number} inputValue
 * @param {number} inputMeasurement
 * @param {number} targetMeasurement
 */
export function Convert(inputValue, inputMeasurement, targetMeasurement) {
  inputMeasurement = Number(inputMeasurement);
  targetMeasurement = Number(targetMeasurement);
  inputValue = Number(inputValue);

  let type =
    MEASUREMENT_OPTIONS.find((x) => x.val == inputMeasurement)?.type ?? "";

  let toReturn = "";

  switch (type) {
    case 0:
      toReturn = ConvertTemperature(
        inputValue,
        inputMeasurement,
        targetMeasurement
      );
      break;
    case 1:
      toReturn = ConvertVolume(inputValue, inputMeasurement, targetMeasurement);
      break;
    default:
      console.log("invalid measurement type");
  }

  return Number(toReturn).toFixed(1);
}

/**
 * Handles Temperature Conversions
 *
 * @param {number} inputValue
 * @param {number} inputMeasurement
 * @param {number} targetMeasurement
 * @returns Converted temperature value
 */
function ConvertTemperature(inputValue, inputMeasurement, targetMeasurement) {
  let toReturn = "";

  if (inputMeasurement == 0) {
    switch (targetMeasurement) {
      case 0:
        console.log("Converting Kelvin to Kelvin...");
        toReturn = inputValue;
        break;
      case 1:
        toReturn = KelvinToCelcius(inputValue);
        break;
      case 2:
        toReturn = KelvinToFahrenheit(inputValue);
        break;
      case 3:
        toReturn = KelvinToRankine(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 1) {
    switch (targetMeasurement) {
      case 0:
        toReturn = CelciusToKelvin(inputValue);
        break;
      case 1:
        console.log("Converting Celcius to Celsius...");
        toReturn = inputValue;
        break;
      case 2:
        toReturn = CelciusToFahrenheit(inputValue);
        break;
      case 3:
        toReturn = CelciusToRankine(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 2) {
    switch (targetMeasurement) {
      case 0:
        toReturn = FahrenheitToKelvin(inputValue);
        break;
      case 1:
        toReturn = FahrenheitToCelcius(inputValue);
        break;
      case 2:
        console.log("Converting Fahrenheit to Fahrenheit...");
        toReturn = inputValue;
        break;
      case 3:
        toReturn = FahrenheitToRankine(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 3) {
    switch (targetMeasurement) {
      case 0:
        toReturn = RankineToKelvin(inputValue);
        break;
      case 1:
        toReturn = RankineToCelcius(inputValue);
        break;
      case 2:
        toReturn = RankineToFahrenheit(inputValue);
        break;
      case 3:
        console.log("Converting Rankine to Rankine...");
        toReturn = inputValue;
        break;
      default:
        console.log("Unknown target measurement");
    }
  }

  return toReturn;
}

function ConvertVolume(inputValue, inputMeasurement, targetMeasurement) {
  let toReturn = "";

  if (inputMeasurement == 4) {
    switch (targetMeasurement) {
      case 4:
        console.log("Converting Liters to Liters...");
        toReturn = inputValue;
        break;
      case 5:
        toReturn = LitersToTablespoons(inputValue);
        break;
      case 6:
        toReturn = LitersToCubicInches(inputValue);
        break;
      case 7:
        toReturn = LitersToCups(inputValue);
        break;
      case 8:
        toReturn = LitersToCubicFeet(inputValue);
        break;
      case 9:
        toReturn = LitersToGallons(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 5) {
    switch (targetMeasurement) {
      case 4:
        toReturn = TablespoonsToLiters(inputValue);
        break;
      case 5:
        console.log("Converting Tablespoons to Tablespoons...");
        toReturn = inputValue;
        break;
      case 6:
        toReturn = TablespoonsToCubicInches(inputValue);
        break;
      case 7:
        toReturn = TablespoonsToCups(inputValue);
        break;
      case 8:
        toReturn = TablespoonsToCubicFeet(inputValue);
        break;
      case 9:
        toReturn = TablespoonsToGallons(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 6) {
    switch (targetMeasurement) {
      case 4:
        toReturn = CubicInchesToLiters(inputValue);
        break;
      case 5:
        toReturn = CubicInchesToTablespoons(inputValue);
        break;
      case 6:
        console.log("Converting Cubic-Inches to Cubic-Inches...");
        toReturn = inputValue;
        break;
      case 7:
        toReturn = CubicInchesToCups(inputValue);
        break;
      case 8:
        toReturn = CubicInchesToCubicFeet(inputValue);
        break;
      case 9:
        toReturn = CubicInchesToGallons(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 7) {
    switch (targetMeasurement) {
      case 4:
        toReturn = CupsToLiters(inputValue);
        break;
      case 5:
        toReturn = CupsToTablespoons(inputValue);
        break;
      case 6:
        toReturn = CupsToCubicInches(inputValue);
        break;
      case 7:
        console.log("Converting Cups to Cups...");
        toReturn = inputValue;
        break;
      case 8:
        toReturn = CupsToCubicFeet(inputValue);
        break;
      case 9:
        toReturn = CupsToGallons(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 8) {
    switch (targetMeasurement) {
      case 4:
        toReturn = CubicFeetToLiters(inputValue);
        break;
      case 5:
        toReturn = CubicFeetToTablespoons(inputValue);
        break;
      case 6:
        toReturn = CubicFeetToCubicInches(inputValue);
        break;
      case 7:
        toReturn = CubicFeetToCups(inputValue);
        break;
      case 8:
        console.log("Converting Cubic-Feet to Cubic-Feet...");
        toReturn = inputValue;
        break;
      case 9:
        toReturn = CubicFeetToGallons(inputValue);
        break;
      default:
        console.log("Unknown target measurement");
    }
  } else if (inputMeasurement == 9) {
    switch (targetMeasurement) {
      case 4:
        toReturn = GallonsToLiters(inputValue);
        break;
      case 5:
        toReturn = GallonsToTablespoons(inputValue);
        break;
      case 6:
        toReturn = GallonsToCubicInches(inputValue);
        break;
      case 7:
        toReturn = GallonsToCups(inputValue);
        break;
      case 8:
        toReturn = GallonsToCubicFeet(inputValue);
        break;
      case 9:
        console.log("Converting Gallons to Gallons...");
        toReturn = inputValue;
        break;
      default:
        console.log("Unknown target measurement");
    }
  }

  return toReturn;
}
