/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const loves = preferences;
  const triangles = loves.filter((love, i) => loves[loves[love - 1] - 1] === i + 1);

  return Math.floor(triangles.length / 3);
};
