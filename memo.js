

TransitionEffect 


import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

import { useInView, useMotionValue, useSpring } from "framer-motion";


const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });



