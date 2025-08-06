const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Cxv0cfnM.js",app:"_app/immutable/entry/app.WGDAXCid.js",imports:["_app/immutable/entry/start.Cxv0cfnM.js","_app/immutable/chunks/jeVXptgw.js","_app/immutable/chunks/BLMQnIy9.js","_app/immutable/chunks/V0YAjKcj.js","_app/immutable/chunks/CQrPswM9.js","_app/immutable/chunks/CtMh356_.js","_app/immutable/entry/app.WGDAXCid.js","_app/immutable/chunks/V0YAjKcj.js","_app/immutable/chunks/CQrPswM9.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BLMQnIy9.js","_app/immutable/chunks/CtMh356_.js","_app/immutable/chunks/Ccd4s0Vq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-ByR4gV73.js')),
			__memo(() => import('./chunks/1-DXCCjRP8.js')),
			__memo(() => import('./chunks/2-BspTl5wW.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
