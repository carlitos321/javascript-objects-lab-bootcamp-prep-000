const recipes = {
  stepOne: 'add flour',
  stepTwo: 'add milk',
  stepThree: 'cook',
  stepFour: 'enjoy'
};


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.key = value
  return Object
}

function deleteFromObjectByKey(object, key, value) {

}

function destructivelyDeleteFromObjectByKey(object, key, value) {

}
