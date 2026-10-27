/**
 * High-Performance, Silky Smooth Bidirectional Scroll Animation System
 * 
 * - once: false ensures TRUE bidirectional behavior (animates smoothly both on scroll down and scroll up).
 * - amount: 0.12 ensures prompt triggering as soon as an element enters the viewport, avoiding delayed popping.
 * - margin: "0px 0px -30px 0px" provides a natural scroll trigger threshold.
 * - Pure GPU opacity and subtle Y transforms (20-24px) with ZERO CSS filter:blur to guarantee 60/120fps fluid scrolling.
 */

export const bidirectionalViewport = {
  once: false,
  amount: 0.12,
  margin: '0px 0px -30px 0px'
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
