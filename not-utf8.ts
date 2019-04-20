/**
 * Created by user on 2019/3/21.
 */
import { CODEC_DATA_ENCODING_ID, detect } from './index';
import { _enc } from './lib/const';

/**
 * 檢測 Buffer 並且返回小寫標準化後的編碼 ID
 */
export function detectEncoding<T extends CODEC_DATA_ENCODING_ID | string>(buf: Buffer): T
{
	let chk = detect(buf);
	return _enc<T>(chk.encoding);
}

/**
 * 當 Buffer 編碼不屬於 UTF-8 或者 ascii 時
 * 返回編碼資訊
 */
export function notUTF8Buffer(buf: Buffer)
{
	let chk = detect(buf, true);
	let encoding = _enc(chk.encoding);

	return (encoding === CODEC_DATA_ENCODING_ID.utf8 || encoding === CODEC_DATA_ENCODING_ID.ascii) ? null : chk;
}

/**
 * 當 Buffer | string 編碼不屬於 UTF-8 或者 ascii 時
 * 返回編碼資訊
 */
export function notUTF8(buf: Buffer | string)
{
	if (!Buffer.isBuffer(buf))
	{
		buf = Buffer.from(buf)
	}

	return notUTF8Buffer(buf)
}

export default exports as typeof import('./not-utf8');
