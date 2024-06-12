import AnimatedList from '@/components/AnimatedList';
import HeroCard from '@/components/HeroCard';
import { Icons } from '@/components/Icons';
import { ImageSlider } from '@/components/ImageSlider';
import TextBlock from '@/components/TextBlock';
import { buttonVariants } from '@/components/ui/button';
import { imageImport } from '@/lib/imageImport';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const dummyData = [
	{
		id: 1,
		text: 'celý dom Vám vieme prispôsobiť na mieru podľa Vašich individuálnych požiadaviek',
	},
	{
		id: 2,
		text: 'zabezpečíme pre Vás vytvorenie architektonickej štúdie a projektovej dokumentácie vrátane statiky',
	},
	{
		id: 3,
		text: 'v prípade záujmu Vám vieme zabezpečiť servis ohľadne vybavenia stavebného povolenia (geodet, inžinierske siete atď.)',
	},
	{ id: 4, text: 'na rodinný dom od nás získavate štandardnú záruku' },
];
const dummyData2 = [
	{
		id: 1,
		text: 'nevyžadujeme zálohu a platby sú vykonávané priebežne počas výstavby po vopred dohodnutých etapách',
	},
	{
		id: 2,
		text: 'vybavenie výhodnej hypotéky, poradenstvo a kompletný servis v tejto oblasti Vám zabezpečíme prostredníctvom hypotekárneho makléra Pavla Chomu (jeden z TOP maklérov na Slovensku)',
	},
	{
		id: 3,
		text: 'dohodnutú cenu a termín výstavby garantujeme',
	},
	{
		id: 4,
		text: 'v prípade dodatočných zmien v projekte resp. priamo počas výstavby dohodneme cenové podmienky navýšenie alebo zníženia rozpočtu flexibilne',
	},
];

export default function Page() {
	return (
		<section>
			<HeroCard
				img={imageImport('h10')}
				title='O našej stavebnej firme Simax'
				button='Dohodnime si konzultáciu'
				buttonHref='/kontakt'
			/>
			<TextBlock
				title='Dôvera, partnerstvo a kvalitné služby - kombinácia pre spoľahlivú stavebnú spoločnosť'
				description='Pri každej realizácii vám poradíme, usmerníme, zodpovieme vaše otázky. Uvedomujeme si, že investícia do domu je na celý život a nejde „iba“ o stavbu, ale o domov, o miesto, kde budete tvoriť spomienky.'
			/>
			<div className='w-full flex flex-col items-center justify-between pb-10 gap-y-10 px-2.5 md:px-20'>
				<h3 className='text-primary text-2xl md:text-4xl'>NAŠI SPOKOJNÍ ZÁKAZNÍCI</h3>
				<ImageSlider />
				<span className='text-base text-center md:text-lg text-gray-400 font-normal'>
					Tento moderný dom bol postavený v roku 2020 a ponúka všetky moderné prvky, pre
					dnešné bývanie.
				</span>
				<Link
					href={'/'}
					className={cn(
						buttonVariants({ variant: 'link' }),
						'xl:text-2xl flex items-center justify-center gap-x-2 font-normal text-xl md:w-fit',
					)}
				>
					<span>Viac informácií k domčeku</span>
					<Icons.arrowcircledark className='size-[55px]' />
				</Link>
			</div>
			<div className='max-w-screen-xl grid lg:grid-cols-2 gap-x-10 place-items-start'>
				<AnimatedList
					data={dummyData}
					title='4 dôvody prečo spolupracovať so stavebnou firmou Simax'
				/>
				<AnimatedList
					data={dummyData2}
					title='Ako prebieha financovanie výstavby rodinného domu na kľúč'
				/>
			</div>
		</section>
	);
}
