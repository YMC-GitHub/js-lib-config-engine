# config-engine

## desc

create,update,read,delete and merge config for js


## how to use for production?
### install

```sh
#npm install config-engine --save-dev
npm install https://github.com/YMC-GitHub/js-lib-config-engineds.git --save-dev
```

### config

```js
const state = {}
```

### usage

```js
import He from 'config-engine'
He.config({}).merge(state).create(key,val).update(key,val).delete(key,val).read(key)
```

## how to use for developer?

### install

```sh
#get the code
git clone https://github.com/ymc-github/js-lib-config-engine.git
#get his dep
npm install
```

### usage

```sh
#dev
npm run dev

#build
npm run build

#release
npm run release

#lint
npm run lint
npm run lint:no-fix

#format
npm run beautify

#test
npm run test
npm run test:unit
npm run test:coverage
```


## Author

yemiancheng <ymc.github@gmail.com>

## License

MIT
