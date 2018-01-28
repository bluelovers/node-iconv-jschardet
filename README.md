# iconv-jschardet

> Convert/auto-detection Character encodings  in JavaScript ( iconv-lite, jschardet )

`npm install iconv-jschardet`

## demo

see [fs-iconv](https://www.npmjs.com/package/fs-iconv)

### BufferFrom

```ts
import * as iconv from 'iconv-jschardet';

import iconv from 'iconv-jschardet';
```

```js
const BIG5_HEX = 'a6b8b160a5ceb0eaa672bcd0b7c7a672c5e9aaed';

// utf8 buffer
iconv.BufferFrom(Buffer.from(BIG5_HEX, 'hex'), 'utf8')
iconv.BufferFrom(BIG5_HEX, 'utf8', 'hex')

// big5 buffer
iconv.BufferFrom(Buffer.from(BIG5_HEX, 'hex'), 'big5')
iconv.BufferFrom(BIG5_HEX, 'big5', 'hex')
```

### iconv

```js
const BIG5_STR = "\xa6\xb8\xb1\x60\xa5\xce\xb0\xea\xa6\x72\xbc\xd0\xb7\xc7\xa6\x72\xc5\xe9\xaa\xed";
const BIG5_BUF = Buffer.from('a6b8b160a5ceb0eaa672bcd0b7c7a672c5e9aaed', 'hex');

const BIG5_UTF8_BUF = Buffer.from('e6 ac a1 e5 b8 b8 e7 94 a8 e5 9c 8b e5 ad 97 e6 a8 99 e6 ba 96 e5 ad 97 e9 ab 94 e8 a1 a8'.replace(/\s/g, ''), 'hex');
```

```ts
// same as jschardet.detect
iconv.detect(BIG5_STR);
iconv.detect(BIG5_BUF);

// big5 buffer
iconv.encode(BIG5_STR, 'big5');
iconv.encode(BIG5_BUF, 'big5');
// utf8 buffer
iconv.encode(BIG5_STR, 'utf8');
iconv.encode(BIG5_BUF, 'utf8');

// utf8 string
iconv.decode(BIG5_STR);
iconv.decode(BIG5_BUF);
```

```ts
iconv.skipDecodeWarning(bool: boolean = true)
iconv.disableCodecDataWarn(bool: boolean = true)
```
