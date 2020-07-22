export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  //var reg = new RegExp(prediction, 'g');
  //var result = string.match(reg);
  if (string === undefined || string == null || string.length === 0) {
    return 0;
  }
  var count = prediction === null ? string.length:result.length;
  return count;
}
