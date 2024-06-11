import React from 'react';
import { Icons } from './Icons';

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

const PriseListItems = () => {
	return (
		<div className='size-full pt-10 pb-20 px-5 md:px-20 mx-auto flex items-center justify-center'>
			<div className='w-full mx-auto flex flex-col items-center justify-center gap-y-10 border-2 rounded-xl px-4 py-5'>
				<h2 className='text-3xl md:text-5xl md:text-center w-full font-bold tracking-tight'>
					V cene výstavby rodinného domu na kľúč{' '}
					<span className='text-primary'>sú zahrnuté</span>
				</h2>
				<ul className='grid lg:grid-cols-2 lg:px-6 gap-2 '>
					{dummyData.map(({ id, text }) => (
						<li
							key={`item-${id}`}
							className='flex items-center justify-start gap-x-4 size-fit'
						>
							<Icons.achive className='size-[55px] min-h-[55px] min-w-[55px] self-start' />
							<span className='text-base md:text-lg xl:text-xl font-medium'>{text}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PriseListItems;
