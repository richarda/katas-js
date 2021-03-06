'use strict';

let fizz_buzz = require('../lib/FizzBuzz.js');

describe('FizzBuzz', function() {
  describe('run FizzBuzz', function() {
    it('should return "1" given a 1', function() {
      var result = fizz_buzz(1);
      expect(result).to.equal('1');
    });

    xit('should return "0" given a 0', function() {
      expect(fizz_buzz(0)).to.equal('0');
    });

    xit('should return "fizz" given a 3', function() {
    });

    xit('should return "buzz" given a 5', function() {
    });

  });
});

