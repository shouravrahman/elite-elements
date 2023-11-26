/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class", // Enables dark mode based on class

	theme: {
		extend: {
			fontFamily: {
				noto: ["var(--font-noto)"],
				rubik: ["var(--font-rubik)"],
			},
			colors: {
				// Light Mode
				primaryBackgroundLight: "#F5F5F5", // Light Grey
				textLight: "#333333", // Dark Grey
				accentLight: "#009688", // Teal

				// Dark Mode
				primaryBackgroundDark: "#121212", // Very Dark Grey
				textDark: "#ffffff", // White
				accentDark: "#4CAF50", // Green

				// Borders
				borderLight: "#D1D1D1", // Light Grey
				borderDark: "#2D2D2D", // Dark Grey

				// Focus
				focusLight: "#85D7FF", // Light Blue
				focusDark: "#007BFF", // Blue

				// Hover
				hoverLight: "#EAEAEA", // Lighter Grey
				hoverDark: "#1F1F1F", // Darker Grey

				// Box Shadows
				boxShadowLight: "rgba(0, 0, 0, 0.1)", // Light Grey shadow
				boxShadowDark: "rgba(0, 0, 0, 0.6)", // Dark Grey shadow

				// Multicolor Leaf SVG Placeholder
				multicolorLeaf: "url(path-to-your-multicolor-leaf-svg)", // Replace with actual SVG path
			},
			fontSize: {
				// Font Sizes
				xs: "0.75rem", // Extra Small
				sm: "0.875rem", // Small
				base: "1rem", // Base
				lg: "1.125rem", // Large
				xl: "1.25rem", // Extra Large
				"2xl": "1.5rem", // 2x Large
				"3xl": "1.875rem", // 3x Large
				"4xl": "2.25rem", // 4x Large
				"5xl": "3rem", // 5x Large
			},
		},
	},
	variants: {},
	plugins: [
		// CSS Reset Plugin
		require("tailwindcss-css-reset"),
	],
};
