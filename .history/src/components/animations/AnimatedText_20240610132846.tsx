"use client";

import React, { ReactNode, useRef } from "react";
import {
	useScroll,
	motion,
	useTransform,
	MotionValue,
	MotionStyle,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TitleProps = {
	text: string;
};

type AnimatedTextProps = {
	delay: number;
	children: ReactNode;
};

const AnimatedByCharacters = ({ children, delay}: AnimatedTextProps) => {
    const opacity: MotionValue = useTransform(progress, range, [0.01, 1]);
	return <motion.span initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: delay, duration: 0.5 }} style={{ opacity: opacity }}>{children}</motion.span>;
};

const AnimatedText = ({ text }: TitleProps) => {
	const element = useRef<HTMLHeadingElement>(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.75", "start 0.4"],
	});

	const animatedTexts = text.split("");

	return (
		<motion.h2
			className={cn(`text-4xl font-bold flex flex-wrap gap-x-1`)}
			ref={element}
		>
			{animatedTexts.map((animatedText, i) => {
				const start = i / animatedTexts.length;
				const end = (i + 1) / animatedTexts.length;

				return (
					<AnimatedByCharacters key={i} range={[start, end]} progress={scrollYProgress}>
						{animatedText}
					</AnimatedByCharacters>
				);
			})}
		</motion.h2>
	);
};

export default AnimatedText;
