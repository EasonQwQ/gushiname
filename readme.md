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

支持的词库

```
shijing 诗经  chuci 楚辞 tangshi 唐诗 songci 宋词 yuefu 乐府诗集 gushi 古诗三百首 cifu 著名辞赋

const name = require('gushiname');
name.loadBook('shijing')
```
生成名字
```
genName(firstNameLength = 0,lastNameLength = 0)
firstNameLength  1是一个字的姓氏，2 是复姓，0随机
lastNameLength   1是一个字，2是2个字，0随机
```
根据指定的文字生成名字
```
genNameWithChar(char,index,bookName)  
char 指定的字
index 1 是第一个字，2是第二个字，0随机 
bookName 指定词库
```
## TODO

接下来的版本添加平仄相关的内容

## Contributing

此仓库为 holynova 的https://github.com/holynova/gushi_namer 的 npm 包版本

PRs accepted.

MIT
