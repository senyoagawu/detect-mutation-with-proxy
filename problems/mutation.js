module.exports = (arr,   cb) => {
  arr.forEach((el, idx) => arr[idx] = cb(el));
  return arr
}