# gushiname

用诗经, 楚辞, 唐诗,宋词起名字

## Table of Contents

- [gushiname](#gushiname)
  - [Table of Contents](#table-of-contents)
  - [slogan](#slogan)
  - [Install](#install)
  - [Usage](#usage)
    - [optional](#optional)
  - [TODO](#todo)
  - [Contributing](#contributing)

## slogan

翻阅经典, 与一个好名字不期而遇

## Install

npm install gushiname



## Usage

```
const name = require('gushiname');
const res = name.genName(1,2);
```



### optional
genName() 有2个参数 firstNameLength lastNameLength
firstNameLength默认0，当值为1时是一个字的姓氏，2是复姓
lastNameLength 的值可为1或者2 

## TODO
接下来的版本添加平仄相关的内容


## Contributing
此仓库为holynova的https://github.com/holynova/gushi_namer 的npm包版本

PRs accepted.


MIT
