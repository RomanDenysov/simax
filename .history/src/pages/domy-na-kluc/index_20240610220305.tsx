import HeroCard from '@/components/HeroCard';
import { Icons } from '@/components/Icons';
import { ImageSlider } from '@/components/ImageSlider';
import PriseListItems from '@/components/PriseListItems';
import TextBlock from '@/components/TextBlock';
import { buttonVariants } from '@/components/ui/button';
import { imageImport } from '@/lib/imageImport';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const dummyData = [
	{
		id: 1,
		text: 'poradenstvo pri prípravnej fáze - povolenia, zameriavanie, príprava staveniska',
	},
	{
		id: 2,
		text: 'kompletné železobetónové základy + železobetónová základová doska (kalkulované pre štandardný typ pozemku)',
	},
	{ id: 3, text: 'izolácie základov Styrodur' },
	{ id: 4, text: 'lak asfaltový ALP-PENETRAL' },
	{ id: 5, text: 'pás ťažký asfaltový GLAS' },
	{ id: 6, text: 'murivo nosné YTONG 300 mm + priečky YTONG 100 mm,150 mm' },
	{ id: 7, text: 'železobetónový veniec' },
	{ id: 8, text: 'krov + laty a kontralaty + protihnilobný náter' },
	{ id: 9, text: 'krytina Terran alebo Bramac' },
	{ id: 10, text: 'žľaby farebné' },
	{ id: 11, text: 'kompletné vnútorné elektroinštalácie' },
	{ id: 12, text: 'vnútorná kanalizácia + vodovod' },
	{ id: 13, text: 'plastové dvere a okná – 6 komorové – trojsklo Hesta' },
	{ id: 14, text: 'obvodový zateplovací systém polystyrén hr. 150 mm' },
	{ id: 15, text: 'omietky vnútorné' },
	{ id: 16, text: 'omietky vonkajšie silikátové BAUMIT hr. 1,5 mm + mozaikové' },
	{ id: 17, text: 'striekaná izolácia stropu 300 mm' },
	{ id: 18, text: 'podhľady vnútorné – sádrokartón' },
	{ id: 19, text: 'izolácie podláh – podlahový polystyrén 10 cm' },
	{ id: 20, text: 'hygienický náter interiérových stien a stropov aplikovaný 2x' },
	{ id: 21, text: 'pokládka podlahy' },
	{ id: 22, text: 'keramické podlahy vnútorné' },
	{ id: 23, text: 'keramické obklady do kúpeľne a WC' },
	{
		id: 24,
		text: 'zariaďovacie predmety (WC, umývadlá, vaňa alebo sprchovací kút, batérie)',
	},
	{ id: 25, text: 'interiérové dvere – dýha štandard + obložkové zárubne' },
	{ id: 26, text: 'doprava a presun hmôt + prenájom techniky' },
	{
		id: 27,
		text: 'podklady ku kolaudácií – revízne správy, záručné listy, certifikáty, atď.',
	},
];
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
			<div className='w-full flex flex-col items-center justify-between pb-10 gap-y-10'>
				<h3 className='text-primary text-2xl md:text-4xl'>
					NAŠI SPOKOJNÍ ZÁKAZNÍCINAŠI SPOKOJNÍ ZÁKAZNÍCI
				</h3>
				<ImageSlider />
				<span className='text-base md:text-lg text-gray-400 font-normal'>
					Rodinný dom z Ytongu a na kľúč vrátane interiéru so zastavanou plochou 140 m2.
				</span>
				<Link
					href={'/'}
					className={cn(
						buttonVariants({ variant: 'link' }),
						'text-2xl flex items-center justify-center gap-x-2 font-normal',
					)}
				>
					<span>Viac informácií k domčeku</span>
					<Icons.arrowcircledark className='size-[55px]' />
				</Link>
			</div>

			<PriseListItems data={dummyData} title='' accent='' />
		</section>
	);
}
