/**
 * Created by user on 2018/1/27/027.
 */

import * as iconvLite from 'iconv-lite';
import localDev, { relative, expect, path, assert, util } from './_local-dev';

import * as self from '../';

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest;

	/**
	 * 次常用國字標準字體表
	 */
	const BIG5_STR = "\xa6\xb8\xb1\x60\xa5\xce\xb0\xea\xa6\x72\xbc\xd0\xb7\xc7\xa6\x72\xc5\xe9\xaa\xed";
	const BIG5_BUF = Buffer.from('a6b8b160a5ceb0eaa672bcd0b7c7a672c5e9aaed', 'hex');

	const BIG5_UTF8_BUF = Buffer.from('e6 ac a1 e5 b8 b8 e7 94 a8 e5 9c 8b e5 ad 97 e6 a8 99 e6 ba 96 e5 ad 97 e9 ab 94 e8 a1 a8'.replace(/\s/g, ''), 'hex');

	self.skipDecodeWarning();

	beforeEach(function ()
	{
		currentTest = this.currentTest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	describe(`init`, () =>
	{
		it(`BIG5_STR`, function (done)
		{
			let c = self.detect(BIG5_STR);

			expect(c.name).to.be.equal('Big5');
			expect(c.encoding).to.be.equal('Big5');

			done();
		});

		it(`BIG5_BUF`, function (done)
		{
			let c = self.detect(BIG5_BUF);

			expect(c.name).to.be.equal('Big5');
			expect(c.encoding).to.be.equal('Big5');

			done();
		});
	});

	describe(`iconv`, () =>
	{
		it(`encode big5`, function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			//expect(r).to.be.ok;
			//assert.isOk(r.value, util.inspect(r));

			let data = self.encode(BIG5_STR, 'big5');

			let c = self.detect(data);

			expect(c.name).to.be.equal('Big5');
			expect(c.encoding).to.be.equal('Big5');

			done();
		});
		it(`encode big5`, function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			//expect(r).to.be.ok;
			//assert.isOk(r.value, util.inspect(r));

			let data = self.encode(BIG5_BUF, 'big5');

			let c = self.detect(data, true);

			expect(c.name).to.be.equal('Big5');
			expect(c.encoding).to.be.equal('Big5');

			done();
		});

		it(`encode`, function (done)
		{
			let data = self.encode(BIG5_STR);

			let c = self.detect(data);

			expect(c.name).to.be.equal('UTF-8');
			expect(c.encoding).to.be.equal('UTF-8');

			expect(data).to.be.deep.equal(BIG5_UTF8_BUF);

			done();
		});

		it(`encode`, function (done)
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			//expect(r).to.be.ok;
			//assert.isOk(r.value, util.inspect(r));

			let data = self.encode(BIG5_BUF);

			let c = self.detect(data);

			expect(c.name).to.be.equal('UTF-8');
			expect(c.encoding).to.be.equal('UTF-8');

			expect(data).to.be.deep.equal(BIG5_UTF8_BUF);

			done();
		});
	});
});
