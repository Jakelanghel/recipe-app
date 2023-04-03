export const formatCookTime = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  const hoursString = hours > 0 ? `${hours}hr ` : "";
  const minutesString = minutes > 0 ? `${minutes}min` : "";
  return `${hoursString}${minutesString}`;
};
