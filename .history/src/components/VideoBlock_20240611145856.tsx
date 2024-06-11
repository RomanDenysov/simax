import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { Icons } from './Icons';

export const VideoBlock = () => {
	return (
		<div className='w-full bg-black mb-20 h-fit py-10'>
			<div className='mx-auto flex flex-col items-center justify-center'>
				<video>
					<source />
				</video>
				<p className='text-white text-center text-base lg:text-lg xl:text-xl'>
					Potrebujete vyšší štandard? Nie je problém. Projekt a cenu upravíme na mieru
					podľa Vašich požiadaviek.
				</p>
				<Link
					href={'/'}
					className={cn(
						buttonVariants({ variant: 'link' }),
						'text-2xl flex items-center justify-center gap-x-2 font-normal',
					)}
				>
					<span>Viac informácií k domčeku</span>
					<Icons.arrowcircle className='size-[55px]' />
				</Link>
			</div>
		</div>
	);
};