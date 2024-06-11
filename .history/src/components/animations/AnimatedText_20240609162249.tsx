"use client";

import React, { CSSProperties, ReactNode, useEffect, useRef } from "react";
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
	range: [number, number];
	progress: MotionValue<number>;
	children: ReactNode;
};

const AnimatedByLetter = ({ children, progress, range }: AnimatedTextProps) => {
	const opacity: MotionValue = useTransform(progress, range, [0.01, 1]);
	return <motion.span style={{ opacity: opacity }}>{children}</motion.span>;
};

const Title = ({ text }: TitleProps) => {
	const element = useRef<HTMLHeadingElement>(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.75", "start 0.4"],
	});

	const animatedTexts = text.split(" ");

	return (
		<motion.h2
			className={cn(`text-4xl font-bold flex flex-wrap gap-x-1`)}
			ref={element}
		>
			{animatedTexts.map((animatedText, i) => {
				const start = i / animatedTexts.length;
				const end = (i + 1) / animatedTexts.length;

				return (
					<AnimatedText key={i} range={[start, end]} progress={scrollYProgress}>
						{animatedText}
					</AnimatedText>
				);
			})}
		</motion.h2>
	);
};

export default Title;
