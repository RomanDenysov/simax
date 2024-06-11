'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type TitleProps = {
	text: string;
};

type AnimatedTextProps = {
	delay: number;
	children: ReactNode;
	isVisible: boolean;
};

const AnimatedByCharacters = ({ children, delay, isVisible }: AnimatedTextProps) => {
	const controls = useAnimation();

	if (isVisible) {
		controls.start({
			opacity: 1,
			transition: { delay: delay, duration: 0.5 },
		});
	}

	return (
		<motion.span
			initial={{ opacity: 0 }}
			animate={controls}
			className='text-5xl sm:text-7xl md:text-8xl font-bold'
		>
			{children}
		</motion.span>
	);
};

const AnimatedText = ({ text }: TitleProps) => {
	const element = useRef<HTMLHeadingElement>(null);
	const isInView = useInView(element, { once: true });
	const animatedTexts = text.split(/(\s+)/);

	return (
		<motion.h1
			className={cn(
				`max-w-full font-bold flex flex-wrap items-center justify-center gap-x-1 md:gap-x-2 w-full`,
			)}
			ref={element}
		>
			{animatedTexts.map((animatedText, i) => {
				const delay = i * 0.25;

				return (
					<AnimatedByCharacters key={i} delay={delay} isVisible={isInView}>
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
