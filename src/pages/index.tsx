import HeroCard from '@/components/HeroCard';
import TextBlock from '@/components/TextBlock';
import { imageImport } from '@/lib/imageImport';

export default function Home() {
	return (
		<section className='w-full pt-20'>
			<HeroCard
				img={imageImport('home2')}
				title='Stavebná firma Simax Prešov'
				button='Dohodnime si konzultáciu'
				buttonHref='/kontakt'
			/>
			<TextBlock
				title='Dôvera, partnerstvo a kvalitné služby - kombinácia pre spoľahlivú stavebnú spoločnosť'
				description='Od roku 2007 sme v Prešove a okolí vybudovali už desiatky rodinných domčekov. Radi postavíme dom aj pre Vás.'
			/>
			<HeroCard
				img='/home2.webp'
				title='Domy na kľúč'
				button='Prečítajte si viac o domoch na kľúč'
				buttonHref='/domy-na-kluc'
			/>
			<TextBlock
				title='Aká je cena za stavbu domu na kľúč?'
				description='Rodinné domy v obvyklom štandarde, staviame v cene už od 1200 € za m2. Jednotlivé parametre domu vám podľa vašich požiadaviek vieme prispôsobiť na mieru individuálnym požiadavkám.'
			/>
			<HeroCard
				img='/home2.webp'
				title='Referenčné domčeky'
				button='Dohodnime si konzultáciu'
				buttonHref='/kontakt'
			/>
			<TextBlock
				title='Príbehy našich spokojných zákazníkov'
				description='Od roku 2007 sme  v Prešove a okolí vybudovali už desiatky rodinných domčekov. Radi postavíme dom aj pre Vás.'
			/>
		</section>
	);
}
