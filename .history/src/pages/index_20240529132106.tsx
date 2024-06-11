import HeroCard from "@/components/Hero";
import TextBlock from "@/components/TextBlock";
import { imageImport } from "@/lib/imageImport";

export default function Home() {
	return (
		<section className="w-full pt-20">
			<HeroCard
				img={imageImport("home2")}
				title="Stavebná firma Simax Prešov"
				button="Dohodnime si konzultáciu"
				buttonHref="/kontakt"
			/>
			<TextBlock
				title="Dôvera, partnerstvo a kvalitné služby - kombinácia pre spoľahlivú stavebnú spoločnosť"
				description="Od roku 2007 sme v Prešove a okolí vybudovali už desiatky rodinných domčekov. Radi postavíme dom aj pre Vás."
			/>
			<HeroCard
				img="/home2.webp"
				title="Stavebná firma Simax Prešov"
				button="Dohodnime si konzultáciu"
				buttonHref="/kontakt"
			/>
			<TextBlock
				title="Dôvera, partnerstvo a kvalitné služby - kombinácia pre spoľahlivú stavebnú spoločnosť"
				description="Od roku 2007 sme v Prešove a okolí vybudovali už desiatky rodinných domčekov. Radi postavíme dom aj pre Vás."
			/>
		</section>
	);
}
