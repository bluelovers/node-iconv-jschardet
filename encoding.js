"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iconvLite = require("iconv-lite");
function _enc(encoding) {
    return encoding.toString().toLowerCase().replace(/[^0-9a-z]|:\d{4}$/g, '');
}
exports._enc = _enc;
function codec_data(encoding) {
    let codec;
    let enc;
    let enc2;
    if (!exports.codec_table[enc = _enc(encoding)]) {
        try {
            codec = iconvLite.getCodec(encoding);
            enc2 = codec.encodingName || codec.enc;
            if (exports.codec_table[enc2]) {
                enc = enc2;
            }
        }
        catch (e) {
        }
    }
    if (exports.codec_table[enc]) {
        exports.codec_table[enc].key = exports.codec_table[enc].key || enc;
        exports.codec_table[enc].id = exports.codec_table[enc].id || enc;
        exports.codec_table[enc].input = encoding;
        return exports.codec_table[enc];
    }
    console.warn(encoding, enc, enc2, codec);
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
exports.codec_table = {
    big5hkscs: {
        id: 'big5',
        name: 'Big5',
    },
    cp936: {
        name: 'GB2312',
    },
    eucjp: {
        name: 'UC-JP',
    },
    shiftjis: {
        name: 'SHIFT_JIS',
    },
    utf8: {
        name: 'UTF-8',
    },
    ucs2: {
        name: 'UTF-16LE',
    },
    utf16be: {
        name: 'UTF-16BE',
    },
    utf32be: {
        name: 'UTF-32BE',
        not: true,
    },
    utf32le: {
        name: 'UTF-32LE',
        not: true,
    },
};
const self = require("./encoding");
exports.default = self;
