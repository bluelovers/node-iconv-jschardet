/// <reference types="node" />
import iconvLite = require('iconv-lite');
import jschardet = require('jschardet');
import encodingExists = iconvLite.encodingExists;
export * from './encoding';
export * from './lib/const';
import { disableCodecDataWarn, IDetectData, vEncoding } from './encoding';
export { encodingExists, jschardet, iconvLite, disableCodecDataWarn, };
/**
 * 停用編碼檢測警告
 */
export declare function skipDecodeWarning(bool?: boolean): boolean;
/**
 * 將輸入內容轉換為 Buffer
 */
export declare function BufferFrom(str: any, encoding?: vEncoding, from?: vEncoding): Buffer;
/**
 * 檢測輸入內容編碼
 */
export declare function detect(str: any, plus?: boolean): IDetectData;
/**
 * 檢測輸入內容編碼並且轉換為 字串
 */
export declare function decode(str: any, from?: vEncoding): string;
/**
 * 檢測輸入內容編碼並且轉換為 Buffer
 */
export declare function encode(str: any, to?: vEncoding, from?: vEncoding): Buffer;
declare const _default: typeof import(".");
export default _default;
