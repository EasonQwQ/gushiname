var pinyin = require('pinyin');
var path = require('path');
const chuci = require(`./json/chuci.json`);
const cifu = require(`./json/cifu.json`);
const gushi = require(`./json/gushi.json`);
const shijing = require(`./json/shijing.json`);
const songci = require(`./json/songci.json`);
const tangshi = require(`./json/tangshi.json`);
const yuefu = require(`./json/yuefu.json`);

const books = [{
    value: 'shijing',
    name: '诗经',
    data: shijing,
  },
  {
    value: 'chuci',
    name: '楚辞',
    data: chuci,
  },
  {
    value: 'tangshi',
    name: '唐诗',
    data: tangshi,
  },
  {
    value: 'songci',
    name: '宋词',
    data: songci,
  },
  {
    value: 'yuefu',
    name: '乐府诗集',
    data: yuefu,
  },
  {
    value: 'gushi',
    name: '古诗三百首',
    data: gushi,
  },
  {
    value: 'cifu',
    name: '著名辞赋',
    data: cifu,
  },
];
const choose = (arr) => {
  const index = between(0, arr.length);
  return arr[index];
};
const between = (min, max) =>
  // max is not included
  min + Math.floor(Math.random() * (max - min));

class Namer {
  constructor() {
    this.loading = false;
    this.book = null;
  }

  // TODO
  formatStr(str) {
    // const res = str.replace(/[\s　 ]/g, '');
    let res = str.replace(/(\s|　|”|“){1,}|<br>|<p>|<\/p>/g, '');
    res = res.replace(/\(.+\)/g, '');
    return res;
  }

  splitSentence(content) {
    if (!content) {
      return [];
    }
    let str = this.formatStr(content);
    str = str.replace(/！|。|？|；/g, (s) => `${s}|`);
    str = str.replace(/\|$/g, '');
    let arr = str.split('|');
    arr = arr.filter((item) => item.length >= 2);
    return arr;
  }

  // 清除标点符号
  cleanPunctuation(str) {
    const puncReg = /[<>《》！*\(\^\)\$%~!@#…&%￥—\+=、。，？；‘’“”：·`]/g;
    return str.replace(puncReg, '');
  }

  cleanBadChar(str) {
    const badChars =
      '愁胸鬼懒禽鸟鸡我邪罪凶丑仇鼠蟋蟀淫秽妹狐鸡鸭蝇悔鱼肉苦犬吠窥血丧饥女搔父母昏狗蟊疾病痛死潦哀痒害蛇牲妇狸鹅穴畜烂兽靡爪氓劫鬣螽毛婚姻匪婆羞辱贫奴葬冥坟'.split('');
    return str
      .split('')
      .filter((char) => badChars.indexOf(char) === -1)
      .join('');
  }
  getFirstName(len = 0) {
    // 单姓
    let oneName = [
      '赵',
      '钱',
      '孙',
      '李',
      '周',
      '吴',
      '郑',
      '王',
      '冯',
      '陈',
      '楮',
      '卫',
      '蒋',
      '沈',
      '韩',
      '杨',
      '朱',
      '秦',
      '尤',
      '许',
      '何',
      '吕',
      '施',
      '张',
      '孔',
      '曹',
      '严',
      '华',
      '金',
      '魏',
      '陶',
      '姜',
      '戚',
      '谢',
      '邹',
      '喻',
      '柏',
      '水',
      '窦',
      '章',
      '云',
      '苏',
      '潘',
      '葛',
      '奚',
      '范',
      '彭',
      '郎',
      '鲁',
      '韦',
      '昌',
      '马',
      '苗',
      '凤',
      '花',
      '方',
      '俞',
      '任',
      '袁',
      '柳',
      '酆',
      '鲍',
      '史',
      '唐',
      '费',
      '廉',
      '岑',
      '薛',
      '雷',
      '贺',
      '倪',
      '汤',
      '滕',
      '殷',
      '罗',
      '毕',
      '郝',
      '邬',
      '安',
      '常',
      '乐',
      '于',
      '时',
      '傅',
      '皮',
      '卞',
      '齐',
      '康',
      '伍',
      '余',
      '元',
      '卜',
      '顾',
      '孟',
      '平',
      '黄',
      '和',
      '穆',
      '萧',
      '尹',
      '姚',
      '邵',
      '湛',
      '汪',
      '祁',
      '毛',
      '禹',
      '狄',
      '米',
      '贝',
      '明',
      '臧',
      '计',
      '伏',
      '成',
      '戴',
      '谈',
      '宋',
      '茅',
      '庞',
      '熊',
      '纪',
      '舒',
      '屈',
      '项',
      '祝',
      '董',
      '梁',
      '杜',
      '阮',
      '蓝',
      '闽',
      '席',
      '季',
      '麻',
      '强',
      '贾',
      '路',
      '娄',
      '危',
      '江',
      '童',
      '颜',
      '郭',
      '梅',
      '盛',
      '林',
      '刁',
      '锺',
      '徐',
      '丘',
      '骆',
      '高',
      '夏',
      '蔡',
      '田',
      '樊',
      '胡',
      '凌',
      '霍',
      '虞',
      '万',
      '支',
      '柯',
      '昝',
      '管',
      '卢',
      '莫',
      '经',
      '房',
      '裘',
      '缪',
      '干',
      '解',
      '应',
      '宗',
      '丁',
      '宣',
      '贲',
      '邓',
      '郁',
      '单',
      '杭',
      '洪',
      '包',
      '诸',
      '左',
      '石',
      '崔',
      '吉',
      '钮',
      '龚',
      '程',
      '嵇',
      '邢',
      '滑',
      '裴',
      '陆',
      '荣',
      '翁',
      '荀',
      '羊',
      '於',
      '惠',
      '甄',
      '麹',
      '家',
      '封',
      '芮',
      '羿',
      '储',
      '靳',
      '汲',
      '邴',
      '糜',
      '松',
      '井',
      '段',
      '富',
      '巫',
      '乌',
      '焦',
      '巴',
      '弓',
      '牧',
      '隗',
      '山',
      '谷',
      '车',
      '侯',
      '宓',
      '蓬',
      '全',
      '郗',
      '班',
      '仰',
      '秋',
      '仲',
      '伊',
      '宫',
      '宁',
      '仇',
      '栾',
      '暴',
      '甘',
      '斜',
      '厉',
      '戎',
      '祖',
      '武',
      '符',
      '刘',
      '景',
      '詹',
      '束',
      '龙',
      '叶',
      '幸',
      '司',
      '韶',
      '郜',
      '黎',
      '蓟',
      '薄',
      '印',
      '宿',
      '白',
      '怀',
      '蒲',
      '邰',
      '从',
      '鄂',
      '索',
      '咸',
      '籍',
      '赖',
      '卓',
      '蔺',
      '屠',
      '蒙',
      '池',
      '乔',
      '阴',
      '郁',
      '胥',
      '能',
      '苍',
      '双',
      '闻',
      '莘',
      '党',
      '翟',
      '谭',
      '贡',
      '劳',
      '逄',
      '姬',
      '申',
      '扶',
      '堵',
      '冉',
      '宰',
      '郦',
      '雍',
      '郤',
      '璩',
      '桑',
      '桂',
      '濮',
      '牛',
      '寿',
      '通',
      '边',
      '扈',
      '燕',
      '冀',
      '郏',
      '浦',
      '尚',
      '农',
      '温',
      '别',
      '庄',
      '晏',
      '柴',
      '瞿',
      '阎',
      '充',
      '慕',
      '连',
      '茹',
      '习',
      '宦',
      '艾',
      '鱼',
      '容',
      '向',
      '古',
      '易',
      '慎',
      '戈',
      '廖',
      '庾',
      '终',
      '暨',
      '居',
      '衡',
      '步',
      '都',
      '耿',
      '满',
      '弘',
      '匡',
      '国',
      '文',
      '寇',
      '广',
      '禄',
      '阙',
      '东',
      '欧',
      '殳',
      '沃',
      '利',
      '蔚',
      '越',
      '夔',
      '隆',
      '师',
      '巩',
      '厍',
      '聂',
      '晁',
      '勾',
      '敖',
      '融',
      '冷',
      '訾',
      '辛',
      '阚',
      '那',
      '简',
      '饶',
      '空',
      '曾',
      '毋',
      '沙',
      '乜',
      '养',
      '鞠',
      '须',
      '丰',
      '巢',
      '关',
      '蒯',
      '相',
      '查',
      '后',
      '荆',
      '红',
      '游',
      '竺',
      '权',
      '逑',
      '盖',
      '益',
      '桓',
      '公',
      '仉',
      '督',
      '晋',
      '楚',
      '阎',
      '法',
      '汝',
      '鄢',
      '涂',
      '钦',
      '归',
      '海',
      '岳',
      '帅',
      '缑',
      '亢',
      '况',
      '后',
      '有',
      '琴',
      '商',
      '牟',
      '佘',
      '佴',
      '伯',
      '赏',
      '墨',
      '哈',
      '谯',
      '笪',
      '年',
      '爱',
      '阳',
      '佟',
    ];
    // 复姓
    let towName = [
      '万俟',
      '司马',
      '上官',
      '欧阳',
      '夏侯',
      '诸葛',
      '闻人',
      '东方',
      '赫连',
      '皇甫',
      '尉迟',
      '公羊',
      '澹台',
      '公冶',
      '宗政',
      '濮阳',
      '淳于',
      '单于',
      '太叔',
      '申屠',
      '公孙',
      '仲孙',
      '轩辕',
      '令狐',
      '锺离',
      '宇文',
      '长孙',
      '慕容',
      '鲜于',
      '闾丘',
      '司徒',
      '司空',
      '丌官',
      '司寇',
      '子车',
      '颛孙',
      '端木',
      '巫马',
      '公西',
      '漆雕',
      '乐正',
      '壤驷',
      '公良',
      '拓拔',
      '夹谷',
      '宰父',
      '谷梁',
      '段干',
      '百里',
      '东郭',
      '南门',
      '呼延',
      '羊舌',
      '微生',
      '梁丘',
      '左丘',
      '东门',
      '西门',
      '南宫',
    ];
    if (len === 0) {
      return '';
    } else if (len === 1) {
      let arr = oneName;
      return oneName[between(0, oneName.length)];
    } else {
      return towName[between(0, towName.length)];
    }
  }
  genName(firstNameLength = 0, lastNameLength = 0) {
    if (lastNameLength === 0) {
      lastNameLength = between(0, 2);
    }
    if (!this.book) {
      this.loadBook();
    }
    try {
      const passage = choose(this.book);
      const {
        content,
        title,
        author,
        book,
        dynasty
      } = passage;
      if (!content) {
        return null;
      }

      const sentenceArr = this.splitSentence(content);

      if (!(Array.isArray(sentenceArr) && sentenceArr.length > 0)) {
        return null;
      }
      const sentence = choose(sentenceArr);

      const cleanSentence = this.cleanBadChar(this.cleanPunctuation(sentence));
      if (cleanSentence.length <= 2) {
        return null;
      }
      let lastName = this.getSecondName(
        cleanSentence.split(''),
        lastNameLength
      );
      let firstName = this.getFirstName(firstNameLength);
      const res = {
        firstName,
        lastName,
        sentence,
        content,
        title,
        author,
        book,
        dynasty,
        firstNamePY: pinyin(firstName),
        lastNamePy: pinyin(lastName),
      };
      return res;
    } catch (err) {
      console.log('🚀 ~ file: namer.js ~ line 88 ~ Namer ~ genName ~ err', err);
    }
  }

  getSecondName(arr, length = 2) {
    const len = arr.length;
    const first = between(0, len);
    if (length === 1) {
      return arr[first];
    }
    let second = between(0, len);
    let cnt = 0;
    while (second === first) {
      second = between(0, len);
      cnt++;
      if (cnt > 100) {
        break;
      }
    }
    return first <= second ?
      `${arr[first]}${arr[second]}` :
      `${arr[second]}${arr[first]}`;
  }
  /**
   * 用户有没有指定book，如果指定了book，那么就用这个book查找，如果没有指定，那么就遍历，如果之前有book那么就用那么book
   * @param {*} char 
   * @param {*} book 
   */
  genNameWithChar(char, book) {

    // let hanzi = '[\u4e00-\u9fa5]{0,}'
    const reg = new RegExp(char, 'g')
    let booksIncludeChar = []
    if (!char) {
      return 'please input char'
    }
    if (!book) {
      booksIncludeChar = books.filter(v => {
        return v.data.some(j => {
          if (j.content) {
            return j.content.match(reg)
          } else {
            return false
          }
        })

      })
    } else {
      const index = books.findIndex((v) => v.value === book);
      if (index > -1) {

        if (books[index].data?.content?.match(reg)) {
          booksIncludeChar = [books[index].data]
        } else {
          booksIncludeChar = []
        }
      } else {
        booksIncludeChar = []
      }
    }
    if (booksIncludeChar.length === 0) {
      return 'dont include'
    }else{
      return booksIncludeChar
    }

  }


  loadBook(book) {
    const index = books.findIndex((v) => v.value === book);
    if (index > -1) {
      this.book = books[index].data;
    } else {
      this.book = books[between(0, books.length)].data;
    }
  }
}
const name = new Namer()
module.exports = name;
// export default Namer;