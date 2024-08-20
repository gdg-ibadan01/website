import type { IconProps } from './types';

export const PeopleIcon = ({ color, width, height }: IconProps) => {
	return (
		<svg
			width={width ?? '32'}
			height={height ?? '32'}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_bi_113_95703)">
				<path
					d="M7 23C7 18.5817 10.5817 15 15 15H17C21.4183 15 25 18.5817 25 23V24C25 25.1046 24.1046 26 23 26H9C7.89543 26 7 25.1046 7 24V23Z"
					fill="url(#paint0_linear_113_95703)"
				/>
			</g>
			<circle
				opacity="0.5"
				cx="16"
				cy="14"
				r="4"
				fill="url(#paint1_linear_113_95703)"
			/>
			<g filter="url(#filter1_bi_113_95703)">
				<circle cx="16" cy="12" r="6" fill={color ?? '#FFD789'} fill-opacity="0.4" />
			</g>
			<ellipse cx="14" cy="12" rx="1" ry="2" fill="white" />
			<ellipse cx="18" cy="12" rx="1" ry="2" fill="white" />
			<defs>
				<filter
					id="filter0_bi_113_95703"
					x="3"
					y="11"
					width="26"
					height="19"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_113_95703"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_113_95703"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="0.2" dy="0.2" />
					<feGaussianBlur stdDeviation="1" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect2_innerShadow_113_95703"
					/>
				</filter>
				<filter
					id="filter1_bi_113_95703"
					x="6"
					y="2"
					width="20"
					height="20"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
					<feComposite
						in2="SourceAlpha"
						operator="in"
						result="effect1_backgroundBlur_113_95703"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_113_95703"
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
						result="effect2_innerShadow_113_95703"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_113_95703"
					x1="7"
					y1="15"
					x2="25"
					y2="26"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F2994A" />
					<stop offset="1" stop-color="#F2C94C" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_113_95703"
					x1="12"
					y1="10"
					x2="21.6428"
					y2="13.6012"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F2994A" />
					<stop offset="1" stop-color="#F2C94C" />
				</linearGradient>
			</defs>
		</svg>
	);
};
