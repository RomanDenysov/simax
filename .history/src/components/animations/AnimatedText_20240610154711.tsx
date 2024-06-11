"use client";

import React, { ReactNode, useRef } from "react";
import {motion} from "framer-motion";
import { cn } from "@/lib/utils";

type TitleProps = {
	text: string;
};

type AnimatedTextProps = {
	delay: number;
	children: ReactNode;
};

const AnimatedByCharacters = ({ children, delay}: AnimatedTextProps) => {
	return <motion.span initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: delay, duration: 0.5 }} className="text-5xl sm:text-6xl md:text-8xl w-full font-bold">{children}</motion.span>;
};

const AnimatedText = ({ text }: TitleProps) => {
	const element = useRef<HTMLHeadingElement>(null);
	const animatedTexts = text.split(/(\s+)/);

	return (
		<motion.h1
			className={cn(`text-4xl max-w-[450px] font-bold flex items-center justify-center gap-x-1 w-full`)}
			ref={element}
		>
			{animatedTexts.map((animatedText, i) => {
				const delay = i * 0.1

				return (
					<AnimatedByCharacters key={i} delay={delay}>
						{animatedText}
					</AnimatedByCharacters>
				);
			})}
		</motion.h1>
	);
};

AnimatedText.displayName = 'AnimatedText';
AnimatedByCharacters.displayName = 'AnimatedByCharacters';

export default AnimatedText;
