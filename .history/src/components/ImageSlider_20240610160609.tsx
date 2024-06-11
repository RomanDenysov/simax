import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const imageArray = [
	{ key: "h1", src: require("../../public/h1.webp") },
	{ key: "h2", src: require("../../public/h2.webp") },
	{ key: "h3", src: require("../../public/h3.webp") },
	{ key: "h4", src: require("../../public/h4.webp") },
	{ key: "h5", src: require("../../public/h5.webp") },
	{ key: "h6", src: require("../../public/h6.webp") },
	{ key: "h7", src: require("../../public/h7.webp") },
	{ key: "h8", src: require("../../public/h8.webp") },
	{ key: "h9", src: require("../../public/h9.webp") },
	{ key: "h10", src: require("../../public/h10.webp") },
	{ key: "h11", src: require("../../public/h11.webp") },
];

export function ImageSlider() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	return (
		<center className="w-full mx-auto pb-20">
			<Carousel
				plugins={[plugin.current]}
				className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{imageArray.map((image, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex relative aspect-square items-center rounded-lg justify-center p-6">
										<Image
											src={image.src}
											alt={`Image ${index + 1}`}
											fill
											className="rounded-lg object-center object-cover"
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</center>
	);
}
