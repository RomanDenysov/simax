import HOUSE from "../../public/home2.webp";
import H1 from "../../public/h1.webp";
import H2 from "../../public/h2.webp";
import H3 from "../../public/h3.webp";
import H4 from "../../public/h4.webp";
import H5 from "../../public/h5.webp";
import H6 from "../../public/h6.webp";
import H7 from "../../public/h7.webp";
import H8 from "../../public/h8.webp";
import H9 from "../../public/h9.webp";
import H10 from "../../public/h10.webp";
import H11 from "../../public/h11.webp";
import address from '../../public/address.webp';
import { StaticImageData } from 'next/image';

const images: { [key: string]: StaticImageData } = {
	home2: HOUSE,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	h7: H7,
	h8: H8,
	h9: H9,
	h10: H10,
	h11: H11,
	address: address,
};

export const imageImport = (img: string): StaticImageData => {
	return images[img] || HOUSE;
};
