export const convertTemperature = (val, type) => {
  switch (type) {
    case 'celsius_to_fahrenheit':
      return val * 1.8 + 32
    case 'fahrenheit_to_celsius':
      return (val - 32) * 0.556
    case 'kelvin_to_celsius':
      return val - 273.15
    case 'celsius_to_kelvin':
      return val + 273.15
    case 'fahrenheit_to_kelvin':
      return (val - 32) * 0.556 + 273.15
    case 'kelvin_to_fahrenheit':
      return (val - 273.15) * 1.8 + 32
  }
}
