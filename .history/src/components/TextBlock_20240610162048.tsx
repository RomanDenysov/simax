import React from 'react';
import Paragraph from './animations/Paragraph';
import Title from './animations/Title';
import AnimatedLogo from './animations/AnimatedLogo';

type TextBlockProps = {
	title: string;
	description: string;
};

const TextBlock = ({ title, description }: TextBlockProps) => {
	return (
		<div className='max-w-screen-xl mx-auto py-20'>
			<center className='size-full flex items-center justify-between py-8 md:py-12 px-5 md:px-8'>
				<div className='flex flex-col items-start justify-center gap-y-12  max-w-[500px] text-start'>
					<Title text={title} />
					<Paragraph text={description} />
				</div>
				<AnimatedLogo />
			</center>
		</div>
	);
};

export default TextBlock;
