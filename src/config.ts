import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "MystixMew's Blog",
	subtitle: "Tides will turn.",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 335, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/estella_banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv", // Credit text to be displayed
			url: "https://www.pixiv.net/en/artworks/138350748",
			// url: "https://www.pixiv.net/en/artworks/140099618", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/tayrp/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "MystixMew",
	bio: "Tides will turn.",
	links: [
		//{
		//	name: "Website",
		//	icon: "fa6-brands:react",
		//	url: "https://valerie.lol",
		//},
		//{
		//	name: "Discord",
		//	icon: "fa6-brands:discord",
		//	url: "https://discord.gg/Edmk3Fxncx",
		//},
		//{
		//	name: "Twitter",
		//	icon: "fa6-brands:bluesky",
		//	url: "https://bsky.app/profile/valerie.lol",
		//},
		//{
		//	name: "Twitter",
		//	icon: "fa6-brands:twitter",
		//	url: "https://twitter.com/mystixmew",
		//},
		//{
		//	name: "Steam",
		//	icon: "fa6-brands:steam",
		//	url: "https://steamcommunity.com/id/nukashine/",
		//},
		//{
		//	name: "GitHub",
		//	icon: "fa6-brands:github",
		//	url: "https://github.com/tayrp/fuwari",
		//},
		//{
		//	name: "Last.fm",
		//	icon: "fa6-brands:lastfm",
		//	url: "https://last.fm/user/mystixmew",
		//},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-ND 4.0",
	url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
