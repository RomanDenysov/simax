import HeroCard from '@/components/HeroCard';
import { ImageSlider } from '@/components/ImageSlider';
import TextBlock from '@/components/TextBlock';
import { imageImport } from '@/lib/imageImport';
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
			<div>
				<h2>NAŠI SPOKOJNÍ ZÁKAZNÍCINAŠI SPOKOJNÍ ZÁKAZNÍCI</h2>
				<ImageSlider />
			</div>
		</section>
	);
}
