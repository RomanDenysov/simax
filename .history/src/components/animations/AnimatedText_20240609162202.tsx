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

type WordProps = {
	range: [number, number];
	progress: MotionValue<number>;
	children: ReactNode;
};

const Word = ({ children, progress, range }: WordProps) => {
	const opacity: MotionValue = useTransform(progress, range, [0.01, 1]);
	return <motion.span style={{ opacity: opacity }}>{children}</motion.span>;
};

const Title = ({ text }: TitleProps) => {
	const element = useRef<HTMLHeadingElement>(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.75", "start 0.4"],
	});

	const words = text.split(" ");

	return (
		<motion.h2
			className={cn(`text-4xl font-bold flex flex-wrap gap-x-1`)}
			ref={element}
		>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = (i + 1) / words.length;

				return (
					<Word key={i} range={[start, end]} progress={scrollYProgress}>
						{word}
					</Word>
				);
			})}
		</motion.h2>
	);
};

export default Title;
