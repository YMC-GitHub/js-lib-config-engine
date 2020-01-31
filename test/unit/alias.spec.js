import he from '../../src/index.js';
import { expect } from 'chai';
// include some data for test
import * as utils from './utils';
/* eslint-disable prettier/prettier */
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let state = {
  key: utils.randomStr(3, letters),
  val: utils.randomStr(3, letters)
};
let data = {
};
let feat = he.config(data);
/* eslint-enable prettier/prettier */

// feat.create(key,val).delete(key).read(key)
// console.log(feat.set('hi', 'hello').get('hi'));
describe('cured config alias', function() {
  it('add', function() {
    feat.add(state.key, state.val);
    expect(state.val).to.be.equal(feat.get(state.key));
  });
});

describe('read config alias', function() {
  it('get', function() {
    expect(state.val).to.be.equal(feat.get(state.key));
  });
});

describe('delete config alias', function() {
  it('del', function() {
    feat.del(state.key);
    expect(data).to.be.equal(feat.options);
  });
});

describe('update config alias', function() {
  it('put', function() {
    let val2 = utils.randomStr(3, letters);
    feat.put(state.key, val2);
    expect(val2).to.be.equal(feat.get(state.key));
  });
});
