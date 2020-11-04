const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

const callback = (value) => {
  alert(value)
}

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      console.log(collection, callback)
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else {
        for (let num in collection){
          callback(collection[num])
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      // if not array, convert to array
      // assemble new array from transformed values
      let newCollection;
      if (!Array.isArray(collection)) {
        newCollection = Object.values(collection)
      } else {
        newCollection = collection.slice()
      }
      const newArray = []
      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]))
      }
      return newArray;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
