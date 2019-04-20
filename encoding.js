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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbmNvZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUF5QztBQUN6QywrQ0FBdUM7QUFJOUIsa0JBSkEsc0JBQU8sQ0FJQTtBQUhoQix1Q0FBNkc7QUFFN0csaUNBQTRCO0FBRzVCLFNBQWdCLGNBQWMsQ0FBQyxRQUFtQjtJQUVqRCxJQUFJLEdBQUcsR0FBRyxZQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsT0FBTyxvQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFJLENBQXFCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQy9FLENBQUM7QUFKRCx3Q0FJQztBQUVELElBQUksdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLFNBQWdCLG9CQUFvQixDQUFDLE9BQWdCLElBQUk7SUFFeEQsT0FBTyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7QUFDdkMsQ0FBQztBQUhELG9EQUdDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLFFBQW1CO0lBRTdDLElBQUksS0FHSCxDQUFDO0lBQ0YsSUFBSSxHQUFXLENBQUM7SUFDaEIsSUFBSSxJQUFZLENBQUM7SUFFakIsSUFBSSxDQUFDLG1CQUFXLENBQUMsR0FBRyxHQUFHLFlBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUN0QztRQUNDLElBQ0E7WUFDQyxhQUFhO1lBQ2IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUV2QyxJQUFJLG1CQUFXLENBQUMsSUFBSSxDQUFDLEVBQ3JCO2dCQUNDLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDWDtTQUNEO1FBQ0QsT0FBTyxDQUFDLEVBQ1I7U0FFQztLQUNEO0lBRUQsSUFBSSxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxFQUNwQjtRQUNDLG1CQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLG1CQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNuRCxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFFakQsbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBRWxDLE9BQU8sbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QjtJQUVELElBQUksQ0FBQyx1QkFBdUIsRUFDNUI7UUFDQyxzQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN6QztJQUVELElBQUksSUFBSSxFQUNSO1FBQ0MsT0FBTztZQUNOLEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFFVixLQUFLLEVBQUUsUUFBUTtZQUVmLEtBQUssRUFBRSxJQUFJO1lBRVgsR0FBRyxFQUFFLENBQUMsS0FBSztTQUNYLENBQUM7S0FDRjtTQUVEO1FBQ0MsT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUE1REQsZ0NBNERDO0FBRUQsa0JBQWUsT0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY29udkxpdGUgPSByZXF1aXJlKCdpY29udi1saXRlJyk7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSAnZGVidWctY29sb3IyJztcbmltcG9ydCB7IF9lbmMsIGNvZGVjX3RhYmxlLCBFTlVNX05PREVfRU5DT0RJTkcsIElFbmNvZGluZ0NvZGVjLCBOb2RlRW5jb2RpbmcsIHZFbmNvZGluZyB9IGZyb20gJy4vbGliL2NvbnN0JztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvY29uc3QnO1xuZXhwb3J0IHsgY29uc29sZSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVFbmNvZGluZyhlbmNvZGluZzogdkVuY29kaW5nKTogc3RyaW5nXG57XG5cdGxldCBlbmMgPSBfZW5jKGVuY29kaW5nKTtcblx0cmV0dXJuIE5vZGVFbmNvZGluZy5pbmNsdWRlcyhfZW5jPEVOVU1fTk9ERV9FTkNPRElORz4oZW5jb2RpbmcpKSA/IGVuYyA6IG51bGw7XG59XG5cbmxldCBESVNBQkxFX0NPREVDX0RBVEFfV0FSTiA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUNvZGVjRGF0YVdhcm4oYm9vbDogYm9vbGVhbiA9IHRydWUpXG57XG5cdHJldHVybiBESVNBQkxFX0NPREVDX0RBVEFfV0FSTiA9IGJvb2w7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2RlY19kYXRhKGVuY29kaW5nOiB2RW5jb2RpbmcpOiBJRW5jb2RpbmdDb2RlY1xue1xuXHRsZXQgY29kZWM6IHtcblx0XHRlbmNvZGluZ05hbWU/OiBzdHJpbmcsXG5cdFx0ZW5jPzogc3RyaW5nLFxuXHR9O1xuXHRsZXQgZW5jOiBzdHJpbmc7XG5cdGxldCBlbmMyOiBzdHJpbmc7XG5cblx0aWYgKCFjb2RlY190YWJsZVtlbmMgPSBfZW5jKGVuY29kaW5nKV0pXG5cdHtcblx0XHR0cnlcblx0XHR7XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRjb2RlYyA9IGljb252TGl0ZS5nZXRDb2RlYyhlbmNvZGluZyk7XG5cdFx0XHRlbmMyID0gY29kZWMuZW5jb2RpbmdOYW1lIHx8IGNvZGVjLmVuYztcblxuXHRcdFx0aWYgKGNvZGVjX3RhYmxlW2VuYzJdKVxuXHRcdFx0e1xuXHRcdFx0XHRlbmMgPSBlbmMyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAoZSlcblx0XHR7XG5cblx0XHR9XG5cdH1cblxuXHRpZiAoY29kZWNfdGFibGVbZW5jXSlcblx0e1xuXHRcdGNvZGVjX3RhYmxlW2VuY10ua2V5ID0gY29kZWNfdGFibGVbZW5jXS5rZXkgfHwgZW5jO1xuXHRcdGNvZGVjX3RhYmxlW2VuY10uaWQgPSBjb2RlY190YWJsZVtlbmNdLmlkIHx8IGVuYztcblxuXHRcdGNvZGVjX3RhYmxlW2VuY10uaW5wdXQgPSBlbmNvZGluZztcblxuXHRcdHJldHVybiBjb2RlY190YWJsZVtlbmNdO1xuXHR9XG5cblx0aWYgKCFESVNBQkxFX0NPREVDX0RBVEFfV0FSTilcblx0e1xuXHRcdGNvbnNvbGUud2FybihlbmNvZGluZywgZW5jLCBlbmMyLCBjb2RlYyk7XG5cdH1cblxuXHRpZiAoZW5jMilcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IGVuYyxcblx0XHRcdGtleTI6IGVuYzIsXG5cblx0XHRcdGlucHV0OiBlbmNvZGluZyxcblxuXHRcdFx0ZXJyb3I6IHRydWUsXG5cblx0XHRcdG5vdDogIWNvZGVjLFxuXHRcdH07XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cyBhcyB0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5nJyk7XG4iXX0=