// import chuci from './json/chuci.json'
// import cifu from './json/cifu.json'
// import gushi from './json/gushi.json'
// import shijing from './json/shijing.json'
// import songci from './json/songci.json'
// import tangshi from './json/tangshi.json'
// import yuefu from './json/yuefu.json'
// import Namer from './namer.js';
const Namer = require('./namer');
const fs = require('fs');
const namer = new Namer();
namer.loadBook('yuefu');
const res = namer.genName()
console.log('🚀 ~ file: test.js ~ line 41 ~ res', res);
