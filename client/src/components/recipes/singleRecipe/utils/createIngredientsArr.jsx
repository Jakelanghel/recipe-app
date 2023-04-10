export const createIngredientsArr = (data) => {
  return data.ingredients.map((ingredient, i) => (
    <li className="ingredient" key={i}>
      {ingredient}
    </li>
  ));
};
