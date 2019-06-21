"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const iconvLite = require("iconv-lite");
const debug_color2_1 = require("debug-color2");
exports.console = debug_color2_1.console;
const const_1 = require("./lib/const");
__export(require("./lib/const"));
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
        debug_color2_1.console.warn(encoding, enc, enc2, codec);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbmNvZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUF5QztBQUN6QywrQ0FBdUM7QUFJOUIsa0JBSkEsc0JBQU8sQ0FJQTtBQUhoQix1Q0FBNkc7QUFFN0csaUNBQTRCO0FBRzVCLFNBQWdCLGNBQWMsQ0FBQyxRQUFtQjtJQUVqRCxJQUFJLEdBQUcsR0FBRyxZQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsT0FBTyxvQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFJLENBQXFCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQy9FLENBQUM7QUFKRCx3Q0FJQztBQUVELElBQUksdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLFNBQWdCLG9CQUFvQixDQUFDLE9BQWdCLElBQUk7SUFFeEQsT0FBTyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7QUFDdkMsQ0FBQztBQUhELG9EQUdDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLFFBQW1CO0lBRTdDLElBQUksUUFBUSxJQUFJLElBQUksRUFDcEI7UUFDQyxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsUUFBUSx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9EO0lBRUQsSUFBSSxLQUdILENBQUM7SUFDRixJQUFJLEdBQVcsQ0FBQztJQUNoQixJQUFJLElBQVksQ0FBQztJQUVqQixJQUFJLENBQUMsbUJBQVcsQ0FBQyxHQUFHLEdBQUcsWUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3RDO1FBQ0MsSUFDQTtZQUNDLGFBQWE7WUFDYixLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO1lBRXZDLElBQUksbUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFDckI7Z0JBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQzthQUNYO1NBQ0Q7UUFDRCxPQUFPLENBQUMsRUFDUjtTQUVDO0tBQ0Q7SUFFRCxJQUFJLG1CQUFXLENBQUMsR0FBRyxDQUFDLEVBQ3BCO1FBQ0MsbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ25ELG1CQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLG1CQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQztRQUVqRCxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFFbEMsT0FBTyxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxDQUFDLHVCQUF1QixFQUM1QjtRQUNDLHNCQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsSUFBSSxJQUFJLEVBQ1I7UUFDQyxPQUFPO1lBQ04sR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsSUFBSTtZQUVWLEtBQUssRUFBRSxRQUFRO1lBRWYsS0FBSyxFQUFFLElBQUk7WUFFWCxHQUFHLEVBQUUsQ0FBQyxLQUFLO1NBQ1gsQ0FBQztLQUNGO1NBRUQ7UUFDQyxPQUFPLElBQUksQ0FBQztLQUNaO0FBQ0YsQ0FBQztBQWpFRCxnQ0FpRUM7QUFFRCxrQkFBZSxPQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGljb252TGl0ZSA9IHJlcXVpcmUoJ2ljb252LWxpdGUnKTtcbmltcG9ydCB7IGNvbnNvbGUgfSBmcm9tICdkZWJ1Zy1jb2xvcjInO1xuaW1wb3J0IHsgX2VuYywgY29kZWNfdGFibGUsIEVOVU1fTk9ERV9FTkNPRElORywgSUVuY29kaW5nQ29kZWMsIE5vZGVFbmNvZGluZywgdkVuY29kaW5nIH0gZnJvbSAnLi9saWIvY29uc3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb25zdCc7XG5leHBvcnQgeyBjb25zb2xlIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUVuY29kaW5nKGVuY29kaW5nOiB2RW5jb2RpbmcpOiBzdHJpbmdcbntcblx0bGV0IGVuYyA9IF9lbmMoZW5jb2RpbmcpO1xuXHRyZXR1cm4gTm9kZUVuY29kaW5nLmluY2x1ZGVzKF9lbmM8RU5VTV9OT0RFX0VOQ09ESU5HPihlbmNvZGluZykpID8gZW5jIDogbnVsbDtcbn1cblxubGV0IERJU0FCTEVfQ09ERUNfREFUQV9XQVJOID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQ29kZWNEYXRhV2Fybihib29sOiBib29sZWFuID0gdHJ1ZSlcbntcblx0cmV0dXJuIERJU0FCTEVfQ09ERUNfREFUQV9XQVJOID0gYm9vbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvZGVjX2RhdGEoZW5jb2Rpbmc6IHZFbmNvZGluZyk6IElFbmNvZGluZ0NvZGVjXG57XG5cdGlmIChlbmNvZGluZyA9PSBudWxsKVxuXHR7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBlbmNvZGluZyAnJHtlbmNvZGluZ30nIGlzIHVua25vd24gb3IgYnJva2VuYCk7XG5cdH1cblxuXHRsZXQgY29kZWM6IHtcblx0XHRlbmNvZGluZ05hbWU/OiBzdHJpbmcsXG5cdFx0ZW5jPzogc3RyaW5nLFxuXHR9O1xuXHRsZXQgZW5jOiBzdHJpbmc7XG5cdGxldCBlbmMyOiBzdHJpbmc7XG5cblx0aWYgKCFjb2RlY190YWJsZVtlbmMgPSBfZW5jKGVuY29kaW5nKV0pXG5cdHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRjb2RlYyA9IGljb252TGl0ZS5nZXRDb2RlYyhlbmNvZGluZyk7XG5cdFx0XHRlbmMyID0gY29kZWMuZW5jb2RpbmdOYW1lIHx8IGNvZGVjLmVuYztcblxuXHRcdFx0aWYgKGNvZGVjX3RhYmxlW2VuYzJdKVxuXHRcdFx0e1xuXHRcdFx0XHRlbmMgPSBlbmMyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAoZSlcblx0XHR7XG5cblx0XHR9XG5cdH1cblxuXHRpZiAoY29kZWNfdGFibGVbZW5jXSlcblx0e1xuXHRcdGNvZGVjX3RhYmxlW2VuY10ua2V5ID0gY29kZWNfdGFibGVbZW5jXS5rZXkgfHwgZW5jO1xuXHRcdGNvZGVjX3RhYmxlW2VuY10uaWQgPSBjb2RlY190YWJsZVtlbmNdLmlkIHx8IGVuYztcblxuXHRcdGNvZGVjX3RhYmxlW2VuY10uaW5wdXQgPSBlbmNvZGluZztcblxuXHRcdHJldHVybiBjb2RlY190YWJsZVtlbmNdO1xuXHR9XG5cblx0aWYgKCFESVNBQkxFX0NPREVDX0RBVEFfV0FSTilcblx0e1xuXHRcdGNvbnNvbGUud2FybihlbmNvZGluZywgZW5jLCBlbmMyLCBjb2RlYyk7XG5cdH1cblxuXHRpZiAoZW5jMilcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IGVuYyxcblx0XHRcdGtleTI6IGVuYzIsXG5cblx0XHRcdGlucHV0OiBlbmNvZGluZyxcblxuXHRcdFx0ZXJyb3I6IHRydWUsXG5cblx0XHRcdG5vdDogIWNvZGVjLFxuXHRcdH07XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5nJyk7XG4iXX0=