import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const NAV_ITEMS = [
	{ title: "Domov", href: "/", about: "Domovna stránka" },
	{ title: "Domy na kluc", href: "/domy-na-kluc", about: "Domy na kluc" },
	{ title: "O nas", href: "/o-nas", about: "O nas" },
];

type NavItemProps = {
	title: string;
	href: string;
	isActive: boolean;
	about?: string;
};

const NavItem = ({ title, href, isActive, about }: NavItemProps) => {
	return (
		<Button
			className={cn(
				"w-full hover:text-gray-950 text-base bg-transparent focus-visible:ring-offset-0 focus-visible:ring-transparent",
				isActive ? "underline text-gray-950" : "text-gray-500"
			)}
			variant={"link"}
		>
			<Link href={href} about={about}>
				{title}
			</Link>
		</Button>
	);
};

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const isMobile = useMediaQuery("(max-width: 1024px)");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onClick = (href: string) => {
		router.push(href);
		setIsOpen(false);
	};

	// if (isMobile) {
	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className="outline-none focus-visible:ring-offset-0 focus-visible:ring-transparent active:outline-none">
				<MenuIcon />
			</SheetTrigger>
			<SheetContent side="right" className="px-4">
				<nav className="flex flex-col gap-y-4 pt-6">
					{NAV_ITEMS.map((item, index) => (
						<Button
							key={index}
							variant={item.href === pathname ? "secondary" : "ghost"}
							onClick={() => onClick(item.href)}
							className="w-full text-xl sm:text-2xl justify-start"
						>
							{item.title}
						</Button>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
	// } else {
	// 	return (
	// 		<nav className="w-fit flex flex-nowrap items-center justify-center gap-x-2">
	// 			{NAV_ITEMS.map((item, index) => (
	// 				<NavItem
	// 					key={index}
	// 					title={item.title}
	// 					href={item.href}
	// 					isActive={item.href === pathname}
	// 					about={item.about}
	// 				/>
	// 			))}
	// 		</nav>
	// 	);
	// }
};

const Header = () => {
	const [headerShow, setHeaderShow] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 150) {
				setHeaderShow(false);
			} else {
				setHeaderShow(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const gradientBG = "bg-gradient-to-b from-white/50 to-transparent";

	return (
		<>
			{headerShow && (
				<header
					id="header"
					className={cn(
						`bg-background/80 backdrop-blur-md fixed z-40 w-full h-20 flex items-center justify-center transition-opacity duration-300 delay-300 ease-in-out ${
							headerShow ? "opacity-100" : "opacity-0"
						}`
					)}
				>
					<center className="w-full z-50 flex items-center justify-between max-w-screen-xl px-5">
						<Logo text />
						<div className="flex items-center gap-x-4">
							{ContactButton}
							<Navbar />
						</div>
					</center>
				</header>
			)}
		</>
	);
};

const ContactButton = (
	<Button
		className="text-base bg-transparent group text-accent-foreground border-2 border-gray-600 px-4 py-2 rounded-xl hover:bg-primary/80 hover:text-gray-100 transition hover:border-primary focus-visible:ring-offset-0 focus-visible:ring-transparent"
		variant={"ghost"}
	>
		<Link href="/kontakt" className="text-lg">
			Kontakt
		</Link>
	</Button>
);

const MenuIcon = () => {
	return (
		<svg
			width="34"
			height="16"
			viewBox="0 0 34 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect y="0" width="34" height="4" fill="black" />
			<rect y="12" width="34" height="4" fill="black" />
		</svg>
	);
};

export default Header;
