const recipes = new Object({
  stepOne: 'add flour',
  stepTwo: 'add milk',
  stepThree: 'cook',
  stepFour: 'enjoy'
});


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return playlist.key = value
}
