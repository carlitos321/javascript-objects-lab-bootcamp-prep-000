const recipes = {
  stepOne: 'add flour',
  stepTwo: 'add milk',
  stepThree: 'cook',
  stepFour: 'enjoy'
};


function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value
  return object
}

function deleteFromObjectByKey(object, key, value) {

}

function destructivelyDeleteFromObjectByKey(object, key, value) {

}
