module.exports.mutatingMap = function (arr, cb) {
  arr.forEach((el, idx) => (arr[idx] = cb(el)));
  return arr;
};

module.exports.myMap = function (arr, cb) {
  const newArray = []
  for (let val of arr) newArray.push(cb(val));
  return newArray;
};

module.exports.originalMap = function (arr, cb) {
  return arr.map(cb);
};
