export const createInstructionsArr = (data) => {
  return data.instructions.map((instruction, i) => (
    <li className="instruction" key={i}>
      {instruction}
    </li>
  ));
};
