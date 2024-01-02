
 let values = {
  amount: 10000,
  rate: 5.8,
  years: 8
}

it('should calculate the monthly rate correctly', function () {
 
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
  console.log(calculateMonthlyPayment(values))
  // ...
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

/// etc
