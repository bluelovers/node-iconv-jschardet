import iconv = require('./index');
import { console } from 'debug-color2';
export { console };
export declare function _enc(encoding: string): string;
export interface IEncodingCodec {
    key?: string;
    key2?: string;
    id?: string;
    name?: string;
    input?: string;
    error?: boolean;
    not?: boolean;
}
export interface IEncodingCodecTable {
    big5hkscs: IEncodingCodec;
    cp936: IEncodingCodec;
    eucjp: IEncodingCodec;
    shiftjis: IEncodingCodec;
    utf8: IEncodingCodec;
    ucs2: IEncodingCodec;
    utf16be: IEncodingCodec;
    utf32be: IEncodingCodec;
    utf32le: IEncodingCodec;
    [key: string]: IEncodingCodec;
}
export declare const NodeEncoding: string[];
export declare function isNodeEncoding(encoding: string): string;
export declare function disableCodecDataWarn(bool?: boolean): boolean;
export declare function codec_data(encoding: iconv.vEncoding): IEncodingCodec;
export declare const codec_table: IEncodingCodecTable;
declare const _default: typeof import("./encoding");
export default _default;
