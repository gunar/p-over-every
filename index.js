'use strict'

const promiseReduce = require('promise-reduce')

function pOverEvery(predicates) {
  return function (...args) {
    return promiseReduce((acc, fn) => {
      return acc && fn(...args)
    }, true)(predicates)
  }
}

module.exports = pOverEvery
