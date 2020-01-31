import he from '../../src/index.js';
import { expect } from 'chai';
// include some data for test
import * as utils from './utils';
/* eslint-disable prettier/prettier */
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let state = {
  'key': utils.randomStr(3, letters),
  'val': utils.randomStr(3, letters)
};
let state2 = {
  'key': utils.randomStr(3, letters),
  'val': utils.randomStr(3, letters)
};
let data = {
};
let feat = he.config(data);
/* eslint-enable prettier/prettier */

// feat.create(key,val).delete(key).read(key)
// console.log(feat.set('hi', 'hello').get('hi'));
describe('curd config', function() {
  it('init', function() {
    expect(data).to.be.equal(feat.options);
  });
  it('read', function() {
    expect(null).to.be.equal(feat.read(state.key));
  });
  it('create', function() {
    feat.create(state.key, state.val);
    expect(state.val).to.be.equal(feat.read(state.key));
  });
  it('update', function() {
    state.val = utils.randomStr(3, letters);
    feat.update(state.key, state.val);
    expect(state.val).to.be.equal(feat.read(state.key));
  });
  it('delete', function() {
    feat.delete(state.key);
    expect(null).to.be.equal(feat.read(state.key));
  });
  it('merge', function() {
    feat.merge({ [`${state2.key}`]: state2.val });
    expect(state2.val).to.be.equal(feat.read(state2.key));
  });
});
