import * as iconv from './iconv';
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
export declare function codec_data(encoding: iconv.vEncoding): IEncodingCodec;
export declare const codec_table: IEncodingCodecTable;
import * as self from './encoding';
export default self;
