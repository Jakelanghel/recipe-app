const getSortCriteria = (sortParam) => {
  let sortCriteria = null;
  switch (sortParam) {
    case "favorites":
      sortCriteria = { favorite: -1 };
      break;
    case "cook time":
      sortCriteria = { cookTime: 1 };
      break;
    case "category":
      sortCriteria = { category: 1 };
      break;
    default:
      break;
  }
  return sortCriteria;
};

module.exports = { getSortCriteria };
