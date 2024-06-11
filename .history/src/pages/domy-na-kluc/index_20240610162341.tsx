import HeroCard from '@/components/HeroCard';
import { ImageSlider } from '@/components/ImageSlider';
import TextBlock from '@/components/TextBlock';
import { buttonVariants } from '@/components/ui/button';
import { imageImport } from '@/lib/imageImport';
import { cn } from '@/lib/utils';
import { ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function index() {
	return (
		<section className='w-full pt-20'>
			<HeroCard
				img={imageImport('home2')}
				title='Domy
                na kľúč'
				button='Dohodnime si konzultáciu'
				buttonHref='/kontakt'
			/>
			<TextBlock
				title='Aká je cena za stavbu domu na kľúč?'
				description='Rodinné domy v obvyklom štandarde, staviame v cene už od 1200 € za m2. Jednotlivé parametre domu vám podľa vašich požiadaviek vieme prispôsobiť na mieru individuálnym požiadavkám.'
			/>
			<div className='flex flex-col items-center justify-between pb-10 gap-y-10'>
				<h2 className='text-primary text-2xl md:text-4xl'>
					NAŠI SPOKOJNÍ ZÁKAZNÍCINAŠI SPOKOJNÍ ZÁKAZNÍCI
				</h2>
				<ImageSlider />
				<span className='text-base md:text-lg text-gray-400'>
					Rodinný dom z Ytongu a na kľúč vrátane interiéru so zastavanou plochou 140 m2.
				</span>
				<Link
					href={'/'}
					className={cn(
						buttonVariants({ variant: 'link' }),
						'text-xl flex items-center justify-center gap-x-2 font-normal',
					)}
				>
					<span>Viac informácií k domčeku</span>
					<ArrowRightCircle />
				</Link>
			</div>
		</section>
	);
}
