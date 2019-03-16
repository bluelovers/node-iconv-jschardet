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
var EnumEncoding;
(function (EnumEncoding) {
    EnumEncoding["BIG5"] = "Big5";
    EnumEncoding["UTF8"] = "UTF-8";
    EnumEncoding["GBK"] = "Gbk";
})(EnumEncoding = exports.EnumEncoding || (exports.EnumEncoding = {}));
function skipDecodeWarning(bool = true) {
    // @ts-ignore
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
            // @ts-ignore
            if (!iconvLite.skipDecodeWarning) {
                encoding_1.console.warn('decode', from, c);
            }
            //data = str;
            data = iconvLite.decode(str, from);
            break;
    }
    return data;
}
exports.decode = decode;
function encode(str, to = 'utf8', from = null) {
    let buf = BufferFrom(str, 'utf8');
    // @ts-ignore
    return iconvLite.encode(buf, to);
}
exports.encode = encode;
exports.default = exports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUF5QztBQW1CeEMsOEJBQVM7QUFsQlYsdUNBQXdDO0FBaUJ2Qyw4QkFBUztBQWZWLElBQU8sY0FBYyxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUE7QUFNL0Msd0NBQWM7QUFKZixnQ0FBMkI7QUFDM0IseUNBQTJHO0FBZTFHLCtCQWZ3RCwrQkFBb0IsQ0FleEQ7QUFHckIsSUFBWSxZQUtYO0FBTEQsV0FBWSxZQUFZO0lBRXZCLDZCQUFhLENBQUE7SUFDYiw4QkFBYyxDQUFBO0lBQ2QsMkJBQVcsQ0FBQTtBQUNaLENBQUMsRUFMVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUt2QjtBQUlELFNBQWdCLGlCQUFpQixDQUFDLE9BQWdCLElBQUk7SUFFckQsYUFBYTtJQUNiLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUMzQyxDQUFDO0FBSkQsOENBSUM7QUFFRCxTQUFnQixVQUFVLENBQUMsR0FBRyxFQUFFLFFBQW1CLEVBQUUsSUFBZ0I7SUFFcEUsSUFBSSxJQUFJLENBQUM7SUFFVCxJQUFJLElBQUksRUFDUjtRQUNDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QjtTQUVEO1FBQ0MsSUFBSSxHQUFHLEdBQUcsQ0FBQztLQUNYO0lBRUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUzQyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFqQkQsZ0NBaUJDO0FBV0QsU0FBZ0IsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFjO0lBUXpDLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUF1QixDQUFDO0lBRXRELElBQUksSUFBSSxFQUNSO1FBQ0MsSUFBSSxFQUFFLEdBQUcscUJBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxFQUFFLEVBQ047WUFDQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQ1g7Z0JBQ0MsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ25CO1lBRUQsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2Y7S0FDRDtJQUVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUNiO1FBQ0MsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBOUJELHdCQThCQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBa0IsSUFBSTtJQUVqRCxJQUFJLENBQUMsQ0FBQztJQUVOLElBQUksQ0FBQyxJQUFJLEVBQ1Q7UUFDQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0tBQ2xCO0lBRUQsSUFBSSxJQUFJLENBQUM7SUFFVCxJQUFJLEVBQUUsR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLElBQUksR0FBVyxDQUFDO0lBRWhCLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUM1QjtRQUNDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Q7U0FFRDtRQUNDLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDWDtJQUVELFFBQVEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUN6QjtRQUNDLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxLQUFLLENBQUM7UUFDWCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssVUFBVSxDQUFDO1FBQ2hCLEtBQUssVUFBVSxDQUFDO1FBQ2hCLEtBQUssT0FBTyxDQUFDO1FBQ2IsS0FBSyxXQUFXO1lBQ2YsSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLE1BQU07UUFDUCxLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssT0FBTztZQUNYLElBQUksR0FBRyxHQUFHLENBQUM7WUFDWCxNQUFNO1FBQ1A7WUFDQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyQixhQUFhO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7Z0JBQ0Msa0JBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUVELGFBQWE7WUFDYixJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsTUFBTTtLQUNQO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBdkRELHdCQXVEQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBZ0IsTUFBTSxFQUFFLE9BQWtCLElBQUk7SUFFekUsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVsQyxhQUFhO0lBQ2IsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBTkQsd0JBTUM7QUFFRCxrQkFBZSxPQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGljb252TGl0ZSA9IHJlcXVpcmUoJ2ljb252LWxpdGUnKTtcbmltcG9ydCBqc2NoYXJkZXQgPSByZXF1aXJlKCdqc2NoYXJkZXQnKTtcblxuaW1wb3J0IGVuY29kaW5nRXhpc3RzID0gaWNvbnZMaXRlLmVuY29kaW5nRXhpc3RzXG5cbmV4cG9ydCAqIGZyb20gJy4vZW5jb2RpbmcnO1xuaW1wb3J0IHsgY29kZWNfZGF0YSwgX2VuYywgaXNOb2RlRW5jb2RpbmcsIE5vZGVFbmNvZGluZywgZGlzYWJsZUNvZGVjRGF0YVdhcm4sIGNvbnNvbGUgfSBmcm9tICcuL2VuY29kaW5nJztcblxuZXhwb3J0IHtcblx0ZW5jb2RpbmdFeGlzdHMsXG5cblx0Lypcblx0Y29kZWNfZGF0YSxcblx0X2VuYyxcblx0aXNOb2RlRW5jb2RpbmcsXG5cdE5vZGVFbmNvZGluZyxcblx0Ki9cblxuXHRqc2NoYXJkZXQsXG5cdGljb252TGl0ZSxcblxuXHRkaXNhYmxlQ29kZWNEYXRhV2Fybixcbn1cblxuZXhwb3J0IGVudW0gRW51bUVuY29kaW5nXG57XG5cdEJJRzUgPSAnQmlnNScsXG5cdFVURjggPSAnVVRGLTgnLFxuXHRHQksgPSAnR2JrJyxcbn1cblxuZXhwb3J0IHR5cGUgdkVuY29kaW5nID0gJ0JpZzUnIHwgJ1VURi04JyB8ICdHYmsnIHwgc3RyaW5nIHwgbnVsbCB8IEVudW1FbmNvZGluZztcblxuZXhwb3J0IGZ1bmN0aW9uIHNraXBEZWNvZGVXYXJuaW5nKGJvb2w6IGJvb2xlYW4gPSB0cnVlKTogYm9vbGVhblxue1xuXHQvLyBAdHMtaWdub3JlXG5cdHJldHVybiBpY29udkxpdGUuc2tpcERlY29kZVdhcm5pbmcgPSBib29sO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnVmZmVyRnJvbShzdHIsIGVuY29kaW5nOiB2RW5jb2RpbmcsIGZyb20/OiB2RW5jb2RpbmcpOiBCdWZmZXJcbntcblx0bGV0IGRhdGE7XG5cblx0aWYgKGZyb20pXG5cdHtcblx0XHRkYXRhID0gQnVmZmVyLmZyb20oc3RyLCBmcm9tKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRkYXRhID0gc3RyO1xuXHR9XG5cblx0ZGF0YSA9IGRlY29kZShkYXRhKTtcblx0bGV0IGJ1ZiA9IGljb252TGl0ZS5lbmNvZGUoZGF0YSwgZW5jb2RpbmcpO1xuXG5cdHJldHVybiBidWY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURldGVjdERhdGFcbntcblx0ZW5jb2Rpbmc6IHN0cmluZyxcblx0Y29uZmlkZW5jZTogbnVtYmVyLFxuXG5cdG5hbWU/OiBzdHJpbmcsXG5cdGlkPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0KHN0ciwgcGx1cz86IGJvb2xlYW4pOiB7XG5cdGVuY29kaW5nOiBzdHJpbmcsXG5cdGNvbmZpZGVuY2U6IG51bWJlcixcblxuXHRuYW1lPzogc3RyaW5nLFxuXHRpZD86IHN0cmluZyxcbn1cbntcblx0bGV0IHJldCA9IGpzY2hhcmRldC5kZXRlY3Qoc3RyKSBhcyBhbnkgYXMgSURldGVjdERhdGE7XG5cblx0aWYgKHBsdXMpXG5cdHtcblx0XHRsZXQgY2QgPSBjb2RlY19kYXRhKHJldC5lbmNvZGluZyk7XG5cdFx0aWYgKGNkKVxuXHRcdHtcblx0XHRcdGlmIChjZC5uYW1lKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXQubmFtZSA9IGNkLm5hbWU7XG5cdFx0XHR9XG5cblx0XHRcdHJldC5pZCA9IGNkLmlkO1xuXHRcdH1cblx0fVxuXG5cdGlmICghcmV0Lm5hbWUpXG5cdHtcblx0XHRyZXQubmFtZSA9IHJldC5lbmNvZGluZztcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUoc3RyLCBmcm9tOiB2RW5jb2RpbmcgPSBudWxsKTogc3RyaW5nXG57XG5cdGxldCBjO1xuXG5cdGlmICghZnJvbSlcblx0e1xuXHRcdGMgPSBkZXRlY3Qoc3RyKTtcblx0XHRmcm9tID0gYy5lbmNvZGluZztcblx0fVxuXG5cdGxldCBkYXRhO1xuXG5cdGxldCBjZCA9IGNvZGVjX2RhdGEoZnJvbSk7XG5cblx0bGV0IGtleTogc3RyaW5nO1xuXG5cdGlmIChjZCAmJiBjZC5uYW1lICYmICFjZC5ub3QpXG5cdHtcblx0XHRrZXkgPSBjZC5uYW1lO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdGtleSA9IGZyb207XG5cdH1cblxuXHRzd2l0Y2ggKGtleS50b1VwcGVyQ2FzZSgpKVxuXHR7XG5cdFx0Y2FzZSAnQklHNSc6XG5cdFx0Y2FzZSAnR0JLJzpcblx0XHRjYXNlICdHQjIzMTInOlxuXHRcdGNhc2UgJ1VURi0xNkxFJzpcblx0XHRjYXNlICdVVEYtMTZCRSc6XG5cdFx0Y2FzZSAnVUMtSlAnOlxuXHRcdGNhc2UgJ1NISUZUX0pJUyc6XG5cdFx0XHRkYXRhID0gaWNvbnZMaXRlLmRlY29kZShzdHIsIGZyb20pO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnQVNDSUknOlxuXHRcdGNhc2UgJ1VURi04Jzpcblx0XHRcdGRhdGEgPSBzdHI7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0YyA9IGMgfHwgZGV0ZWN0KHN0cik7XG5cblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGlmICghaWNvbnZMaXRlLnNraXBEZWNvZGVXYXJuaW5nKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ2RlY29kZScsIGZyb20sIGMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2RhdGEgPSBzdHI7XG5cdFx0XHRkYXRhID0gaWNvbnZMaXRlLmRlY29kZShzdHIsIGZyb20pO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZShzdHIsIHRvOiB2RW5jb2RpbmcgPSAndXRmOCcsIGZyb206IHZFbmNvZGluZyA9IG51bGwpOiBCdWZmZXJcbntcblx0bGV0IGJ1ZiA9IEJ1ZmZlckZyb20oc3RyLCAndXRmOCcpO1xuXG5cdC8vIEB0cy1pZ25vcmVcblx0cmV0dXJuIGljb252TGl0ZS5lbmNvZGUoYnVmLCB0byk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHMgYXMgdHlwZW9mIGltcG9ydCgnLi9pbmRleCcpO1xuIl19