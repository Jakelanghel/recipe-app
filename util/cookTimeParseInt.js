function cookTimeParseInt(cookTime) {
  // Split the cook time string into hours and minutes
  const [hoursString, minutesString] = cookTime.split(/hr|min/);

  // Parse the hours and minutes into numbers
  const hours = parseInt(hoursString, 10) || 0;
  const minutes = parseInt(minutesString, 10) || 0;

  // Calculate the total cook time in minutes
  return hours * 60 + minutes;
}

module.exports = { cookTimeParseInt };
