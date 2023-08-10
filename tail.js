// Tail Function

const tail = function(array) {
  return array.slice(1); // Starts array at 1, cuts [0]
};

// Originally had this with .splice which modifies the original array.
// Now with .slice it returns a new array containing elements from [1]

module.exports = tail;