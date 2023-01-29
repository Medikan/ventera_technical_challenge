/**
 * Converts Kelvin to Celsius
 *
 * TODO: input validation/error checking
 * @param {number} k Temperature value in Kelvin
 * @returns Temperature value in Celisus
 */
export function KelvinToCelcius(k) {
  return k - 273.15;
}

/**
 * Converts Kelvin to Fahrenheit
 *
 * @param {number} k Temperature value in Kelvin
 * @returns Temperature value in Fahrenheit
 */
export function KelvinToFahrenheit(k) {
  return CelciusToFahrenheit(KelvinToCelcius(k));
}

/**
 * Converts Kelvin to Rankine
 *
 * @param {number} k Temperature value in Kelvin
 * @returns Temperature value in Fahrenheit
 */
export function KelvinToRankine(k) {
  return FahrenheitToRankine(KelvinToFahrenheit(k));
}

/**
 * Converts Celsius to Kelvin
 *
 * @param {number} c
 * @returns Temperature value in Celsius
 */
export function CelciusToKelvin(c) {
  return c + 273.15;
}

/**
 * Converts Celsius to Fahrenheit
 *
 * TODO: input validation/error checking
 * @param {number} c Temperature value in Celcius
 * @returns Temperature value in Fahrenheit
 */
export function CelciusToFahrenheit(c) {
  return c * 1.8 + 32;
}

/**
 * Converts Celsius to Rankine
 *
 * @param {number} c Temperature value in Celcius
 * @returns Temperature value in Rankine
 */
export function CelciusToRankine(c) {
  return FahrenheitToRankine(CelciusToFahrenheit(c));
}

/**
 * Converts Fahrenheit to Celsius
 *
 * @param {number} f Temperature value in Fahrenheit
 * @returns Temperature value in Celsius
 */
export function FahrenheitToCelcius(f) {
  return (f - 32) / 1.8;
}

/**
 * Converts Fahrenheit to Kelvin
 *
 * @param {number} f Temperature value in Fahrenheit
 * @returns Temperature value in Kelvin
 */
export function FahrenheitToKelvin(f) {
  return CelciusToKelvin(FahrenheitToCelcius(f));
}

/**
 * Converts Fahrenheit to Rankine
 *
 * @param {number} f Temperature value in Fahrenheit
 * @returns Temperature value in Kelvin
 */
export function FahrenheitToRankine(f) {
  return f + 459.67;
}

/**
 * Converts Rankine to Fahrenheit
 *
 * @param {number} r Temperature value in Rankine
 * @returns Temperature value in Fahrenheit
 */
export function RankineToFahrenheit(r) {
  return r - 459.67;
}

/**
 * Converts Rankine to Celcius
 *
 * @param {number} r Temperature value in Rankine
 * @returns Temperature value in Celcius
 */
export function RankineToCelcius(r) {
  return FahrenheitToCelcius(RankineToFahrenheit(r));
}

/**
 * Converts Rankine to Kelvin
 *
 * @param {number} r Temperature value in Rankine
 * @returns Temperature value in Kelvin
 */
export function RankineToKelvin(r) {
  return FahrenheitToKelvin(RankineToFahrenheit(r));
}
