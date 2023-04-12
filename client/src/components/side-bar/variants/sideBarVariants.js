export const sideBarVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  closed: {
    opacity: 1,
    x: -100,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};
