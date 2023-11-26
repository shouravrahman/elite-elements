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
				sans: ["var(--font-sans)"],
				sans_jp: ["var(--font-sans-jp)"],
				figtree: ["var(--font-figtree)"],
			},
			colors: {
				// Light Mode
				primaryBackgroundLight: "#F5F5F5", // Light Grey
				textLight: "#333333", // Dark Grey
				accentLight: "#1E90FF", // Dodger Blue (Adjust to a more suitable blue)

				// Dark Mode
				primaryBackgroundDark: "#121212", // Very Dark Grey
				textDark: "#ffffff", // White
				accentDark: "#2E8B57", // Sea Green (Adjust to a more suitable green)

				// Borders
				borderLight: "#D1D1D1", // Light Grey
				borderDark: "#444", // Dark Grey

				// Focus
				focusLight: "#85D7FF", // Light Blue
				focusDark: "#007BFF", // Blue

				// Hover
				hoverLight: "#EAEAEA", // Lighter Grey
				hoverDark: "#1F1F1F", // Darker Grey

				hoverBgDark: "hsla(0,0%,100%,.02)",
				hoverBgLight: "hsla(0,0%,100%,.05)",

				// Button Colors
				buttonBackground: "#4CAF50", // Green (Adjust to a more suitable color)
				buttonHover: "#45A049", // Darker Green (Adjust to a more suitable color)

				// Box Shadows
				boxShadowLight: "rgba(0, 0, 0, 0.1)", // Light Grey shadow
				boxShadowDark: "rgba(0, 0, 0, 0.6)", // Dark Grey shadow
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
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("tailwindcss-logical"),
		require("nightwind"),
	],
};
