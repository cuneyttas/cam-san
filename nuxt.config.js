export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
	title: 'CAM-SAN Ticaret | Cam, Ayna, Resim, Çerçeve, Tuval ve Ağaç İşleri',
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: '' }
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
	]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		"~/assets/style/normalize.css",
		"~/assets/style/global"
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/style-resources',
	],

	styleResources: {
		scss: ["~/assets/style/variables.scss"]
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	}
}
