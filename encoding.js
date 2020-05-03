"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.codec_data = exports.disableCodecDataWarn = exports.isNodeEncoding = void 0;
const iconvLite = require("iconv-lite");
const logger_1 = __importDefault(require("debug-color2/logger"));
const const_1 = require("./lib/const");
__exportStar(require("./lib/const"), exports);
//export { console }
function isNodeEncoding(encoding) {
    let enc = const_1._enc(encoding);
    return const_1.NodeEncoding.includes(const_1._enc(encoding)) ? enc : null;
}
exports.isNodeEncoding = isNodeEncoding;
let DISABLE_CODEC_DATA_WARN = false;
function disableCodecDataWarn(bool = true) {
    return DISABLE_CODEC_DATA_WARN = bool;
}
exports.disableCodecDataWarn = disableCodecDataWarn;
function codec_data(encoding) {
    if (encoding == null) {
        throw new Error(`encoding '${encoding}' is unknown or broken`);
    }
    let codec;
    let enc;
    let enc2;
    if (!const_1.codec_table[enc = const_1._enc(encoding)]) {
        try {
            // @ts-ignore
            codec = iconvLite.getCodec(encoding);
            enc2 = codec.encodingName || codec.enc;
            if (const_1.codec_table[enc2]) {
                enc = enc2;
            }
        }
        catch (e) {
        }
    }
    if (const_1.codec_table[enc]) {
        const_1.codec_table[enc].key = const_1.codec_table[enc].key || enc;
        const_1.codec_table[enc].id = const_1.codec_table[enc].id || enc;
        const_1.codec_table[enc].input = encoding;
        return const_1.codec_table[enc];
    }
    if (!DISABLE_CODEC_DATA_WARN) {
        logger_1.default.warn(encoding, enc, enc2, codec);
    }
    if (enc2) {
        return {
            key: enc,
            key2: enc2,
            input: encoding,
            error: true,
            not: !codec,
        };
    }
    else {
        return null;
    }
}
exports.codec_data = codec_data;
exports.default = exports;
//# sourceMappingURL=encoding.js.map