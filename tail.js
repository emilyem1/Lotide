// Tail Function

const tail = function(array) {
  return array.splice(1); // Starts array at 1, cuts [0]
};

module.exports = tail;