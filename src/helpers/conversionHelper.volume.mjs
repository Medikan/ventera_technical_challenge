// Kinda got lazy here and didn't want to comment 30 1-line functions
// Most of these conversions were taken from Google

export function LitersToTablespoons(l) {
  return l * 67.628;
}

export function LitersToCubicInches(l) {
  return l * 61.0237;
}

export function LitersToCups(l) {
  return l * 4.22675;
}

export function LitersToCubicFeet(l) {
  return l * 0.0353147;
}

export function LitersToGallons(l) {
  return l * 0.264172;
}

export function TablespoonsToLiters(t) {
  return t / 67.628;
}

export function TablespoonsToCubicInches(t) {
  return LitersToCubicInches(TablespoonsToLiters(t));
}

export function TablespoonsToCups(t) {
  return LitersToCups(TablespoonsToLiters(t));
}

export function TablespoonsToCubicFeet(t) {
  return LitersToCubicFeet(TablespoonsToLiters(t));
}

export function TablespoonsToGallons(t) {
  return LitersToGallons(TablespoonsToLiters(t));
}

export function CubicInchesToLiters(ci) {
  return ci / 61.0237;
}

export function CubicInchesToTablespoons(ci) {
  return LitersToTablespoons(CubicInchesToLiters(ci));
}

export function CubicInchesToCups(ci) {
  return LitersToCups(CubicFeetToLiters(ci));
}

export function CubicInchesToCubicFeet(ci) {
  return LitersToCubicFeet(CubicInchesToLiters(ci));
}

export function CubicInchesToGallons(ci) {
  return LitersToGallons(CubicInchesToLiters(ci));
}

export function CupsToLiters(c) {
  return c / 4.22675;
}

export function CupsToTablespoons(c) {
  return LitersToTablespoons(CupsToLiters(c));
}

export function CupsToCubicInches(c) {
  return LitersToCubicInches(CupsToLiters(c));
}

export function CupsToCubicFeet(c) {
  return LitersToCubicFeet(CupsToLiters(c));
}

export function CupsToGallons(c) {
  return LitersToGallons(CupsToLiters(c));
}

export function CubicFeetToLiters(cf) {
  return cf / 0.0353147;
}

export function CubicFeetToTablespoons(cf) {
  return LitersToTablespoons(CubicFeetToLiters(cf));
}

export function CubicFeetToCubicInches(cf) {
  return LitersToCubicInches(CubicFeetToLiters(cf));
}

export function CubicFeetToCups(cf) {
  return LitersToCups(CubicFeetToLiters(cf));
}

export function CubicFeetToGallons(cf) {
  return LitersToGallons(CubicFeetToLiters(cf));
}

export function GallonsToLiters(g) {
  return g / 0.264172;
}

export function GallonsToTablespoons(g) {
  return LitersToTablespoons(GallonsToLiters(g));
}

export function GallonsToCubicInches(g) {
  return LitersToCubicInches(GallonsToLiters(g));
}

export function GallonsToCups(g) {
  return LitersToCups(GallonsToLiters(g));
}

export function GallonsToCubicFeet(g) {
  return LitersToCubicFeet(GallonsToLiters(g));
}
