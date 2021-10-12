const Namer = require('./namer')
const arr = Array(1000).fill(1)
console.log("🚀 ~ file: test.js ~ line 3 ~ arr", arr.length)
let aaaa = []
arr.forEach((v,k) => {
  const res = Namer.genNameWithChar('宝', 1, )
  aaaa.push(res.name)

  if (res.name.length === 1) {
    console.log("🚀 ~ file: test.js ~ line 4 ~ res", res)
  }
})
console.log("🚀 ~ file: test.js ~ line 7 ~ arr.forEach ~ res.name", aaaa)
