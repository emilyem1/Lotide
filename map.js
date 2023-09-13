const map = function(array, callback) {
  const results = []; // push into
  for (let item of array) { // loop through array
    results.push(callback(item)); // push the results in []
  }
  return results;
};

module.exports = map;
