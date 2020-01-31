/* eslint-disable prettier/prettier */
import Feat from './feat';
import mixin from './mixin';
import makeSugar from './class-sugar';
// console.log(mixin);
Object.keys(mixin)
  .sort()
  .forEach(element => {
    Feat.prototype[element] = mixin[element];
  });

const api = {
  'create': mixin.set,
  'update': mixin.set,
  'read': mixin.get,
  'delete': mixin.delete,
  'merge': mixin.merge
};
Object.keys(api)
  .sort()
  .forEach(element => {
    if (!Feat.prototype[element]) {
      Feat.prototype[element] = api[element];
    }
  });
// make api alias
const apiAliasMap = {
  'create': ['add'],
  'update': ['put'],
  'read': ['get'],
  'delete': ['del']
};
Object.keys(apiAliasMap)
  .sort()
  .forEach(element => {
    if (apiAliasMap[element]) {
      // utils.makeApiAlias(apiAliasMap, element, Feat);
      apiAliasMap[element].forEach(alias => Feat.prototype[alias] = api[element]);
    }
    // console.log(element, api[element]);
  });
// console.log(pro);
const pro = makeSugar(Feat);
export default pro;
