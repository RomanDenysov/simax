import React from 'react';

const dummyData = [
	'poradenstvo pri prípravnej fáze - povolenia, zameriavanie, príprava staveniska',
	'kompletné železobetónové základy + železobetónová základová doska (kalkulované pre štandardný typ pozemku)',
	'izolácie základov Styrodur',
	'lak asfaltový ALP-PENETRAL',
	'pás ťažký asfaltový GLAS',
	'murivo nosné YTONG 300 mm + priečky YTONG 100 mm,150 mm',
	'železobetónový veniec',
	'krov + laty a kontralaty + protihnilobný náter',
	'krytina Terran alebo Bramac',
	'žľaby farebné',
	'kompletné vnútorné elektroinštalácie',
	'vnútorná kanalizácia + vodovod',
	'plastové dvere a okná – 6 komorové – trojsklo Hesta',
	'obvodový zateplovací systém polystyrén hr. 150 mm',
	'omietky vnútorné',
	'omietky vonkajšie silikátové BAUMIT hr. 1,5 mm + mozaikové',
	'striekaná izolácia stropu 300 mm',
	'podhľady vnútorné – sádrokartón',
	'izolácie podláh – podlahový polystyrén 10 cm',
	'hygienický náter interiérových stien a stropov aplikovaný 2x',
	'pokládka podlahy',
	'keramické podlahy vnútorné',
	'keramické obklady do kúpeľne a WC',
	'zariaďovacie predmety (WC, umývadlá, vaňa alebo sprchovací kút, batérie)',
	'interiérové dvere – dýha štandard + obložkové zárubne',
	'doprava a presun hmôt + prenájom techniky',
	'podklady ku kolaudácií – revízne správy, záručné listy, certifikáty, atď.',
];

const PriseListItems = () => {
	return (
		<div className='size-full py-10 px-5 md:px-20 '>
			<div className='w-full mx-auto flex flex-col items-center justify-center text-center'>
				<ul>
					<h2 className='text-3xl md:text-5xl w-full font-bold tracking-tight'>
						V cene výstavby rodinného domu na kľúč{' '}
						<span className='text-primary'>sú zahrnuté</span>
					</h2>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default PriseListItems;
