import type { Plugin } from "vite";

const EMPTY_JS = "\0kill-xhr:empty.js";

// This vite plugin does two things
// 1. prevent XHRLoader from being bundled (this is useless for single file games, and is rejected from some platforms)
// 2. turn off the features that we don't need. WEBGL_DEBUG, EXPERIMENTAL, PLUGIN_3D, PLUGIN_CAMERA3D, PLUGIN_FBINSTANT is turned off by default.
export function killXhr(): Plugin {
	return {
		name: "kill-xhr",
		enforce: "pre",
		resolveId(source, importer) {
			if (
				importer?.includes("/node_modules/phaser/src/") &&
				source.endsWith("/XHRLoader")
			) {
				return { id: EMPTY_JS };
			}
		},
		load(id) {
			if (id === EMPTY_JS) {
				return "export default {}";
			}
		},
		transform(code, id, _) {
			if (id.includes("/node_modules/phaser/src/")) {
				return code.replace(
					/typeof (?:WEBGL_DEBUG|EXPERIMENTAL|PLUGIN_3D|PLUGIN_CAMERA3D|PLUGIN_FBINSTANT)/g,
					"false",
				);
			}
		},
	};
}
