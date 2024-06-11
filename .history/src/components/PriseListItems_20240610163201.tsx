import React from 'react';

const dummyData = [
	'poradenstvo pri prípravnej fáze - povolenia, zameriavanie, príprava staveniska',
	'kompletné železobetónové základy + železobetónová základová doska (kalkulované pre štandardný typ pozemku)',
	'izolácie základov Styrodur',
	'lak asfaltový ALP-PENETRAL',
	'pás ťažký asfaltový GLAS',
	'murivo nosné YTONG 300 mm + priečky YTONG 100 mm,150 mm',
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
