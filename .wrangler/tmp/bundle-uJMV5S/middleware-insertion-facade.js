				import worker, * as OTHER_EXPORTS from "/home/mejan/projects/personal/hello-world-rust/build/worker/shim.mjs";
				import * as __MIDDLEWARE_0__ from "/home/mejan/projects/personal/hello-world-rust/node_modules/.pnpm/wrangler@3.57.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/home/mejan/projects/personal/hello-world-rust/node_modules/.pnpm/wrangler@3.57.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/home/mejan/projects/personal/hello-world-rust/build/worker/shim.mjs";
				export default worker;