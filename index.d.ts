/// <reference types="node" />
import { encodingExists } from 'iconv-lite';
import { codec_data } from './encoding';
export { encodingExists, codec_data };
export declare type vEncoding = 'Big5' | 'UTF-8' | 'Gbk' | string | null;
export declare function skipDecodeWarning(bool?: boolean): boolean;
export declare function BufferFrom(str: any, encoding: vEncoding, from?: vEncoding): Buffer;
export declare function detect(str: any, plus?: boolean): {
    encoding: string;
    confidence: number;
    name?: string;
    id?: string;
};
export declare function decode(str: any, from?: vEncoding): string;
export declare function encode(str: any, to?: vEncoding, from?: vEncoding): Buffer;
import * as self from './index';
export default self;