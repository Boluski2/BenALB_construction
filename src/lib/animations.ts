const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

export const viewportSettings = {
  once: true,
  amount: 0.15 as const,
  margin: "-40px" as const,
};
