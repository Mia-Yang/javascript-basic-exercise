export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }

  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  const arr = array.reduceRight((next, value) => ({ value, next }), null);
  return arr;
}
