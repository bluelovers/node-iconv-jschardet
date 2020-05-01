/**
 * Created by user on 2019/3/21.
 */

export const enum CODEC_DATA_NAME
{
	BIG5 = 'Big5',
	GBK = 'GBK',
	GB2312 = 'GB2312',
	UTF_16_LE = 'UTF-16LE',
	UTF_16_BE = 'UTF-16BE',
	EUC_JP = 'EUC-JP',
	SHIFT_JIS = 'SHIFT_JIS',
	ASCII = 'ASCII',
	UTF_8 = 'UTF-8',

	UTF_32_LE = 'UTF-32LE',
	UTF_32_BE = 'UTF-32BE',
}

export const enum CODEC_DATA_NAME_TO_UPPER_CASE
{
	BIG5 = 'BIG5',
	GBK = 'GBK',
	GB2312 = 'GB2312',
	UTF_16_LE = 'UTF-16LE',
	UTF_16_BE = 'UTF-16BE',
	EUC_JP = 'EUC-JP',
	SHIFT_JIS = 'SHIFT_JIS',
	ASCII = 'ASCII',
	UTF_8 = 'UTF-8',

	UTF_32_LE = 'UTF-32LE',
	UTF_32_BE = 'UTF-32BE',
}

export const enum CODEC_DATA_ENCODING_ID
{
	big5hkscs = 'big5hkscs',
	cp936 = 'cp936',
	gbk = 'gbk',
	eucjp = 'eucjp',
	shiftjis = 'shiftjis',
	utf8 = 'utf8',
	ucs2 = 'ucs2',
	utf16be = 'utf16be',
	utf32be = 'utf32be',
	utf32le = 'utf32le',

	// ------------

	GBK = 'gbk',

	EUC_JP = 'eucjp',

	SHIFT_JIS = 'shiftjis',

	UTF_8 = 'utf8',

	UTF_16_BE = 'utf16be',

	UTF_32_LE = 'utf32le',
	UTF_32_BE = 'utf32be',

	// ----------

	ascii = 'ascii',
	ASCII = 'ASCII',
}

export interface IEncodingCodec
{
	key?: CODEC_DATA_ENCODING_ID | string,
	key2?: CODEC_DATA_ENCODING_ID | string,

	id?: CODEC_DATA_ENCODING_ID | string,

	name?: CODEC_DATA_NAME | string,
	input?: EnumEncoding | string,

	error?: boolean,
	not?: boolean,
}

export interface IEncodingCodecTable
{
	[CODEC_DATA_ENCODING_ID.big5hkscs]: IEncodingCodec & {
		readonly id: "big5";
		readonly name: CODEC_DATA_NAME.BIG5;
	};
	[CODEC_DATA_ENCODING_ID.cp936]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.GB2312;
	};
	[CODEC_DATA_ENCODING_ID.gbk]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.GBK;
	};
	[CODEC_DATA_ENCODING_ID.eucjp]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.EUC_JP;
	};
	[CODEC_DATA_ENCODING_ID.shiftjis]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.SHIFT_JIS;
	};
	[CODEC_DATA_ENCODING_ID.utf8]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.UTF_8;
	};
	[CODEC_DATA_ENCODING_ID.ucs2]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.UTF_16_LE;
	};
	[CODEC_DATA_ENCODING_ID.utf16be]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.UTF_16_BE;
	};
	[CODEC_DATA_ENCODING_ID.utf32be]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.UTF_32_BE;
		readonly not: true;
	};
	[CODEC_DATA_ENCODING_ID.utf32le]: IEncodingCodec & {
		readonly name: CODEC_DATA_NAME.UTF_32_LE;
		readonly not: true;
	};

	[key: string]: IEncodingCodec,
}

export const enum ENUM_NODE_ENCODING
{
	ASCII = 'ascii',

	UTF8 = 'utf8',
	UTF_8 = 'utf-8',

	UTF16_LE = 'utf16le',
	UCS2 = 'ucs2',

	BASE64 = 'base64',

	LATIN1 = 'latin1',
	BINARY = 'binary',

	HEX = 'hex',
}

export const NodeEncoding: ENUM_NODE_ENCODING[] = [
	ENUM_NODE_ENCODING.ASCII,

	ENUM_NODE_ENCODING.UTF8,
	ENUM_NODE_ENCODING.UTF_8,

	ENUM_NODE_ENCODING.UTF16_LE,
	ENUM_NODE_ENCODING.UCS2,

	ENUM_NODE_ENCODING.BASE64,

	ENUM_NODE_ENCODING.LATIN1,
	ENUM_NODE_ENCODING.BINARY,

	ENUM_NODE_ENCODING.HEX,
];

export const codec_table: IEncodingCodecTable = {
	[CODEC_DATA_ENCODING_ID.big5hkscs]: _codecTable({
		id: 'big5',
		name: CODEC_DATA_NAME.BIG5,
	} as const),
	[CODEC_DATA_ENCODING_ID.cp936]: _codecTable({
		name: CODEC_DATA_NAME.GB2312,
	} as const),

	[CODEC_DATA_ENCODING_ID.gbk]: _codecTable({
		name: CODEC_DATA_NAME.GBK,
	} as const),

	[CODEC_DATA_ENCODING_ID.eucjp]: _codecTable({
		name: CODEC_DATA_NAME.EUC_JP,
	} as const),
	[CODEC_DATA_ENCODING_ID.shiftjis]: _codecTable({
		name: CODEC_DATA_NAME.SHIFT_JIS,
	} as const),

	//------------------

	[CODEC_DATA_ENCODING_ID.utf8]: _codecTable({
		name: CODEC_DATA_NAME.UTF_8,
	} as const),
	[CODEC_DATA_ENCODING_ID.ucs2]: _codecTable({
		name: CODEC_DATA_NAME.UTF_16_LE,
	} as const),

	//------------------

	[CODEC_DATA_ENCODING_ID.utf16be]: _codecTable({
		name: CODEC_DATA_NAME.UTF_16_BE,
	} as const),

	/**
	 * Error: Encoding not recognized: '' (searched as: '')
	 */
	[CODEC_DATA_ENCODING_ID.utf32be]: _codecTable({
		name: CODEC_DATA_NAME.UTF_32_BE,
		not: true,
	} as const),
	[CODEC_DATA_ENCODING_ID.utf32le]: _codecTable({
		name: CODEC_DATA_NAME.UTF_32_LE,
		not: true,
	} as const),
};

export enum EnumEncoding
{
	BIG5 = 'Big5',
	UTF8 = 'UTF-8',
	GBK = 'Gbk',
}

export type vNodeEncoding = string | null | ENUM_NODE_ENCODING | BufferEncoding;
export type vEncoding = string | null | EnumEncoding | ENUM_NODE_ENCODING | BufferEncoding;

export interface IDetectData
{
	encoding: string,
	confidence: number,

	name?: string,
	id?: CODEC_DATA_ENCODING_ID | string,
}

export function codecDataNameToUpperCase<T extends keyof typeof CODEC_DATA_NAME_TO_UPPER_CASE>(key: (typeof CODEC_DATA_NAME_TO_UPPER_CASE | typeof CODEC_DATA_NAME)[T]): (typeof CODEC_DATA_NAME_TO_UPPER_CASE)[T]
export function codecDataNameToUpperCase(key: IDetectData["name"]): CODEC_DATA_NAME_TO_UPPER_CASE | string
export function codecDataNameToUpperCase(key: IDetectData["name"]): CODEC_DATA_NAME_TO_UPPER_CASE | string
{
	return key.toUpperCase()
}

export function _codecTable<T extends Partial<IEncodingCodec>>(data: T): IEncodingCodec & T
{
	return data;
}

/**
 * 返回小寫標準化後的編碼 ID
 */
export function _enc(encoding: string | CODEC_DATA_NAME | CODEC_DATA_NAME_TO_UPPER_CASE | ENUM_NODE_ENCODING): CODEC_DATA_ENCODING_ID | string
/**
 * 返回小寫標準化後的編碼 ID
 */
export function _enc<T extends CODEC_DATA_ENCODING_ID | string>(encoding: string | CODEC_DATA_NAME | CODEC_DATA_NAME_TO_UPPER_CASE | ENUM_NODE_ENCODING): T
export function _enc(encoding: string | CODEC_DATA_NAME | CODEC_DATA_NAME_TO_UPPER_CASE | ENUM_NODE_ENCODING): CODEC_DATA_ENCODING_ID | string
{
	if (encoding == null)
	{
		throw new Error(`encoding '${encoding}' is broken`);
	}

	return encoding
		.toString()
		.toLowerCase()
		.replace(/[^0-9a-z]|:\d{4}$/g, '')
		;
}

export default exports as typeof import('./const');
