export const addInstruction = (e, instructionRef) => {
  e.preventDefault();
  const instruction = instructionRef.current.value;
  if (!instruction) return;
  const list = document.querySelector(".instruction-list");
  const item = document.createElement("li");
  item.textContent = instruction;
  item.classList.add("instruction");
  list.appendChild(item);
  instructionRef.current.value = "";
};
