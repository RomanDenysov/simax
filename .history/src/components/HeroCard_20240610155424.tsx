import Image, { StaticImageData } from "next/image";
import React, { memo } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import AnimatedText from "./animations/AnimatedText";

type HeroCardProps = {
	img: StaticImageData | string;
	title: string;
	button: string;
	buttonHref: string;
};

const HeroCard = memo(({ img, title, button, buttonHref }: HeroCardProps) => {
	return (
		<center className="relative w-full min-h-fit h-full flex flex-col items-center justify-center">
			<div className="relative mx-auto top-0 left-0 w-full ">
				<Image
					blurDataURL="data:image/webp;base64,UklGRjgCAABXRUJQVlA4IBwAAAAwAQCdASoQAAkAAIAMJaQAA3AA/v7lpTD/AAAA="
					placeholder="blur"
					priority={true}
					fill
					src={img}
					alt={title}
					className="absolute max-h-screen w-full h-full object-cover object-center filter brightness-50"
				/>
				<div className="relative max-w-screen-xl max-h-screen size-full text-white text-center flex flex-col items-center md:items-center justify-center gap-y-10 md:gap-y-20 px-5">
					<AnimatedText text={title} />
					<Button className="w-full text-lg md:text-3xl sm:w-fit px-12  h-fit py-5 rounded-2xl">
						<Link href={buttonHref}>{button}</Link>
					</Button>
				</div>
			</div>
		</center>
	);
});

HeroCard.displayName = 'HeroCard'

export default HeroCard;
