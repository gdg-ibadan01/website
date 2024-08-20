<template>
	<svg
		:width="width || '33'"
		:height="height || '33'"
		viewBox="0 0 33 33"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.3252 13.6904C8.3252 13.3488 8.49958 13.0308 8.78764 12.8472L15.2501 8.72738C15.9059 8.30932 16.7445 8.30932 17.4003 8.72738L23.8628 12.8472C24.1508 13.0308 24.3252 13.3488 24.3252 13.6904V22.042C24.3252 23.6988 22.982 25.042 21.3252 25.042H11.3252C9.66834 25.042 8.3252 23.6988 8.3252 22.042V13.6904Z"
			fill="url(#paint0_linear_113_95679)"
		/>
		<g filter="url(#filter0_bi_113_95679)">
			<path
				d="M15.2962 12.6594L8.59694 16.6789C7.59715 17.2788 6.3252 16.5586 6.3252 15.3927V13.1744C6.3252 12.4718 6.69379 11.8208 7.2962 11.4594L15.2962 6.65939C15.9296 6.27937 16.7208 6.27937 17.3542 6.65939L25.3542 11.4594C25.9566 11.8208 26.3252 12.4718 26.3252 13.1744V15.3927C26.3252 16.5586 25.0532 17.2788 24.0534 16.6789L17.3542 12.6594C16.7208 12.2794 15.9296 12.2794 15.2962 12.6594Z"
				fill="#1BCC76"
				fill-opacity="0.4"
			/>
		</g>
		<g filter="url(#filter1_bi_113_95679)">
			<path
				d="M16.3252 22.042C16.3252 20.3851 17.6683 19.042 19.3252 19.042C20.982 19.042 22.3252 20.3851 22.3252 22.042V25.042C22.3252 25.5943 21.8775 26.042 21.3252 26.042H17.3252C16.7729 26.042 16.3252 25.5943 16.3252 25.042V22.042Z"
				fill="#1BCC76"
				fill-opacity="0.4"
			/>
		</g>
		<rect
			x="11.3252"
			y="16.042"
			width="3"
			height="3"
			rx="1"
			fill="white"
		/>
		<defs>
			<filter
				id="filter0_bi_113_95679"
				x="2.3252"
				y="2.37402"
				width="28"
				height="18.5215"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood
					flood-opacity="0"
					result="BackgroundImageFix"
				/>
				<feGaussianBlur
					in="BackgroundImageFix"
					stdDeviation="2"
				/>
				<feComposite
					in2="SourceAlpha"
					operator="in"
					result="effect1_backgroundBlur_113_95679"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_backgroundBlur_113_95679"
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
				<feComposite
					in2="hardAlpha"
					operator="arithmetic"
					k2="-1"
					k3="1"
				/>
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
				/>
				<feBlend
					mode="normal"
					in2="shape"
					result="effect2_innerShadow_113_95679"
				/>
			</filter>
			<filter
				id="filter1_bi_113_95679"
				x="12.3252"
				y="15.042"
				width="14"
				height="15"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood
					flood-opacity="0"
					result="BackgroundImageFix"
				/>
				<feGaussianBlur
					in="BackgroundImageFix"
					stdDeviation="2"
				/>
				<feComposite
					in2="SourceAlpha"
					operator="in"
					result="effect1_backgroundBlur_113_95679"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_backgroundBlur_113_95679"
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
				<feComposite
					in2="hardAlpha"
					operator="arithmetic"
					k2="-1"
					k3="1"
				/>
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
				/>
				<feBlend
					mode="normal"
					in2="shape"
					result="effect2_innerShadow_113_95679"
				/>
			</filter>
			<linearGradient
				id="paint0_linear_113_95679"
				x1="16.3252"
				y1="8.04199"
				x2="16.3252"
				y2="25.042"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#1BCC76" />
				<stop
					offset="1"
					stop-color="#0E663B"
				/>
			</linearGradient>
		</defs>
	</svg>
</template>

<script>
export default {
	props: {
		width: String,
		height: String,
	},
	setup(props) {
		return {
			...props,
		};
	},
};
</script>

<style lang="scss" scoped></style>
