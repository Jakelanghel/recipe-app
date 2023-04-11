export const getTotalMins = (cookTimeRefHr, cookTimeRefMin) => {
  const hrValue = cookTimeRefHr.current.value;
  const minValue = cookTimeRefMin.current.value;

  const hrs = hrValue !== "" ? parseInt(cookTimeRefHr.current.value) : 0;
  const mins = minValue !== "" ? parseInt(cookTimeRefMin.current.value) : 0;

  return hrs * 60 + mins;
};
