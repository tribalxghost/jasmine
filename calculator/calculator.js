window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let principle = document.getElementById("loan-amount").value = 10000
  let loanYears = document.getElementById("loan-years").value = 8
  let loanRate = document.getElementById("loan-rate").value = 5.8
  let monthlyPayment = document.getElementById("monthly-payment")
  let interest = (loanRate / 100) / 12
  let totalPayments = loanYears * 12
  console.log(loanYears)
  let monthly = (principle * interest)/(1 - Math.pow((1 + interest), -totalPayments))


  monthlyPayment.innerText = monthly.toFixed(2)
  

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthlyPayment = document.getElementById("monthly-payment")
  let interest = (getCurrentUIValues().rate / 100) / 12
  let monthly = (getCurrentUIValues().amount * interest)/(1 - Math.pow((1 + interest), -(getCurrentUIValues().years * 12)))
  monthlyPayment.innerText = monthly.toFixed(2)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount
  let interest = (values.rate / 100 ) / 12
  let totalPayments = values.years * 12
  
  let monthly = (principle * interest)/(1 - Math.pow((1 + interest), -totalPayments))
  console.log(values.years)
  monthly = monthly.toFixed(2)
   
   return monthly
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById("monthly-payment")
  monthlyPayment.innerText = monthly

}
