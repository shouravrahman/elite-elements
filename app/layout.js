import "./globals.css";

import { Rubik, Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["500", "600", "700"],
	variable: "--font-noto",
});

const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-rubik",
});

export const metadata = {
	openGraph: {
		title: "Elite Elements - Tailwind & React Component Library",
		description:
			"A curated collection of modern UI components for Tailwind & React projects.",
		url: "https://example.com",
		siteName: "Elite Elements",
		images: [
			{
				url: "url-to-your-preview-image",
				width: 1200,
				height: 630,
			},
			// Add more images if needed
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		cardType: "summary_large_image",
		handle: "@your_twitter_handle", // Optional: Include your Twitter handle
		site: "@your_twitter_site", // Optional: Include your Twitter site
	},
	linkedIn: {
		title: "Elite Elements - Tailwind & React Component Library",
		description:
			"A curated collection of modern UI components for Tailwind & React projects.",
		url: "https://example.com",
		site: "Elite Elements",
		images: [
			{
				url: "url-to-your-preview-image",
				width: 1200,
				height: 627,
			},
			// Add more images if needed
		],
	},
	generator: "Tailwind & React",
	applicationName: "Tailwind & React",
	referrer: "origin-when-cross-origin",
	keywords: ["Tailwind & React", "React", "JavaScript"],
	authors: [{ name: "", url: "https://nextjs.org" }],
	creator: "",
	publisher: "",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${noto.variable} ${rubik.variable} font-rubik`}>
				{children}
			</body>
		</html>
	);
}
