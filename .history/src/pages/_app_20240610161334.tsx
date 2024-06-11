import ModalComponent from "@/components/Modal";
import Modal from "@/components/Modal";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import useModal from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";

const inter = Barlow({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={cn(
				"antialiased min-h-screen scroll-smooth relative",
				inter.className
			)}
		>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}
