"use strict";
/**
 * Created by user on 2019/3/21.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._enc = exports._codecTable = exports.codecDataNameToUpperCase = exports.EnumEncoding = exports.codec_table = exports.NodeEncoding = exports.ENUM_NODE_ENCODING = exports.CODEC_DATA_ENCODING_ID = exports.CODEC_DATA_NAME_TO_UPPER_CASE = exports.CODEC_DATA_NAME = void 0;
var CODEC_DATA_NAME;
(function (CODEC_DATA_NAME) {
    CODEC_DATA_NAME["BIG5"] = "Big5";
    CODEC_DATA_NAME["GBK"] = "GBK";
    CODEC_DATA_NAME["GB2312"] = "GB2312";
    CODEC_DATA_NAME["UTF_16_LE"] = "UTF-16LE";
    CODEC_DATA_NAME["UTF_16_BE"] = "UTF-16BE";
    CODEC_DATA_NAME["EUC_JP"] = "EUC-JP";
    CODEC_DATA_NAME["SHIFT_JIS"] = "SHIFT_JIS";
    CODEC_DATA_NAME["ASCII"] = "ASCII";
    CODEC_DATA_NAME["UTF_8"] = "UTF-8";
    CODEC_DATA_NAME["UTF_32_LE"] = "UTF-32LE";
    CODEC_DATA_NAME["UTF_32_BE"] = "UTF-32BE";
})(CODEC_DATA_NAME = exports.CODEC_DATA_NAME || (exports.CODEC_DATA_NAME = {}));
var CODEC_DATA_NAME_TO_UPPER_CASE;
(function (CODEC_DATA_NAME_TO_UPPER_CASE) {
    CODEC_DATA_NAME_TO_UPPER_CASE["BIG5"] = "BIG5";
    CODEC_DATA_NAME_TO_UPPER_CASE["GBK"] = "GBK";
    CODEC_DATA_NAME_TO_UPPER_CASE["GB2312"] = "GB2312";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_16_LE"] = "UTF-16LE";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_16_BE"] = "UTF-16BE";
    CODEC_DATA_NAME_TO_UPPER_CASE["EUC_JP"] = "EUC-JP";
    CODEC_DATA_NAME_TO_UPPER_CASE["SHIFT_JIS"] = "SHIFT_JIS";
    CODEC_DATA_NAME_TO_UPPER_CASE["ASCII"] = "ASCII";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_8"] = "UTF-8";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_32_LE"] = "UTF-32LE";
    CODEC_DATA_NAME_TO_UPPER_CASE["UTF_32_BE"] = "UTF-32BE";
})(CODEC_DATA_NAME_TO_UPPER_CASE = exports.CODEC_DATA_NAME_TO_UPPER_CASE || (exports.CODEC_DATA_NAME_TO_UPPER_CASE = {}));
var CODEC_DATA_ENCODING_ID;
(function (CODEC_DATA_ENCODING_ID) {
    CODEC_DATA_ENCODING_ID["big5hkscs"] = "big5hkscs";
    CODEC_DATA_ENCODING_ID["cp936"] = "cp936";
    CODEC_DATA_ENCODING_ID["gbk"] = "gbk";
    CODEC_DATA_ENCODING_ID["eucjp"] = "eucjp";
    CODEC_DATA_ENCODING_ID["shiftjis"] = "shiftjis";
    CODEC_DATA_ENCODING_ID["utf8"] = "utf8";
    CODEC_DATA_ENCODING_ID["ucs2"] = "ucs2";
    CODEC_DATA_ENCODING_ID["utf16be"] = "utf16be";
    CODEC_DATA_ENCODING_ID["utf32be"] = "utf32be";
    CODEC_DATA_ENCODING_ID["utf32le"] = "utf32le";
    // ------------
    CODEC_DATA_ENCODING_ID["GBK"] = "gbk";
    CODEC_DATA_ENCODING_ID["EUC_JP"] = "eucjp";
    CODEC_DATA_ENCODING_ID["SHIFT_JIS"] = "shiftjis";
    CODEC_DATA_ENCODING_ID["UTF_8"] = "utf8";
    CODEC_DATA_ENCODING_ID["UTF_16_BE"] = "utf16be";
    CODEC_DATA_ENCODING_ID["UTF_32_LE"] = "utf32le";
    CODEC_DATA_ENCODING_ID["UTF_32_BE"] = "utf32be";
    // ----------
    CODEC_DATA_ENCODING_ID["ascii"] = "ascii";
    CODEC_DATA_ENCODING_ID["ASCII"] = "ASCII";
})(CODEC_DATA_ENCODING_ID = exports.CODEC_DATA_ENCODING_ID || (exports.CODEC_DATA_ENCODING_ID = {}));
var ENUM_NODE_ENCODING;
(function (ENUM_NODE_ENCODING) {
    ENUM_NODE_ENCODING["ASCII"] = "ascii";
    ENUM_NODE_ENCODING["UTF8"] = "utf8";
    ENUM_NODE_ENCODING["UTF_8"] = "utf-8";
    ENUM_NODE_ENCODING["UTF16_LE"] = "utf16le";
    ENUM_NODE_ENCODING["UCS2"] = "ucs2";
    ENUM_NODE_ENCODING["BASE64"] = "base64";
    ENUM_NODE_ENCODING["LATIN1"] = "latin1";
    ENUM_NODE_ENCODING["BINARY"] = "binary";
    ENUM_NODE_ENCODING["HEX"] = "hex";
})(ENUM_NODE_ENCODING = exports.ENUM_NODE_ENCODING || (exports.ENUM_NODE_ENCODING = {}));
exports.NodeEncoding = [
    "ascii" /* ASCII */,
    "utf8" /* UTF8 */,
    "utf-8" /* UTF_8 */,
    "utf16le" /* UTF16_LE */,
    "ucs2" /* UCS2 */,
    "base64" /* BASE64 */,
    "latin1" /* LATIN1 */,
    "binary" /* BINARY */,
    "hex" /* HEX */,
];
exports.codec_table = {
    ["big5hkscs" /* big5hkscs */]: _codecTable({
        id: 'big5',
        name: "Big5" /* BIG5 */,
    }),
    ["cp936" /* cp936 */]: _codecTable({
        name: "GB2312" /* GB2312 */,
    }),
    ["gbk" /* gbk */]: _codecTable({
        name: "GBK" /* GBK */,
    }),
    ["eucjp" /* eucjp */]: _codecTable({
        name: "EUC-JP" /* EUC_JP */,
    }),
    ["shiftjis" /* shiftjis */]: _codecTable({
        name: "SHIFT_JIS" /* SHIFT_JIS */,
    }),
    //------------------
    ["utf8" /* utf8 */]: _codecTable({
        name: "UTF-8" /* UTF_8 */,
    }),
    ["ucs2" /* ucs2 */]: _codecTable({
        name: "UTF-16LE" /* UTF_16_LE */,
    }),
    //------------------
    ["utf16be" /* utf16be */]: _codecTable({
        name: "UTF-16BE" /* UTF_16_BE */,
    }),
    /**
     * Error: Encoding not recognized: '' (searched as: '')
     */
    ["utf32be" /* utf32be */]: _codecTable({
        name: "UTF-32BE" /* UTF_32_BE */,
        not: true,
    }),
    ["utf32le" /* utf32le */]: _codecTable({
        name: "UTF-32LE" /* UTF_32_LE */,
        not: true,
    }),
};
var EnumEncoding;
(function (EnumEncoding) {
    EnumEncoding["BIG5"] = "Big5";
    EnumEncoding["UTF8"] = "UTF-8";
    EnumEncoding["GBK"] = "Gbk";
})(EnumEncoding = exports.EnumEncoding || (exports.EnumEncoding = {}));
function codecDataNameToUpperCase(key) {
    return key.toUpperCase();
}
exports.codecDataNameToUpperCase = codecDataNameToUpperCase;
function _codecTable(data) {
    return data;
}
exports._codecTable = _codecTable;
function _enc(encoding) {
    if (encoding == null) {
        throw new Error(`encoding '${encoding}' is broken`);
    }
    return encoding
        .toString()
        .toLowerCase()
        .replace(/[^0-9a-z]|:\d{4}$/g, '');
}
exports._enc = _enc;
exports.default = exports;
//# sourceMappingURL=const.js.map