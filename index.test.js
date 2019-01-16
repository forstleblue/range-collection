const rc = require('range_collection')

rc.add([1, 5]);
rc.add([10, 20]);
rc.add([20, 20]);
rc.add([20, 21]);
rc.add([2, 4]);
rc.add([3, 8]);
rc.add([10, 10]);

rc.remove([10, 10]);
rc.remove([10, 11]);
rc.remove([15, 17]);
rc.remove([3, 19]);

// Should display: [1, 5) [10, 20)

test('Adding several collection lists', () => {
  expect(rc.collectionString()).toBe('[1, 3) [19, 21) ')
});