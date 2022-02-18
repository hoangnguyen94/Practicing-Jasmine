it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 5,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('181.92');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10053,
    years: 6,
    rate: 3.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('155.00');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 60,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});