export const CONVERSION_OPTIONS = [
  {
    name: 'Units',
    value: 'units',
  },
  {
    name: 'Currency',
    value: 'currency',
  },
  {
    name: 'Language',
    value: 'language',
  },
]

export const UNIT_CONVERSION_TYPES = [
  {
    name: 'Length',
    value: 'length',
  },
  {
    name: 'Area',
    value: 'area',
  },
  {
    name: 'Volume',
    value: 'volume',
  },
  {
    name: 'Weight',
    value: 'weight',
  },
  {
    name: 'Time',
    value: 'time',
  },

  {
    name: 'Temperature',
    value: 'temperature',
  },
  {
    name: 'Speed',
    value: 'speed',
  },
]

export const CONVERSION_RATIO = {
  inches_to_centimeters: 2.54,
  feet_to_meters: 0.3048,
  miles_to_kilometers: 1.60934,
  yards_to_meters: 0.9144,
  millimeters_to_inches: 0.0393701,
  centimeters_to_millimeters: 10,
  meters_to_centimeters: 100,
  kilometers_to_miles: 0.621371,
  nautical_miles_to_kilometers: 1.852,

  square_feet_to_square_meters: 0.092903,
  square_meters_to_square_yards: 1.19599,
  acres_to_square_meters: 4046.86,
  square_miles_to_square_kilometers: 2.58999,
  square_inches_to_square_centimeters: 6.4516,
  hectares_to_acres: 2.47105,
  square_kilometers_to_hectares: 100,

  liters_to_milliliters: 1000,
  gallons_us_to_liters: 3.78541,
  cubic_feet_to_cubic_meters: 0.0283168,
  cubic_inches_to_cubic_centimeters: 16.3871,
  quarts_us_to_liters: 0.946353,
  milliliters_to_liters: 0.001,
  fluid_ounces_us_to_milliliters: 29.5735,
  pints_us_to_liters: 0.473176,

  pounds_to_kilograms: 0.453592,
  ounces_to_grams: 28.3495,
  tons_us_to_kilograms: 907.185,
  kilograms_to_pounds: 2.20462,
  grams_to_milligrams: 1000,
  milligrams_to_grams: 0.001,
  stones_to_kilograms: 6.35029,
  metric_tons_to_kilograms: 1000,

  seconds_to_milliseconds: 1000,
  minutes_to_seconds: 60,
  hours_to_minutes: 60,
  days_to_hours: 24,
  weeks_to_days: 7,
  months_to_days: 30.44, // Average month length
  years_to_days: 365.25, // Average year length, accounting for leap years

  celsius_to_fahrenheit: 'C × 9/5 + 32', // Formula
  fahrenheit_to_celsius: '(F - 32) × 5/9', // Formula
  kelvin_to_celsius: 'K - 273.15', // Formula
  celsius_to_kelvin: 'C + 273.15', // Formula
  fahrenheit_to_kelvin: '(F - 32) * 5/9 + 273.15',
  kelvin_to_fahrenheit: '(K - 273.15) * 9/5 + 32',

  mph_to_kph: 1.60934,
  mps_to_kph: 3.6,
  fps_to_mps: 0.3048,
}

export const UNIT_CONVERSION_GROUP = {
  length: [
    {
      name: 'Inches to Centimeters',
      value: 'inches_to_centimeters',
      from: 'Inches',
      to: 'Centimeters',
    },
    {
      name: 'Feet to Meters',
      value: 'feet_to_meters',
      from: 'Feet',
      to: 'Meters',
    },
    {
      name: 'Miles to Kilometers',
      value: 'miles_to_kilometers',
      from: 'Miles',
      to: 'Kilometers',
    },
    {
      name: 'Yards to Meters',
      value: 'yards_to_meters',
      from: 'Yards',
      to: 'Meters',
    },
    {
      name: 'Millimeters to Inches',
      value: 'millimeters_to_inches',
      from: 'Millimeters',
      to: 'Inches',
    },
    {
      name: 'Centimeters to Millimeters',
      value: 'centimeters_to_millimeters',
      from: 'Centimeters',
      to: 'Millimeters',
    },
    {
      name: 'Meters to Centimeters',
      value: 'meters_to_centimeters',
      from: 'Meters',
      to: 'Centimeters',
    },
    {
      name: 'Kilometers to Miles',
      value: 'kilometers_to_miles',
      from: 'Kilometers',
      to: 'Miles',
    },
    {
      name: 'Nautical Miles to Kilometers',
      value: 'nautical_miles_to_kilometers',
      from: 'Nautical Miles',
      to: 'Kilometers',
    },
  ],

  area: [
    {
      name: 'Square Feet to Square Meters',
      value: 'square_feet_to_square_meters',
      from: 'Square Feet',
      to: 'Square Meters',
    },
    {
      name: 'Square Meters to Square Yards',
      value: 'square_meters_to_square_yards',
      from: 'Square Meters',
      to: 'Square Yards',
    },
    {
      name: 'Acres to Square Meters',
      value: 'acres_to_square_meters',
      from: 'Acres',
      to: 'Square Meters',
    },
    {
      name: 'Square Miles to Square Kilometers',
      value: 'square_miles_to_square_kilometers',
      from: 'Square Miles',
      to: 'Square Kilometers',
    },
    {
      name: 'Square Inches to Square Centimeters',
      value: 'square_inches_to_square_centimeters',
      from: 'Square Inches',
      to: 'Square Centimeters',
    },
    {
      name: 'Hectares to Acres',
      value: 'hectares_to_acres',
      from: 'Hectares',
      to: 'Acres',
    },
    {
      name: 'Square Kilometers to Hectares',
      value: 'square_kilometers_to_hectares',
      from: 'Square Kilometers',
      to: 'Hectares',
    },
  ],

  volume: [
    {
      name: 'Liters to Milliliters',
      value: 'liters_to_milliliters',
      from: 'Liters',
      to: 'Milliliters',
    },
    {
      name: 'Gallons (US) to Liters',
      value: 'gallons_us_to_liters',
      from: 'Gallons (US)',
      to: 'Liters',
    },
    {
      name: 'Cubic Feet to Cubic Meters',
      value: 'cubic_feet_to_cubic_meters',
      from: 'Cubic Feet',
      to: 'Cubic Meters',
    },
    {
      name: 'Cubic Inches to Cubic Centimeters',
      value: 'cubic_inches_to_cubic_centimeters',
      from: 'Cubic Inches',
      to: 'Cubic Centimeters',
    },
    {
      name: 'Quarts (US) to Liters',
      value: 'quarts_us_to_liters',
      from: 'Quarts (US)',
      to: 'Liters',
    },
    {
      name: 'Milliliters to Liters',
      value: 'milliliters_to_liters',
      from: 'Milliliters',
      to: 'Liters',
    },
    {
      name: 'Fluid Ounces (US) to Milliliters',
      value: 'fluid_ounces_us_to_milliliters',
      from: 'Fluid Ounces (US)',
      to: 'Milliliters',
    },
    {
      name: 'Pints (US) to Liters',
      value: 'pints_us_to_liters',
      from: 'Pints (US)',
      to: 'Liters',
    },
  ],

  weight: [
    {
      name: 'Pounds to Kilograms',
      value: 'pounds_to_kilograms',
      from: 'Pounds',
      to: 'Kilograms',
    },
    {
      name: 'Ounces to Grams',
      value: 'ounces_to_grams',
      from: 'Ounces',
      to: 'Grams',
    },
    {
      name: 'Tons (US) to Kilograms',
      value: 'tons_us_to_kilograms',
      from: 'Tons (US)',
      to: 'Kilograms',
    },
    {
      name: 'Kilograms to Pounds',
      value: 'kilograms_to_pounds',
      from: 'Kilograms',
      to: 'Pounds',
    },
    {
      name: 'Grams to Milligrams',
      value: 'grams_to_milligrams',
      from: 'Grams',
      to: 'Milligrams',
    },
    {
      name: 'Milligrams to Grams',
      value: 'milligrams_to_grams',
      from: 'Milligrams',
      to: 'Grams',
    },
    {
      name: 'Stones to Kilograms',
      value: 'stones_to_kilograms',
      from: 'Stones',
      to: 'Kilograms',
    },
    {
      name: 'Metric Tons to Kilograms',
      value: 'metric_tons_to_kilograms',
      from: 'Metric Tons',
      to: 'Kilograms',
    },
  ],

  time: [
    {
      name: 'Seconds to Milliseconds',
      value: 'seconds_to_milliseconds',
      from: 'Seconds',
      to: 'Milliseconds',
    },
    {
      name: 'Minutes to Seconds',
      value: 'minutes_to_seconds',
      from: 'Minutes',
      to: 'Seconds',
    },
    {
      name: 'Hours to Minutes',
      value: 'hours_to_minutes',
      from: 'Hours',
      to: 'Minutes',
    },
    {
      name: 'Days to Hours',
      value: 'days_to_hours',
      from: 'Days',
      to: 'Hours',
    },
    {
      name: 'Weeks to Days',
      value: 'weeks_to_days',
      from: 'Weeks',
      to: 'Days',
    },
    {
      name: 'Months to Days',
      value: 'months_to_days',
      from: 'Months',
      to: 'Days',
    },
    {
      name: 'Years to Days',
      value: 'years_to_days',
      from: 'Years',
      to: 'Days',
    },
  ],

  temperature: [
    {
      name: 'Celsius to Fahrenheit',
      value: 'celsius_to_fahrenheit',
      from: 'Celsius',
      to: 'Fahrenheit',
    },
    {
      name: 'Fahrenheit to Celsius',
      value: 'fahrenheit_to_celsius',
      from: 'Fahrenheit',
      to: 'Celsius',
    },
    {
      name: 'Kelvin to Celsius',
      value: 'kelvin_to_celsius',
      from: 'Kelvin',
      to: 'Celsius',
    },
    {
      name: 'Celsius to Kelvin',
      value: 'celsius_to_kelvin',
      from: 'Celsius',
      to: 'Kelvin',
    },
    {
      name: 'Fahrenheit to Kelvin',
      value: 'fahrenheit_to_kelvin',
      from: 'Fahrenheit',
      to: 'Kelvin',
    },
    {
      name: 'Kelvin to Fahrenheit',
      value: 'kelvin_to_fahrenheit',
      from: 'Kelvin',
      to: 'Fahrenheit',
    },
  ],

  speed: [
    {
      name: 'Miles per Hour to Kilometers per Hour',
      value: 'mph_to_kph',
      from: 'Miles per Hour',
      to: 'Kilometers per Hour',
    },
    {
      name: 'Meters per Second to Kilometers per Hour',
      value: 'mps_to_kph',
      from: 'Meters per Second',
      to: 'Kilometers per Hour',
    },
    {
      name: 'Feet per Second to Meters per Second',
      value: 'fps_to_mps',
      from: 'Feet per Second',
      to: 'Meters per Second',
    },
  ],
}
