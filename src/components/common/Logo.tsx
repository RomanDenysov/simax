import SimaxLogo from "@/assets/SIMAX_LOGO.svg";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
	text?: boolean;
};

const Logo = ({ text }: LogoProps) => {
	return (
		<Link href="/">
			<center className="w-full flex items-center justify-center gap-x-2">
				<Image src={SimaxLogo} alt="Simax Logo" />
				{text && <span className="text-xl font-black">SIMAX</span>}
			</center>
		</Link>
	);
};

export default Logo;
