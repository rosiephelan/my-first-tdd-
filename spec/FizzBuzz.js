describe("fizzbuzz", function() {    
    it("should print 'FIZZ' is divisible by 3", function() {
      expect(fizzbuzz(3)).toEqual('FIZZ');
    });
    it("should print 'BUZZ' is divisible by 5", function() {
        expect(fizzbuzz(5)).toEqual('BUZZ');
      });
      it("should print 'FIZZBUZZ' is divisible by 5 and 3", function() {
        expect(fizzbuzz(15)).toEqual('FIZZBUZZ');
      });
      it("should print the given number if it's not divisible by 5 and 3", function() {
        expect(typeof(fizzbuzz(2))).toEqual('number');
        expect(fizzbuzz(2)).toEqual(2);
      });
}); 