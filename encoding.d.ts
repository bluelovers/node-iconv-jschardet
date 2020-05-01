import { IEncodingCodec, vEncoding } from './lib/const';
export * from './lib/const';
export declare function isNodeEncoding(encoding: vEncoding): string;
export declare function disableCodecDataWarn(bool?: boolean): boolean;
export declare function codec_data(encoding: vEncoding): IEncodingCodec;
declare const _default: typeof import("./encoding");
export default _default;
