import React from 'react';
import { Icons } from './Icons';
import { motion } from 'framer-motion';

type PriseListItemsProps = {
	data: { id: number; text: string }[];
	title?: string;
	accent?: string;
};

const PriseListItems = ({ data, title, accent }: PriseListItemsProps) => {
	return (
		<div className='size-full pt-10 pb-20 px-5 md:px-20 mx-auto flex items-center justify-center'>
			<div className='w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-y-10'>
				{title && accent && (
					<h2 className='text-3xl md:text-5xl md:text-center w-full font-bold tracking-tight'>
						{title} <span className='text-primary'></span>
					</h2>
				)}
				<ul className='grid lg:grid-cols-2  lg:px-6 gap-2 '>
					{data.map(({ id, text }) => (
						<motion.li
							key={`item-${id}`}
							className='flex items-center justify-start gap-x-4 size-fit'
						>
							<Icons.achive className='size-[55px] min-h-[55px] min-w-[55px] self-start' />
							<span className='text-base md:text-lg xl:text-xl font-medium'>{text}</span>
						</motion.li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PriseListItems;
