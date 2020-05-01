/**
 * Created by user on 2018/1/27/027.
 */

import * as self from '../';

/**
 * 次常用國字標準字體表
 */
const BIG5_STR = "\xa6\xb8\xb1\x60\xa5\xce\xb0\xea\xa6\x72\xbc\xd0\xb7\xc7\xa6\x72\xc5\xe9\xaa\xed";
const BIG5_BUF = Buffer.from('a6b8b160a5ceb0eaa672bcd0b7c7a672c5e9aaed', 'hex');

const BIG5_UTF8_BUF = Buffer.from('e6 ac a1 e5 b8 b8 e7 94 a8 e5 9c 8b e5 ad 97 e6 a8 99 e6 ba 96 e5 ad 97 e9 ab 94 e8 a1 a8'.replace(/\s/g, ''), 'hex');

self.skipDecodeWarning();

// @ts-ignore
describe(`check encoding`, () =>
{
	// @ts-ignore
	it(`BIG5_STR`, function (done)
	{
		let c = self.detect(BIG5_STR);

		expect(c.name).toBe('Big5');
		expect(c.encoding).toBe('Big5');

		expect(c).toMatchSnapshot();

		done();
	});

	// @ts-ignore
	it(`BIG5_BUF`, function (done)
	{
		let c = self.detect(BIG5_BUF);

		expect(c.name).toBe('Big5');
		expect(c.encoding).toBe('Big5');

		expect(c).toMatchSnapshot();

		done();
	});
});

// @ts-ignore
describe(`iconv`, () =>
{
	// @ts-ignore
	it(`encode big5`, function (done)
	{
		//console.log('it:inner', currentTest.title);
		//console.log('it:inner', currentTest.fullTitle());

		//expect(r).to.be.ok;
		//assert.isOk(r.value, util.inspect(r));

		let data = self.encode(BIG5_STR, 'big5');

		let c = self.detect(data);

		expect(c.name).toBe('Big5');
		expect(c.encoding).toBe('Big5');

		expect(c).toMatchSnapshot();
		expect(data).toMatchSnapshot();

		done();
	});
	// @ts-ignore
	it(`encode big5`, function (done)
	{
		//console.log('it:inner', currentTest.title);
		//console.log('it:inner', currentTest.fullTitle());

		//expect(r).to.be.ok;
		//assert.isOk(r.value, util.inspect(r));

		let data = self.encode(BIG5_BUF, 'big5');

		let c = self.detect(data, true);

		expect(c.name).toBe('Big5');
		expect(c.encoding).toBe('Big5');

		expect(c).toMatchSnapshot();
		expect(data).toMatchSnapshot();

		done();
	});

	// @ts-ignore
	it(`encode`, function (done)
	{
		let data = self.encode(BIG5_STR);

		let c = self.detect(data);

		expect(c.name).toBe('UTF-8');
		expect(c.encoding).toBe('UTF-8');

		expect(data).toEqual(BIG5_UTF8_BUF);

		expect(c).toMatchSnapshot();
		expect(data).toMatchSnapshot();

		done();
	});

	// @ts-ignore
	it(`encode`, function (done)
	{
		//console.log('it:inner', currentTest.title);
		//console.log('it:inner', currentTest.fullTitle());

		//expect(r).to.be.ok;
		//assert.isOk(r.value, util.inspect(r));

		let data = self.encode(BIG5_BUF);

		let c = self.detect(data);

		expect(c.name).toBe('UTF-8');
		expect(c.encoding).toBe('UTF-8');

		expect(data).toEqual(BIG5_UTF8_BUF);

		expect(c).toMatchSnapshot();
		expect(data).toMatchSnapshot();

		done();
	});
});
