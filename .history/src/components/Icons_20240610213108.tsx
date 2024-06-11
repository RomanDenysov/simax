import { LucideProps } from 'lucide-react';

export const Icons = {
	arrowcircle: (props: LucideProps) => (
		<svg {...props} viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='26.5' cy='26.5' r='26' stroke='#414141' />
			<path
				d='M31.1 30.6L30.6 30.1L33.35 27.35H18.3V26.65H33.35L30.6 23.9L31.1 23.4L34.7 27L31.1 30.6Z'
				fill='white'
			/>
		</svg>
	),
	arrowcircledark: (props: LucideProps) => (
		<svg
			width='54'
			height='53'
			viewBox='0 0 54 53'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='27' cy='26.5' r='26' stroke='#E5E5E5' />
			<path
				d='M31.6 30.6L31.1 30.1L33.85 27.35H18.8V26.65H33.85L31.1 23.9L31.6 23.4L35.2 27L31.6 30.6Z'
				fill='black'
			/>
		</svg>
	),
	xcircle: (props: LucideProps) => (
		<svg {...props} viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='26.5' cy='26.5' r='26' stroke='#E5E5E5' />
			<path
				d='M21.3999 33.1L20.8999 32.6L26.4999 27L20.8999 21.4L21.3999 20.9L26.9999 26.5L32.5999 20.9L33.0999 21.4L27.4999 27L33.0999 32.6L32.5999 33.1L26.9999 27.5L21.3999 33.1Z'
				fill='black'
			/>
		</svg>
	),
	achive: (props: LucideProps) => (
		<svg {...props} viewBox='0 0 53 53' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='26.5' cy='26.5' r='26' stroke='#E5E5E5' />
			<path
				d='M24.55 32.1L19.8 27.35L20.3 26.85L24.55 31.1L33.7 21.95L34.2 22.45L24.55 32.1Z'
				fill='black'
			/>
		</svg>
	),
};
