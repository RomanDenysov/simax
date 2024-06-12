import AnimatedList from '@/components/AnimatedList';
import HeroCard from '@/components/HeroCard';
import { Icons } from '@/components/Icons';
import { buttonVariants } from '@/components/ui/button';
import { imageImport } from '@/lib/imageImport';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const dummyData = [
	{
		id: 1,
		text: (
			<span>
				<b>Zatelefonujte</b> prosím konateľovi spoločnosti Simax - Petrovi Širotovi na{' '}
				<a className='text-primary hover:underline' href='tel:+421915958193'>
					0915 958 193
				</a>
			</span>
		),
	},
	{
		id: 2,
		text: (
			<span>
				<b>Napíšte nám</b> email na{' '}
				<a className='text-primary hover:underline' href='mailto:simax@simax.sk'>
					simax@simax.sk
				</a>
				, odpovieme Vám čo najskôr
			</span>
		),
	},
	{
		id: 3,
		text: (
			<span>
				Nezabudnite nás <b>sledovať</b> na sociálnych sieťach{' '}
				<a className='text-primary hover:underline' href='#'>
					Facebook
				</a>{' '}
				a{' '}
				<a className='text-primary hover:underline' href='#'>
					Instagram
				</a>
			</span>
		),
	},
	{
		id: 4,
		text: (
			<span>
				Ak chcete na svoj <b>email</b> dostávať aktuálne informácie a špeciálne ponuky v
				súvislosti s rodinnými domami, ktoré staviame,{' '}
				<a className='text-primary hover:underline' href='#'>
					prihláste sa do nášho newslettra.
				</a>
			</span>
		),
	},
];

export default function Page() {
	return (
		<section className='mx-auto'>
			<HeroCard
				img={imageImport('home2')}
				title='Domy
                na kľúč'
				button='Dohodnime si konzultáciu'
				buttonHref='/kontakt'
			/>
			<div className='mx-auto w-full py-10'>
				<AnimatedList
					title='Ak plánujete postaviť rodinný dom neváhajte nás kontaktovať a dohodnime si konzultáciu'
					data={dummyData}
				/>
			</div>
			<div className='w-full flex flex-col items-center justify-between pb-10 gap-y-10 px-2.5 md:px-20'>
				<h3 className='text-primary text-2xl md:text-4xl'>ADRESA KANCELÁRIE</h3>
				<Image src={imageImport('address')} width={1280} height={720} alt='address' />
				<span className='text-base text-center md:text-lg text-gray-400 font-normal'>
					Telefonicky si dohodnime stretnutie v našej kancelárii v Prešove na ulici
					Konštantínová 6.
				</span>
				<Link
					href={'tel:+421915958193'}
					className={cn(
						buttonVariants({ variant: 'link' }),
						'xl:text-2xl flex items-center justify-center gap-x-2 font-normal text-xl md:w-fit',
					)}
				>
					<span>Telefonicky si dohodnúť stretnutie</span>
					<Icons.arrowcircledark className='size-[55px]' />
				</Link>
			</div>
			<div className='max-w-screen-xl grid md:grid-cols-2 gap-10 justify-center place-items-start justify-items-start md:justify-items-center mx-auto pt-10 pb-20'>
				<div className='flex flex-col items-start justify-start gap-y-8'>
					<h3 className='text-2xl lg:text-3xl font-bold tracking-tight'>
						Korešpondenčná adresa
					</h3>
					<ul className='flex flex-col items-start justify-center gap-y-1 text-xl font-medium'>
						<li>SIMAX PO, s.r.o.</li>
						<li>Budovateľská 63</li>
						<li>080 01 Prešov</li>
					</ul>
				</div>
				<div className='flex flex-col items-start justify-start gap-y-8 size-full'>
					<h3 className='text-2xl lg:text-3xl font-bold tracking-tight'>
						Fakturačné údaje
					</h3>
					<ul className='flex flex-col items-start justify-center gap-y-1 text-xl font-medium'>
						<li>SIMASI group, s.r.o.</li>
						<li>Budovateľská 63 080 01 Prešov</li>
						<li>IČO: 50918389</li>
						<li>DIČ: 2120539355</li>
						<li>IČ DPH: SK2120539355</li>
						<li>Zapísaná na Prešov, odd. Sro, vl.č.34812/P</li>
					</ul>
					<ul className='flex flex-col items-start justify-center gap-y-1 text-xl font-medium'>
						<li>SIMAX PO, s.r.o.</li>
						<li>Budovateľská 63 080 01 Prešov</li>
						<li>IČO: 50596993</li>
						<li>DIČ: 2120396894</li>
						<li>IČ DPH: SK2120396894</li>
						<li>Zapísaná na Prešov, odd. Sro, vl.č.33698/P</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
