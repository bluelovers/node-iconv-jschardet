"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LXV0ZjguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3QtdXRmOC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsbUNBQXlEO0FBQ3pELHVDQUFtQztBQUVuQzs7R0FFRztBQUNILFNBQWdCLGNBQWMsQ0FBNEMsR0FBVztJQUVwRixJQUFJLEdBQUcsR0FBRyxjQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsT0FBTyxZQUFJLENBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFKRCx3Q0FJQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxHQUFXO0lBRXhDLElBQUksR0FBRyxHQUFHLGNBQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsSUFBSSxRQUFRLEdBQUcsWUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxPQUFPLENBQUMsUUFBUSxzQkFBZ0MsSUFBSSxRQUFRLHdCQUFpQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzdHLENBQUM7QUFORCxzQ0FNQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxHQUFvQjtJQUUzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDekI7UUFDQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUN0QjtJQUVELE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzFCLENBQUM7QUFSRCwwQkFRQztBQUVELGtCQUFlLE9BQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzMvMjEuXG4gKi9cbmltcG9ydCB7IENPREVDX0RBVEFfRU5DT0RJTkdfSUQsIGRldGVjdCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgX2VuYyB9IGZyb20gJy4vbGliL2NvbnN0JztcblxuLyoqXG4gKiDmqqLmuKwgQnVmZmVyIOS4puS4lOi/lOWbnuWwj+Wvq+aomea6luWMluW+jOeahOe3qOeivCBJRFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0RW5jb2Rpbmc8VCBleHRlbmRzIENPREVDX0RBVEFfRU5DT0RJTkdfSUQgfCBzdHJpbmc+KGJ1ZjogQnVmZmVyKTogVFxue1xuXHRsZXQgY2hrID0gZGV0ZWN0KGJ1Zik7XG5cdHJldHVybiBfZW5jPFQ+KGNoay5lbmNvZGluZyk7XG59XG5cbi8qKlxuICog55W2IEJ1ZmZlciDnt6jnorzkuI3lsazmlrwgVVRGLTgg5oiW6ICFIGFzY2lpIOaZglxuICog6L+U5Zue57eo56K86LOH6KiKXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RVVEY4QnVmZmVyKGJ1ZjogQnVmZmVyKVxue1xuXHRsZXQgY2hrID0gZGV0ZWN0KGJ1ZiwgdHJ1ZSk7XG5cdGxldCBlbmNvZGluZyA9IF9lbmMoY2hrLmVuY29kaW5nKTtcblxuXHRyZXR1cm4gKGVuY29kaW5nID09PSBDT0RFQ19EQVRBX0VOQ09ESU5HX0lELnV0ZjggfHwgZW5jb2RpbmcgPT09IENPREVDX0RBVEFfRU5DT0RJTkdfSUQuYXNjaWkpID8gbnVsbCA6IGNoaztcbn1cblxuLyoqXG4gKiDnlbYgQnVmZmVyIHwgc3RyaW5nIOe3qOeivOS4jeWxrOaWvCBVVEYtOCDmiJbogIUgYXNjaWkg5pmCXG4gKiDov5Tlm57nt6jnorzos4foqIpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdFVURjgoYnVmOiBCdWZmZXIgfCBzdHJpbmcpXG57XG5cdGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpXG5cdHtcblx0XHRidWYgPSBCdWZmZXIuZnJvbShidWYpXG5cdH1cblxuXHRyZXR1cm4gbm90VVRGOEJ1ZmZlcihidWYpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9ub3QtdXRmOCcpO1xuIl19