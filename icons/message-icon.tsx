import type { IconProps } from './types';

export const MessageIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			width={width ?? '33'}
			height={height ?? '32'}
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse cx="17.4385" cy="14.5" rx="9" ry="8.5" fill={color ?? '#EA4335'} />
			<g filter="url(#filter0_bi_113_95695)">
				<path
					d="M6.43848 16.5C6.43848 11.8056 10.2441 8 14.9385 8C19.6329 8 23.4385 11.8056 23.4385 16.5V17C23.4385 21.9706 19.409 26 14.4385 26H7.93848C7.11005 26 6.43848 25.3284 6.43848 24.5V16.5Z"
					fill={color ?? '#EA4335'}
					fill-opacity="0.4"
				/>
			</g>
			<rect x="10.4385" y="13" width="9" height="1.5" rx="0.75" fill="white" />
			<rect x="10.4385" y="16" width="7" height="1.5" rx="0.75" fill="white" />
			<rect x="10.4385" y="19" width="8" height="1.5" rx="0.75" fill="white" />
			<defs>
				<filter
					id="filter0_bi_113_95695"
					x="2.43848"
					y="4"
					width="25"
					height="26"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_113_95695"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_113_95695"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="0.2" />
					<feGaussianBlur stdDeviation="1" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect2_innerShadow_113_95695"
					/>
				</filter>
			</defs>
		</svg>
	);
};
