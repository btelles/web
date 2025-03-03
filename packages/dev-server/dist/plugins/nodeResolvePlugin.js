"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeResolvePlugin = void 0;
const dev_server_rollup_1 = require("@web/dev-server-rollup");
const deepmerge_1 = __importDefault(require("deepmerge"));
function nodeResolvePlugin(rootDir, preserveSymlinks, userOptions) {
    const userOptionsObject = typeof userOptions === 'object' ? userOptions : {};
    const options = deepmerge_1.default({
        rootDir,
        extensions: ['.mjs', '.js', '.cjs', '.jsx', '.json', '.ts', '.tsx'],
        moduleDirectories: ['node_modules', 'web_modules'],
        // allow resolving polyfills for nodejs libs
        preferBuiltins: false,
    }, userOptionsObject);
    return dev_server_rollup_1.rollupAdapter(dev_server_rollup_1.nodeResolve(options), { preserveSymlinks }, { throwOnUnresolvedImport: true });
}
exports.nodeResolvePlugin = nodeResolvePlugin;
//# sourceMappingURL=nodeResolvePlugin.js.map