/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangleCount = 0;
  let prefLength = preferences.length;

  const wrongPref = (a, b) => a < 1 || a === b || a > prefLength;

  for (let i = 1; i <= prefLength; i++) {

    let love1 = preferences[i-1];
    let love2 = preferences[love1-1];
    let love3 = preferences[love2-1];

    if (wrongPref(love1, i) || wrongPref(love2, love1) || wrongPref(love3, love2)) {
      continue;
    }

    if (love3 === i) {
      triangleCount += 1;
      preferences[love2-1] = -1;
    }
  }

  return triangleCount;
};