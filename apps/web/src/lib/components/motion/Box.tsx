import type { HTMLChakraProps } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import type { Merge } from "@web/lib/types/merge";

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);

export default MotionBox;
