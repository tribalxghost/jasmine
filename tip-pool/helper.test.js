it('should calculate the sum of the object passed in',function(){

let tipAmt = 1
let billAmt = 1
    let val = {tipAmt: 1,
    billAmt: 1,
    tipPercent: `${(tipAmt / billAmt) * 100}`



}
expect(sumPaymentTotal()).toEqual(100)
    
})