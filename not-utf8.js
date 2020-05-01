"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notUTF8 = exports.notUTF8Buffer = exports.detectEncoding = void 0;
/**
 * Created by user on 2019/3/21.
 */
const index_1 = require("./index");
const const_1 = require("./lib/const");
/**
 * 檢測 Buffer 並且返回小寫標準化後的編碼 ID
 */
function detectEncoding(buf) {
    let chk = index_1.detect(buf);
    return const_1._enc(chk.encoding);
}
exports.detectEncoding = detectEncoding;
/**
 * 當 Buffer 編碼不屬於 UTF-8 或者 ascii 時
 * 返回編碼資訊
 */
function notUTF8Buffer(buf) {
    let chk = index_1.detect(buf, true);
    let encoding = const_1._enc(chk.encoding);
    return (encoding === "utf8" /* utf8 */ || encoding === "ascii" /* ascii */) ? null : chk;
}
exports.notUTF8Buffer = notUTF8Buffer;
/**
 * 當 Buffer | string 編碼不屬於 UTF-8 或者 ascii 時
 * 返回編碼資訊
 */
function notUTF8(buf) {
    if (!Buffer.isBuffer(buf)) {
        buf = Buffer.from(buf);
    }
    return notUTF8Buffer(buf);
}
exports.notUTF8 = notUTF8;
exports.default = exports;
//# sourceMappingURL=not-utf8.js.map