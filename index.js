"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const iconvLite = require("iconv-lite");
exports.iconvLite = iconvLite;
const jschardet = require("jschardet");
exports.jschardet = jschardet;
var encodingExists = iconvLite.encodingExists;
exports.encodingExists = encodingExists;
__export(require("./encoding"));
const encoding_1 = require("./encoding");
exports.disableCodecDataWarn = encoding_1.disableCodecDataWarn;
function skipDecodeWarning(bool = true) {
    return iconvLite.skipDecodeWarning = bool;
}
exports.skipDecodeWarning = skipDecodeWarning;
function BufferFrom(str, encoding, from) {
    let data;
    if (from) {
        data = Buffer.from(str, from);
    }
    else {
        data = str;
    }
    data = decode(data);
    let buf = iconvLite.encode(data, encoding);
    return buf;
}
exports.BufferFrom = BufferFrom;
function detect(str, plus) {
    let ret = jschardet.detect(str);
    if (plus) {
        let cd = encoding_1.codec_data(ret.encoding);
        if (cd) {
            if (cd.name) {
                ret.name = cd.name;
            }
            ret.id = cd.id;
        }
    }
    if (!ret.name) {
        ret.name = ret.encoding;
    }
    return ret;
}
exports.detect = detect;
function decode(str, from = null) {
    let c;
    if (!from) {
        c = detect(str);
        from = c.encoding;
    }
    let data;
    let cd = encoding_1.codec_data(from);
    let key;
    if (cd && cd.name && !cd.not) {
        key = cd.name;
    }
    else {
        key = from;
    }
    switch (key.toUpperCase()) {
        case 'BIG5':
        case 'GBK':
        case 'GB2312':
        case 'UTF-16LE':
        case 'UTF-16BE':
        case 'UC-JP':
        case 'SHIFT_JIS':
            data = iconvLite.decode(str, from);
            break;
        case 'ASCII':
        case 'UTF-8':
            data = str;
            break;
        default:
            c = c || detect(str);
            if (!iconvLite.skipDecodeWarning) {
                encoding_1.console.warn('decode', from, c);
            }
            data = iconvLite.decode(str, from);
            break;
    }
    return data;
}
exports.decode = decode;
function encode(str, to = 'utf8', from = null) {
    let buf = BufferFrom(str, 'utf8');
    return iconvLite.encode(buf, to);
}
exports.encode = encode;
const self = require("./index");
exports.default = self;
