describe('FizzBuzz', function() {
  describe('run FizzBuzz', function() {
    it('should return "1" given a 1', function() {
      var result = FizzBuzz(1);
      expect(result).toEqual('1');
    });

    xit('should return "0" given a 0', function() {
      expect(FizzBuzz(0)).toEqual('0');
    });

    xit('should return "fizz" given a 3', function() {
    });

    xit('should return "buzz" given a 5', function() {
    });

  });
});


var FizzBuzz = function(number) {
  return '1';
}
