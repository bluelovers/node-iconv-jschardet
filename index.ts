import * as iconvLite from 'iconv-lite';
import { encodingExists } from 'iconv-lite';
import * as jschardet from 'jschardet';
import { codec_data } from './encoding';

export {
	encodingExists,
	codec_data,
}

export type vEncoding = 'Big5' | 'UTF-8' | 'Gbk' | string | null;

export function skipDecodeWarning(bool: boolean = true)
{
	// @ts-ignore
	return iconvLite.skipDecodeWarning = bool;
}

export function BufferFrom(str, encoding: vEncoding, from?: vEncoding): Buffer
{
	let data;

	if (from)
	{
		data = Buffer.from(str, from);
	}
	else
	{
		data = str;
	}

	data = decode(data);
	let buf = iconvLite.encode(data, encoding);

	return buf;
}

export function detect(str, plus?: boolean): {
	encoding: string,
	confidence: number,

	name?: string,
	id?: string,
}
{
	let ret = jschardet.detect(str);

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

export function decode(str, from: vEncoding = null): string
{
	let c;

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

	switch (key.toUpperCase())
	{
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
			console.warn('decode', from, c);

			//data = str;
			data = iconvLite.decode(str, from);
			break;
	}

	return data;
}

export function encode(str, to: vEncoding = 'utf8', from: vEncoding = null): Buffer
{
	let buf = BufferFrom(str, 'utf8');

	// @ts-ignore
	return iconvLite.encode(buf, to);
}

import * as self from './index';
export default self;
