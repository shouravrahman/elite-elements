import Navbar from "@/components/Navbar";
import "../styles/global.css";

import { Noto_Sans, Figtree, Noto_Sans_JP } from "next/font/google";

const sans = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["500", "600", "700"],
	variable: "--font-sans",
});
const figtree = Figtree({
	subsets: ["latin"],
	display: "swap",
	weight: ["700", "800", "900"],
	variable: "--font-figtree",
});

const sans_jp = Noto_Sans_JP({
	subsets: ["latin"],
	display: "swap",
	weight: ["500", "600", "700", "800"],
	variable: "--font-sans-jp",
});

export const metadata = {
	metadataBase: new URL("http://localhost:3000"),
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
			<body
				className={`${sans.variable} ${figtree.variable} ${sans_jp.variable} font-sans bg-primaryBackgroundLight`}
			>
				{children}
			</body>
		</html>
	);
}
