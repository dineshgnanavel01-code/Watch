export const loading3DSpin = {
  initial: { opacity: 0, scale: 0.5, rotateX: -60, rotateY: -60 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 1.5,
      ease,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotateX: 45,
    rotateY: 45,
    transition: { duration: 0.5, ease },
  },
};

export const loadingPulse3D = {
  animate: {
    scale: [1, 1.08, 1],
    rotateX: [0, 10, 0],
    rotateY: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};