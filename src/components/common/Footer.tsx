import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import INSTAGRAM from "@/assets/instagram 1.svg";
import FACEBOOK from "@/assets/facebook 1.svg";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-black text-white py-12 px-20 flex flex-col items-center justify-between gap-y-12'>
			<center className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-16 place-content-start mx-auto place-item-start sm:place-items-center sm:items-start items-center justify-center'>
				<div className='sm:col-span-2 lg:col-span-3 self-center place-self-center flex  flex-col items-center justify-center gap-y-8'>
					<Logo />
					<Button
						className='text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-fit bg-transparent group text-gray-200 border-2 border-primary  rounded-xl hover:bg-primary hover:border-primary focus-visible:ring-offset-0 focus-visible:ring-transparent'
						variant='secondary'
					>
						Dohodnime si konzultáciu ešte dnes
					</Button>
					<div className='flex flex-col items-center justify-center gap-y-2'>
						<Link
							className='text-primary text-base md:text-lg hover:underline'
							href='mailto:info@simax.sk'
						>
							info@simax.sk
						</Link>
						<Link
							className='text-primary text-base md:text-lg hover:underline'
							href='tel:+421915958193'
						>
							0915 958 193
						</Link>
					</div>
				</div>
				<div className='flex flex-col items-start justify-center gap-y-2'>
					<h3 className='font-bold mb-2 text-lg'>Poďme postaviť Váš dom</h3>
					<Link
						className='underline text-start text-base md:text-lg text-gray-400 hover:text-gray-100'
						href='/o-nas'
					>
						Špecifikácia a ceny domov na kľúč
					</Link>
					<Link
						className='underline text-base md:text-lg text-gray-400 hover:text-gray-100'
						href='/kontakt'
					>
						Referenčné projekty
					</Link>
					<Link
						className='underline text-base md:text-lg text-gray-400 hover:text-gray-100'
						href='/referencie'
					>
						O firme Simax
					</Link>
					<Link
						className='underline text-base md:text-lg text-gray-400 hover:text-gray-100'
						href='/referencie'
					>
						Kontakt
					</Link>
				</div>
				<div className='flex flex-col items-start justify-center gap-y-2'>
					<h3 className='font-bold mb-2 text-lg'>Právne informácie</h3>
					<Link
						className='underline text-start text-base md:text-lg text-gray-400 hover:text-gray-100'
						href='/ochrana-osobnych-udajov'
					>
						Ochrana osobných údajov
					</Link>
					<Link
						className='underline text-start text-base md:text-lg text-gray-400 hover:text-gray-100'
						href='/fakturacne-udaje'
					>
						Fakturačné údaje
					</Link>
				</div>
				<div className='flex flex-col items-start justify-center gap-y-4'>
					<h3 className='font-bold mb-2 text-lg'>Zostaňme v spojení</h3>
					<Link
						className='flex items-center text-base md:text-lg justify-center gap-x-2 underline text-primary hover:text-gray-100'
						href='/facebook'
					>
						<Image src={FACEBOOK} alt='Facebook' />
						<span>Facebook</span>
					</Link>
					<Link
						className='flex items-center text-base md:text-lg justify-center gap-x-2 underline text-primary hover:text-gray-100'
						href='/instagram'
					>
						<Image src={INSTAGRAM} alt='Instagram' />
						<span>Instagram</span>
					</Link>
				</div>
				<div className='sm:col-span-2 lg:col-span-3 self-center place-self-center w-full flex flex-col items-start md:items-center justify-start md:justify-center gap-y-5 text-start md:text-center'>
					<h3 className='font-bold text-lg'>Simax newsletter</h3>
					<p className='text-base md:text-lg w-full md:w-1/2'>
						Ak chcete na svoj email dostávať aktuálne informácie a špeciálne ponuky v
						súvislosti s rodinnými domami, ktoré staviame, prihláste sa do nášho
						newslettra.
					</p>
					<form action='' className='self-center'>
						<input type='email' placeholder='Zadajte svoj email' />
						<Button variant='default'>Prihlásiť</Button>
					</form>
				</div>
			</center>
			<span className='text-gray-400 text-base'>© {currentYear} SIMAX PO, s.r.o.</span>
		</footer>
	);
};

export default Footer;
