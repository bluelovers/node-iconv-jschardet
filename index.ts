import iconvLite = require('iconv-lite');
import jschardet = require('jschardet');
import console from 'debug-color2/logger';

import encodingExists = iconvLite.encodingExists;

export * from './encoding';
export * from './lib/const';
import { codec_data, disableCodecDataWarn, IDetectData, vEncoding } from './encoding';
import { codecDataNameToUpperCase, CODEC_DATA_NAME_TO_UPPER_CASE, ENUM_NODE_ENCODING } from './lib/const';

export {
	encodingExists,

	/*
	codec_data,
	_enc,
	isNodeEncoding,
	NodeEncoding,
	*/

	jschardet,
	iconvLite,

	disableCodecDataWarn,
}

/**
 * 停用編碼檢測警告
 */
export function skipDecodeWarning(bool: boolean = true): boolean
{
	// @ts-ignore
	return iconvLite.skipDecodeWarning = bool;
}

/**
 * 將輸入內容轉換為 Buffer
 */
export function BufferFrom(str, encoding: vEncoding, from?: vEncoding): Buffer
{
	let data;

	if (from)
	{
		data = Buffer.from(str, from as BufferEncoding);
	}
	else
	{
		data = str;
	}

	data = decode(data);
	let buf = iconvLite.encode(data, encoding);

	return buf;
}

/**
 * 檢測輸入內容編碼
 */
export function detect(str, plus?: boolean)
{
	let ret = jschardet.detect(str) as any as IDetectData;

	if (plus)
	{
		let cd = codec_data(ret.encoding);
		if (cd)
		{
			if (cd.name)
			{
				ret.name = cd.name;
			}

			ret.id = cd.id;
		}
	}

	if (!ret.name)
	{
		ret.name = ret.encoding;
	}

	return ret;
}

/**
 * 檢測輸入內容編碼並且轉換為 字串
 */
export function decode(str, from: vEncoding = null): string
{
	let c;

	if (!str.length)
	{
		return '';
	}

	if (!from)
	{
		c = detect(str);
		from = c.encoding;
	}

	let data;

	let cd = codec_data(from);

	let key: string;

	if (cd && cd.name && !cd.not)
	{
		key = cd.name;
	}
	else
	{
		key = from;
	}

	switch (codecDataNameToUpperCase(key))
	{
		//case 'BIG5':
		//case 'GBK':
		//case 'GB2312':
		//case 'UTF-16LE':
		//case 'UTF-16BE':
		//case 'EUC-JP':
		//case 'SHIFT_JIS':
		case CODEC_DATA_NAME_TO_UPPER_CASE.BIG5:
		case CODEC_DATA_NAME_TO_UPPER_CASE.GBK:
		case CODEC_DATA_NAME_TO_UPPER_CASE.GB2312:
		case CODEC_DATA_NAME_TO_UPPER_CASE.UTF_16_LE:
		case CODEC_DATA_NAME_TO_UPPER_CASE.UTF_16_BE:
		case CODEC_DATA_NAME_TO_UPPER_CASE.EUC_JP:
		case CODEC_DATA_NAME_TO_UPPER_CASE.SHIFT_JIS:
			data = iconvLite.decode(str, from);
			break;
		//case 'ASCII':
		//case 'UTF-8':
		case CODEC_DATA_NAME_TO_UPPER_CASE.ASCII:
		case CODEC_DATA_NAME_TO_UPPER_CASE.UTF_8:
			data = str;
			break;
		default:
			c = c || detect(str);

			// @ts-ignore
			if (!iconvLite.skipDecodeWarning)
			{
				console.warn('decode', from, c);
			}

			//data = str;
			data = iconvLite.decode(str, from);
			break;
	}

	return data;
}

/**
 * 檢測輸入內容編碼並且轉換為 Buffer
 */
export function encode(str, to: vEncoding = ENUM_NODE_ENCODING.UTF8, from: vEncoding = null): Buffer
{
	let buf = BufferFrom(str, ENUM_NODE_ENCODING.UTF8);

	// @ts-ignore
	return iconvLite.encode(buf, to);
}

export default exports as typeof import('./index');
