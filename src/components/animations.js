// Premium motion presets for the LUXE watch experience.

const ease = [0.22, 1, 0.36, 1];

export const pageReveal = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
  exit: { opacity: 0, y: -18, filter: "blur(4px)", transition: { duration: 0.35, ease } },
};

export const reveal = {
  hidden: { opacity: 0, y: 45, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const luxuryStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

export const tilt3D = {
  rest: { rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, z: 0 },
  hover: { rotateX: 8, rotateY: -10, rotateZ: 1, scale: 1.04, z: 40, transition: { duration: 0.5, ease } },
};

export const watch3D = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { rotateX: 5, rotateY: -8, scale: 1.05, transition: { duration: 0.6, ease: "easeOut" } },
};

export const product3DHover = {
  rest: { rotateX: 0, rotateY: 0, scale: 1, z: 0 },
  hover: { rotateX: 7, rotateY: -7, scale: 1.035, z: 30, transition: { duration: 0.45, ease } },
  tap: { scale: 0.98 },
};

export const image3DHover = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: { scale: 1.08, rotateX: 3, rotateY: -5, transition: { duration: 0.7, ease } },
};

export const flip3D = {
  hidden: { opacity: 0, rotateY: -90, transformPerspective: 1200 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.9, ease } },
};

export const rotate3DIn = {
  hidden: { opacity: 0, scale: 0.7, rotateX: 35, rotateY: -35, y: 60 },
  visible: { opacity: 1, scale: 1, rotateX: 0, rotateY: 0, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export const floor3DReveal = {
  hidden: { opacity: 0, y: 100, rotateX: 45, scale: 0.8 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 1, ease } },
};

export const floating3DWatch = {
  animate: {
    y: [0, -18, 0],
    rotateX: [0, 4, 0],
    rotateY: [0, -6, 0],
    rotateZ: [0, 1, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const orbit3D = {
  animate: { rotateY: [0, 360], transition: { duration: 12, repeat: Infinity, ease: "linear" } },
};

export const slow3DRotate = {
  animate: {
    rotateX: [0, 3, -3, 0],
    rotateY: [0, 6, -6, 0],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
};

export const badge3D = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { rotateX: -8, rotateY: 12, scale: 1.08, transition: { duration: 0.4, ease } },
};

export const button3D = {
  rest: { scale: 1, rotateX: 0, y: 0 },
  hover: { scale: 1.05, rotateX: -6, y: -3, transition: { duration: 0.3, ease: "easeOut" } },
  tap: { scale: 0.94, y: 1, rotateX: 0 },
};

export const magneticButton = {
  rest: { x: 0, y: 0, scale: 1 },
  hover: { x: 2, y: -3, scale: 1.025, transition: { duration: 0.25, ease } },
  tap: { scale: 0.97, transition: { duration: 0.12 } },
};

export const shimmer = {
  initial: { x: "-120%" },
  animate: { x: "120%", transition: { duration: 1.4, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" } },
};

export const carousel3D = {
  center: { scale: 1, opacity: 1, rotateY: 0, zIndex: 10 },
  left: { scale: 0.85, opacity: 0.5, rotateY: 35, x: -100, zIndex: 5 },
  right: { scale: 0.85, opacity: 0.5, rotateY: -35, x: 100, zIndex: 5 },
<<<<<<< HEAD
};
=======
};
>>>>>>> c8fb02bf5ee59c6c30d898dbfe4f1b0790897510
