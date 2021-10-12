const resultError = (errorStr) => {
  return {
    status: 1,
    msg: errorStr
  }
}
module.exports.resultError = resultError