import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { killXhr } from "./kill-xhr";

export default defineConfig({
	base: "./",
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	resolve: {
		alias: [
			{
				find: "@",
				replacement: fileURLToPath(new URL("../src", import.meta.url)),
			},
			{
				find: "phaser",
				replacement: "phaser/src/phaser-esm.js",
			},
		],
	},
	plugins: [killXhr(), viteSingleFile({ removeViteModuleLoader: true })],
});
