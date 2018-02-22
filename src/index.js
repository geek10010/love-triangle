/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var triangleCount = 0;
  var love1, love2, love3;
  for (var i=1; i<=preferences.length; i++) {
    love1 = preferences[i-1];
    if (love1 < 1 || love1 === i || love1 > preferences.length) {
      preferences[i-1] = -1;
      continue;
    }
    love2 = preferences[love1-1];
    if (love2 < 1 || love2 === love1 || love2 > preferences.length) {
      preferences[love1-1] = -1;
     continue;
    }
    love3 = preferences[love2-1];
    if (love3 < 1 || love3 === love2 || love3 > preferences.length) {
      preferences[love2-1] = -1;
      continue;
    }
  
    if (love3 === i){
      triangleCount += 1;
      preferences[i-1] = -1;
      preferences[love1-1] = -1;
      preferences[love2-1] = -1;
    }
  }
  return triangleCount;
};
