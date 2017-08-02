const test = require('tape')
const pOverEvery = require('./')

test('should return true if all pass', async t => {
  const iteratees = [
    () => Promise.resolve(true),
    () => Promise.resolve(true),
  ]
  const output = await pOverEvery(iteratees)(/* no args */)
  t.equal(output, true)
  t.end()
})

test('should return false if one fails', async t => {
  const iteratees = [
    () => Promise.resolve(false),
    () => Promise.resolve(true),
  ]
  const output = await pOverEvery(iteratees)(/* no args */)
  t.equal(output, false)
  t.end()
})

test('should accept both sync and async predicates', async t => {
  const iteratees = [
    () => true,
    () => Promise.resolve(true),
  ]
  const output = await pOverEvery(iteratees)(/* no args */)
  t.equal(output, true)
  t.end()
})

test('should accept single predicate (non-array)', async t => {
  const iteratees = () => true
  const output = await pOverEvery(iteratees)(/* no args */)
  t.equal(output, true)
  t.end()
})

test('should not call further iteratees after a failure', async t => {
  const iteratees = [
    () => false,
    () => new Promise(), // never resolving promise
  ]
  const output = await pOverEvery(iteratees)(/* no args */)
  t.equal(output, false)
  t.end()
})
