import React, { PropsWithChildren, useRef } from 'react';
import { Icons } from './Icons';
import { motion, useAnimation, useInView } from 'framer-motion';

type PriseListItemsProps = {
	data: { id: number; text: string | React.JSX.Element }[];
	title?: string;
};

type AnimatedWordsProps = {
	isVisible: boolean;
	delay: number;
} & PropsWithChildren;

const AnimatedWords = ({ children, isVisible, delay }: AnimatedWordsProps) => {
	const controls = useAnimation();

	if (isVisible) {
		controls.start({
			opacity: 1,
			transition: { delay: delay, duration: 0.5 },
		});
	}
	return (
		<motion.li
			initial={{ opacity: 0 }}
			animate={controls}
			className='flex items-center justify-start gap-x-4 size-fit'
		>
			{children}
		</motion.li>
	);
};

const AnimatedList = ({ data, title }: PriseListItemsProps) => {
	const element = useRef<HTMLDivElement>(null);
	const isVisible = useInView(element, { once: true });

	return (
		<div className='size-full pt-10 pb-20 px-5 md:px-20 mx-auto flex items-center justify-center'>
			<div
				ref={element}
				className='w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-y-10'
			>
				{title && (
					<h2 className='text-3xl md:text-4xl md:text-center w-full font-bold tracking-tight'>
						{title}
					</h2>
				)}
				<ul className='grid grid-cols-1 lg:px-6 gap-2.5 '>
					{data.map(({ id, text }) => {
						const delay = id * 0.1;

						return (
							<AnimatedWords key={`item-${id}`} delay={delay} isVisible={isVisible}>
								<Icons.achive className='size-[55px] min-h-[55px] min-w-[55px] self-start' />
								<span className='text-base md:text-lg xl:text-xl font-medium'>
									{text}
								</span>
							</AnimatedWords>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default AnimatedList;
