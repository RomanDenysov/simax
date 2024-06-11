"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import {
	useScroll,
	motion,
	MotionValue,
	useTransform,
	MotionStyle,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ParagraphProps = {
	text: string;
};

type WordProps = {
	range: [number, number];
	progress: MotionValue<number>;
	children: ReactNode;
};

const Word = ({ children, progress, range }: WordProps) => {
	const opacity: MotionValue<number> = useTransform(progress, range, [0.1, 1]);

	return <motion.span style={{ opacity }}>{children}</motion.span>;
};

const Paragraph = ({ text }: ParagraphProps) => {
	const element = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.75", "start 0.5"],
	});

	const words = text.split(" ");
	const wordsCount = words.length;

	return (
		<motion.p
			className={cn(`text-lg md:text-xl font-normal flex flex-wrap gap-x-1`)}
			ref={element}
		>
			{words.map((word, i) => {
				const start = i / wordsCount;
				const end = (i + 1) / wordsCount;

				return (
					<Word progress={scrollYProgress} range={[start, end]} key={i}>
						{word}
					</Word>
				);
			})}
		</motion.p>
	);
};

export default Paragraph;
