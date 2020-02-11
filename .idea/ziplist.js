const testValue1 = ['a','b','c'];
const testValue2 = [1, 2, 3];

function zipList(value1, value2) {
  const finalValue = [];
  for (int i = 0; i < testValue1.length; i++) {
    finalValue.push(testValue1[i], testValue2[i]);
  }
  return finalValue;
}

console.log(zipList(testValue1, testValue2));

function zipListTheSimpleWay(value1, value2) {
  return _.flatten(_.zip(value1, value2));
}

console.log(zipListTheSimpleWay(testValue1, testValue2));
