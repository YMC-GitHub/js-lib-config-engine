export const readyPromise = () => Promise.resolve();
export const makeApiAlias = (map, key, Model) => map[key].forEach(alias => (Model.prototype[alias] = map[key]));
