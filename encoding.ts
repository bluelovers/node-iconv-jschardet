import * as iconv from './iconv';
import * as iconvLite from 'iconv-lite';

export function _enc(encoding: string): string
{
	return encoding.toString().toLowerCase().replace(/[^0-9a-z]|:\d{4}$/g, '');
}

export interface IEncodingCodec
{
	key?: string,
	key2?: string,

	id?: string,

	name?: string,
	input?: string,

	error?: boolean,
	not?: boolean,
}

export interface IEncodingCodecTable
{
	big5hkscs: IEncodingCodec,
	cp936: IEncodingCodec,
	eucjp: IEncodingCodec,
	shiftjis: IEncodingCodec,
	utf8: IEncodingCodec,
	ucs2: IEncodingCodec,
	utf16be: IEncodingCodec,
	utf32be: IEncodingCodec,
	utf32le: IEncodingCodec,

	[key: string]: IEncodingCodec,
}

export function codec_data(encoding: iconv.vEncoding): IEncodingCodec
{
	let codec: {
		encodingName?: string,
		enc?: string,
	};
	let enc: string;
	let enc2: string;

	if (!codec_table[enc = _enc(encoding)])
	{
		try
		{
			// @ts-ignore
			codec = iconvLite.getCodec(encoding);
			enc2 = codec.encodingName || codec.enc;

			if (codec_table[enc2])
			{
				enc = enc2;
			}
		}
		catch (e)
		{

		}
	}

	if (codec_table[enc])
	{
		codec_table[enc].key = codec_table[enc].key || enc;
		codec_table[enc].id = codec_table[enc].id || enc;

		codec_table[enc].input = encoding;

		return codec_table[enc];
	}

	console.warn(encoding, enc, enc2, codec);

	if (enc2)
	{
		return {
			key: enc,
			key2: enc2,

			input: encoding,

			error: true,

			not: !codec,
		};
	}
	else
	{
		return null;
	}
}

export const codec_table: IEncodingCodecTable = {
	big5hkscs: {
		id: 'big5',
		name: 'Big5',
	},
	cp936: {
		name: 'GB2312',
	},
	eucjp: {
		name: 'UC-JP',
	},
	shiftjis: {
		name: 'SHIFT_JIS',
	},

	//------------------

	utf8: {
		name: 'UTF-8',
	},
	ucs2: {
		name: 'UTF-16LE',
	},

	//------------------

	utf16be: {
		name: 'UTF-16BE',
	},

	/**
	 * Error: Encoding not recognized: '' (searched as: '')
	 */
	utf32be: {
		name: 'UTF-32BE',
		not: true,
	},
	utf32le: {
		name: 'UTF-32LE',
		not: true,
	},
};

import * as self from './encoding';
export default self;
